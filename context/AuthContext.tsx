"use client";
import { db } from "@/utils/database";
import firebase from "@/utils/firebase";
import { FirebaseError } from "firebase/app";
import {
    Auth,
    GoogleAuthProvider,
    User,
    browserLocalPersistence,
    getAuth,
    setPersistence,
    signInWithPopup,
} from "firebase/auth";
import { get, onValue, ref, set } from "firebase/database";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { useSnackbar } from "./SnackbarContext";

interface AuthContextValues {
  user: User | null;
  isAdmin: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValues>({
  user: null,
  isAdmin: false,
  signIn: async () => {},
  signOut: async () => {},
});

export default AuthContext;

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const snackbar = useSnackbar();
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const auth = useRef<Auth | null>(null);
  const provider = useRef<GoogleAuthProvider | null>(null);

  useEffect(() => {
    auth.current = getAuth(firebase);
    auth.current.languageCode = "ko";
    provider.current = new GoogleAuthProvider();
  }, []);

  const addListeners = useCallback(() => {
    if (!auth.current) return () => {};

    const unsubscribeAuth = auth.current.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        try {
          const value = await get(ref(db, `admin_emails/${user.uid}`));
          const admin = value.exists();
          if (admin) {
            setIsAdmin(value.exists());
          } else {
            snackbar.enqueue({
              message: `관리자 계정이 아닙니다. 다른 관리자에게 요청해 관리자 권한을 획득하세요. UID: ${user.uid}`,
              severity: "warn",
              persist: true,
            });
          }
        } catch (error) {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    });

    const unsubscribeDb = onValue(
      ref(db, `admin_emails/${user?.uid ?? "null"}`),
      (snapshot) => {
        if (snapshot.exists()) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      }
    );

    return () => {
      unsubscribeAuth();
      unsubscribeDb();
    };
  }, [user]);

  useEffect(() => {
    const unsubscribe = addListeners();
    return () => unsubscribe();
  }, [addListeners]);

  const signIn = async () => {
    if (!auth.current || !provider.current) return;
    try {
      await setPersistence(auth.current, browserLocalPersistence);

      const result = await signInWithPopup(auth.current, provider.current);
      const user = result.user;
      setUser(user);

      await set(ref(db, `users/${user.uid}`), {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });

      snackbar.enqueue({
        message: "로그인되었습니다.",
        severity: "success",
      });
    } catch (error) {
      console.log(error);
      if (error instanceof FirebaseError) {
        snackbar.enqueue({
          message: `로그인에 실패했습니다: ${error.message}`,
          severity: "error",
        });
      } else {
        snackbar.enqueue({
          message: `로그인에 실패했습니다.`,
          severity: "error",
        });
      }
    }
  };

  const signOut = async () => {
    if (!auth.current) return;
    try {
      await auth.current.signOut();
      snackbar.enqueue({
        message: "로그아웃되었습니다.",
        severity: "success",
      });
    } catch (error) {
      console.log(error);
      if (error instanceof FirebaseError) {
        snackbar.enqueue({
          message: `로그아웃에 실패했습니다: ${error.message}`,
          severity: "error",
        });
      } else {
        snackbar.enqueue({
          message: `로그아웃에 실패했습니다.`,
          severity: "error",
        });
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

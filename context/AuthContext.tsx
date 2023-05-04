"use client";
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
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useSnackbar } from "./SnackbarContext";

const ALLOWED_EMAILS = ["me@shiftpsh.com"];

interface AuthContextValues {
  user: User | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValues>({
  user: null,
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

  const auth = useRef<Auth | null>(null);
  const provider = useRef<GoogleAuthProvider | null>(null);

  const initialize = () => {
    auth.current = getAuth(firebase);
    auth.current.languageCode = "ko";
    provider.current = new GoogleAuthProvider();

    const unsubscribe = auth.current.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  };

  useEffect(() => {
    const unsubscribe = initialize();
    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    if (!auth.current || !provider.current) return;
    try {
      await setPersistence(auth.current, browserLocalPersistence);
      const result = await signInWithPopup(auth.current, provider.current);
      const user = result.user;
      if (!ALLOWED_EMAILS.includes(user.email!)) {
        snackbar.enqueue({
          message: "허용되지 않은 이메일입니다.",
          severity: "error",
        });
        await signOut();
      }
      setUser(user);
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

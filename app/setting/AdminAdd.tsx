import { useAuth } from "@/context/AuthContext";
import { useSnackbar } from "@/context/SnackbarContext";
import { UserResponse } from "@/types/UserResponse";
import { db } from "@/utils/database";
import {
  Button,
  Cell,
  EmptyStatePlaceholder,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TextField,
  Typo,
} from "@solved-ac/ui-react";
import { IconPlus } from "@tabler/icons-react";
import { FirebaseError } from "firebase/app";
import { ref, set } from "firebase/database";
import { useMemo, useState } from "react";
import { ProfileImage, UserRow } from "./components";

interface Props {
  adminUIDs: string[];
  users: Map<string, UserResponse>;
}

const AdminAdd = ({ adminUIDs, users }: Props) => {
  const auth = useAuth();
  const snackbar = useSnackbar();

  const [query, setQuery] = useState<string>("");

  const adminsUIDsSet = useMemo(() => new Set(adminUIDs), [adminUIDs]);

  const queriedUsers = useMemo(() => {
    const lowerQuery = query.toLocaleLowerCase();
    return Array.from(users.values()).filter((x) => {
      if (adminsUIDsSet.has(x.uid)) return false;
      if (x.email.toLocaleLowerCase().includes(lowerQuery)) return true;
      if (x.name.toLocaleLowerCase().includes(lowerQuery)) return true;
      if (x.uid.toLocaleLowerCase().includes(lowerQuery)) return true;
      return false;
    });
  }, [adminsUIDsSet, query, users]);

  const handleAddAdmin = async (uid: string) => {
    try {
      await set(ref(db, "admin_emails/" + uid), true);
      snackbar.enqueue({
        message: "관리자를 추가했습니다.",
        severity: "success",
      });
    } catch (error) {
      console.error(error);
      if (error instanceof FirebaseError) {
        snackbar.enqueue({
          message: `관리자 추가에 실패했습니다: ${error.message}`,
          severity: "error",
        });
      } else {
        snackbar.enqueue({
          message: `관리자 추가에 실패했습니다.`,
          severity: "error",
        });
      }
    }
  };

  if (
    ["me@shiftpsh.com", "me@havana.moe"].every((x) => x !== auth.user?.email)
  ) {
    return (
      <EmptyStatePlaceholder>
        관리자 수정 권한이 없습니다.
      </EmptyStatePlaceholder>
    );
  }

  return (
    <>
      <TextField<"input">
        fullWidth
        placeholder="이메일, 이름, UID, ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Typo h3>검색 결과</Typo>
      {queriedUsers.length === 0 ? (
        <EmptyStatePlaceholder>검색 결과가 없습니다.</EmptyStatePlaceholder>
      ) : (
        <TableContainer>
          <Table fullWidth>
            <TableHead>
              <Row>
                <Cell width="60%">이름</Cell>
                <Cell width="20%">UID</Cell>
                <Cell width="20%">추가</Cell>
              </Row>
            </TableHead>
            <TableBody>
              {queriedUsers.map((user) => {
                const { uid } = user;
                return (
                  <Row key={uid}>
                    <Cell
                      style={{
                        verticalAlign: "middle",
                      }}
                    >
                      <UserRow>
                        <ProfileImage
                          src={user.photoURL}
                          alt={user.name + "의 프로필 사진"}
                        />
                        <div>
                          {user.name}
                          <br />
                          <Typo description small>
                            {user.email}
                          </Typo>
                        </div>
                      </UserRow>
                    </Cell>
                    <Cell
                      style={{
                        verticalAlign: "middle",
                      }}
                    >
                      <Typo small>{uid}</Typo>
                    </Cell>
                    <Cell>
                      <Button
                        fullWidth
                        transparent
                        onClick={() => handleAddAdmin(uid)}
                      >
                        <IconPlus />
                      </Button>
                    </Cell>
                  </Row>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default AdminAdd;

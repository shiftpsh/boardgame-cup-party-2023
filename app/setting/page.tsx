"use client";

import { useAuth } from "@/context/AuthContext";
import { useSnackbar } from "@/context/SnackbarContext";
import { UserResponse } from "@/types/UserResponse";
import { db } from "@/utils/database";
import styled from "@emotion/styled";
import {
    Button,
    Cell,
    Container,
    EmptyStatePlaceholder,
    Row,
    Space,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    Typo,
} from "@solved-ac/ui-react";
import { IconTrash } from "@tabler/icons-react";
import { FirebaseError } from "firebase/app";
import { onValue, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0 16px;
`;

export default function Setting() {
  const auth = useAuth();
  const snackbar = useSnackbar();

  const [adminEmails, setAdminEmails] = useState<string[]>([]);
  const [users, setUsers] = useState<Map<string, UserResponse>>(new Map());

  useEffect(() => {
    if (!auth.user) return;
    const unsubscribe = onValue(ref(db, "admin_emails"), (snapshot) => {
      const emails: string[] = [];
      snapshot.forEach((child) => {
        if (child.key) emails.push(child.key);
      });
      setAdminEmails(emails);
    });
    return unsubscribe;
  }, [auth.user]);

  useEffect(() => {
    const unsubscribe = onValue(ref(db, "users"), (snapshot) => {
      const users: Map<string, UserResponse> = new Map();
      snapshot.forEach((child) => {
        if (child.key) users.set(child.key, child.val());
      });
      setUsers(users);
    });
    return unsubscribe;
  }, []);

  const handleRemoveAdmin = async (uid: string) => {
    try {
      await remove(ref(db, "admin_emails/" + uid));
      snackbar.enqueue({
        message: "관리자를 삭제했습니다.",
        severity: "success",
      });
    } catch (error) {
      console.error(error);
      if (error instanceof FirebaseError) {
        snackbar.enqueue({
          message: `관리자 삭제에 실패했습니다: ${error.message}`,
          severity: "error",
        });
      } else {
        snackbar.enqueue({
          message: `관리자 삭제에 실패했습니다.`,
          severity: "error",
        });
      }
    }
  };

  if (!auth.isAdmin) {
    return (
      <Container>
        <EmptyStatePlaceholder>관리자가 아닙니다.</EmptyStatePlaceholder>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Space h={32} />
        <Typo h2>관리자 목록</Typo>
        <TableContainer>
          <Table fullWidth>
            <TableHead>
              <Row>
                <Cell width="40%">이름</Cell>
                <Cell width="40%">UID</Cell>
                <Cell width="20%">삭제</Cell>
              </Row>
            </TableHead>
            <TableBody>
              {adminEmails.map((uid) => {
                const user = users.get(uid);
                return (
                  <Row key={uid}>
                    {!user ? (
                      <Cell colSpan={2}>
                        <Typo
                          description
                          ellipsis
                          style={{
                            display: "block",
                          }}
                        >
                          {uid}
                        </Typo>
                      </Cell>
                    ) : (
                      <>
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
                          {uid}
                        </Cell>
                      </>
                    )}
                    <Cell>
                      <Button
                        fullWidth
                        transparent
                        onClick={() => handleRemoveAdmin(uid)}
                      >
                        <IconTrash />
                      </Button>
                    </Cell>
                  </Row>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

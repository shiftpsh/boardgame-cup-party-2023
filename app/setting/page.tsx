"use client";

import { useAuth } from "@/context/AuthContext";
import { UserResponse } from "@/types/UserResponse";
import { db } from "@/utils/database";
import {
  Button,
  Container,
  EmptyStatePlaceholder,
  Space,
  Typo,
} from "@solved-ac/ui-react";
import { IconInfoCircle } from "@tabler/icons-react";
import { onValue, ref } from "firebase/database";
import Link from "next/link";
import { useEffect, useState } from "react";
import AdminAdd from "./AdminAdd";
import AdminList from "./AdminList";
import Awards from "./Awards";
import EditFreeze from "./EditFreeze";

export default function Setting() {
  const auth = useAuth();

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
        if (child.key)
          users.set(child.key, {
            ...child.val(),
            uid: child.key,
          });
      });
      setUsers(users);
    });
    return unsubscribe;
  }, []);

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
        <Typo h2>프리즈</Typo>
        <EditFreeze />
        <Space h={32} />
        <Typo h2>어워드 모드</Typo>
        <Space h={8} />
        <Link href="/?award=true">
          <Button fullWidth>어워드 모드</Button>
        </Link>
        <Space h={8} />
        <Typo description>
          <IconInfoCircle /> 키보드 버튼 Space를 눌러 진행할 수 있습니다.
        </Typo>
        <Space h={32} />
        <Typo h2>관리자 목록</Typo>
        <AdminList adminUIDs={adminEmails} users={users} />
        <Space h={32} />
        <Typo h2>새 관리자 추가</Typo>
        <AdminAdd adminUIDs={adminEmails} users={users} />
        <Space h={32} />
        <Typo h2>현재 시점 상 목록</Typo>
        <Awards />
        <Space h={32} />
      </Container>
    </>
  );
}

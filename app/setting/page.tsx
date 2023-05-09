"use client";

import { useAuth } from "@/context/AuthContext";
import { useGames } from "@/context/GamesContext";
import { UserResponse } from "@/types/UserResponse";
import { db } from "@/utils/database";
import {
  Button,
  Container,
  EmptyStatePlaceholder,
  Space,
  TextField,
  Typo,
} from "@solved-ac/ui-react";
import { IconInfoCircle } from "@tabler/icons-react";
import { onValue, ref } from "firebase/database";
import Link from "next/link";
import { useEffect, useState } from "react";
import AdminAdd from "./AdminAdd";
import AdminList from "./AdminList";

export default function Setting() {
  const auth = useAuth();

  const { freezeAt, setFreezeAt } = useGames();
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  const freezeAtKst = new Date(freezeAt - timezoneOffset).toISOString();

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

  const handleFreezeDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    const time = freezeAtKst.split("T")[1].slice(0, 5);
    setFreezeAt(new Date(`${date}T${time}+09:00`).getTime());
  };

  const handleFreezeTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = freezeAtKst.split("T")[0];
    const time = e.target.value;
    setFreezeAt(new Date(`${date}T${time}+09:00`).getTime());
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
        <Typo h2>프리즈</Typo>
        <div
          style={{
            display: "flex",
            gap: "0 8px",
          }}
        >
          <TextField<"input">
            type="date"
            value={freezeAtKst.split("T")[0]}
            onChange={handleFreezeDateChange}
            fullWidth
          />
          <TextField<"input">
            type="time"
            value={freezeAtKst.split("T")[1].slice(0, 5)}
            onChange={handleFreezeTimeChange}
            fullWidth
          />
        </div>
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
      </Container>
    </>
  );
}

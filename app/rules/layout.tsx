"use client";
import { Container, Space } from "@solved-ac/ui-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Space h={32} />
      {children}
      <Space h={64} />
    </Container>
  );
}

"use client";
import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Button,
  SolvedGlobalStyles,
  Tab,
  Tabs,
  Typo,
  solvedThemes,
} from "@solved-ac/ui-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopContainer = styled.div`
  display: flex;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <ThemeProvider theme={solvedThemes.light}>
      <html lang="ko">
        <head>
          <link
            rel="stylesheet"
            as="style"
            crossOrigin="anonymous"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
          />
        </head>
        <body>
          <SolvedGlobalStyles />
          <Global
            styles={{
              ".tabler-icon": {
                verticalAlign: "middle",
                height: "1.15em",
              },
            }}
          />
          <TopContainer>
            <Tabs>
              <Link href="/" passHref>
                <Tab current={pathname === "/"} as="a">
                  스코어보드
                </Tab>
              </Link>
              <Link href="/calculator" passHref>
                <Tab current={pathname === "/calculator"} as="a">
                  점수 계산
                </Tab>
              </Link>
            </Tabs>
            <div style={{ flex: 1 }} />
            <Button transparent>
              <Typo description>관리</Typo>
            </Button>
          </TopContainer>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}

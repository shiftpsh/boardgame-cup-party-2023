"use client";
import TopBar from "@/component/TopBar";
import { AuthContextProvider } from "@/context/AuthContext";
import { SnackbarProvider } from "@/context/SnackbarContext";
import { Global, ThemeProvider } from "@emotion/react";
import { SolvedGlobalStyles, solvedThemes } from "@solved-ac/ui-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={solvedThemes.light}>
      <AuthContextProvider>
        <SnackbarProvider>
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
              <TopBar />

              {children}
            </body>
          </html>
        </SnackbarProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

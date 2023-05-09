"use client";
import TopBar from "@/component/TopBar";
import { AuthContextProvider } from "@/context/AuthContext";
import { SnackbarProvider } from "@/context/SnackbarContext";
import { theme } from "@/styles/theme";
import { Global, ThemeProvider } from "@emotion/react";
import { SolvedGlobalStyles } from "@solved-ac/ui-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <AuthContextProvider>
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
                  body: {
                    overflowAnchor: "none",
                  },
                }}
              />
              <TopBar />

              {children}
            </body>
          </html>
        </AuthContextProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

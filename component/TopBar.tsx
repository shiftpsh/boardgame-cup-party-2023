import { useAuth } from "@/context/AuthContext";
import styled from "@emotion/styled";
import { Button, Space, Tab, Tabs, Typo } from "@solved-ac/ui-react";
import { IconLogout, IconPlus, IconSettings } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  z-index: 1000;
  background-color: ${({ theme }) => theme.color.background.page};
`;

const TopBarButton = styled(Button)`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopBar = () => {
  const auth = useAuth();
  const pathname = usePathname();

  return (
    <TopContainer>
      <Tabs>
        <Link href="/" passHref legacyBehavior>
          <Tab current={pathname === "/"} as="a">
            스코어보드
          </Tab>
        </Link>
        <Link href="/calculator" passHref legacyBehavior>
          <Tab current={pathname === "/calculator"} as="a">
            점수 계산
          </Tab>
        </Link>
      </Tabs>
      <div style={{ flex: 1 }} />

      {auth.user ? (
        <>
          <TopBarButton transparent onClick={() => auth.signOut()}>
            <Typo>
              <IconLogout />
            </Typo>
          </TopBarButton>
          {auth.isAdmin && (
            <>
              <Link href="/add" passHref legacyBehavior>
                <TopBarButton transparent>
                  <Typo>
                    <IconPlus />
                  </Typo>
                </TopBarButton>
              </Link>
              <Link href="/setting" passHref legacyBehavior>
                <TopBarButton transparent as="a">
                  <Typo>
                    <IconSettings />
                  </Typo>
                </TopBarButton>
              </Link>
            </>
          )}
          <Space w={8} />
        </>
      ) : (
        <>
          <Button transparent onClick={() => auth.signIn()}>
            <Typo description>관리</Typo>
          </Button>
          <Space w={8} />
        </>
      )}
    </TopContainer>
  );
};

export default TopBar;

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

const DenseTab = styled(Tab)`
  min-width: 36px;
  padding-left: 8px;
  padding-right: 8px;
  @media (min-width: 768px) {
    min-width: 72px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const TopBar = () => {
  const auth = useAuth();
  const pathname = usePathname();

  return (
    <TopContainer>
      <Tabs>
        <Link href="/" passHref legacyBehavior>
          <DenseTab current={pathname === "/"} as="a">
            랭킹
          </DenseTab>
        </Link>
        <Link href="/rules" passHref legacyBehavior>
          <DenseTab current={pathname === "/rules"} as="a">
            규칙
          </DenseTab>
        </Link>
        <Link href="/calculator" passHref legacyBehavior>
          <DenseTab current={pathname === "/calculator"} as="a">
            계산기
          </DenseTab>
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

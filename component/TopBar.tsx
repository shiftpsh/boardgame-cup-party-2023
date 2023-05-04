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
          <Button transparent onClick={() => auth.signOut()}>
            <Typo>
              <IconLogout />
            </Typo>
          </Button>
          {auth.isAdmin && (
            <>
              <Button transparent>
                <Typo>
                  <IconPlus />
                </Typo>
              </Button>
              <Button transparent>
                <Typo>
                  <IconSettings />
                </Typo>
              </Button>
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

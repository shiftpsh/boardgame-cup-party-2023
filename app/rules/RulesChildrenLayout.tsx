/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Emoji from "@/component/Emoji";
import { Space, Tab, Tabs, Typo } from "@solved-ac/ui-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface RulesLayoutProps {
  title: string;
  emoji: string;
  tabs?: {
    title: string;
    href: string;
  }[];
}

const generateRulesLayout = ({ title, emoji, tabs }: RulesLayoutProps) => {
  const layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
      <>
        <span style={{ fontSize: "2rem" }}>
          <Emoji emoji={emoji} />
        </span>
        <Typo h2>{title}</Typo>
        {tabs && tabs.length > 0 && (
          <>
            <Tabs>
              {tabs.map((tab) => (
                <Link href={tab.href} key={tab.href} passHref legacyBehavior>
                  <Tab as="a" current={pathname === tab.href}>
                    {tab.title}
                  </Tab>
                </Link>
              ))}
            </Tabs>
          </>
        )}
        <Space h={32} />
        {children}
      </>
    );
  };
  return layout;
};

export default generateRulesLayout;

"use client";

import Emoji from "@/component/Emoji";
import { Space, Typo } from "@solved-ac/ui-react";

interface RulesLayoutProps {
  title: string;
  emoji: string;
}

const generateRulesLayout = ({ title, emoji }: RulesLayoutProps) => {
  const layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <span style={{ fontSize: "2rem" }}>
          <Emoji emoji={emoji} />
        </span>
        <Typo h2>{title}</Typo>
        <Space h={32} />
        {children}
      </>
    );
  };
  return layout;
};

export default generateRulesLayout;

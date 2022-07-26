import React from "react";
import HeaderLayout from "../Header/Header.layout";

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="bg-backgroundColor">
      <HeaderLayout>
        <div className="px-[220px] pt-[43px]">{children}</div>
      </HeaderLayout>
    </div>
  );
};

export default MainLayout;

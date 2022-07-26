import React from "react";

interface IProps {
  children: React.ReactNode;
}

const HeaderLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="w-screen font-poppins text-dark min-h-screen">
      <div
        className="bg-lightBlue h-[105px] shadow-v1 flex items-center pl-56"
        data-cy="header-background"
      >
        <h1 className="font-bold text-2xl text-white" data-cy="header-title">
          TO DO LIST APP
        </h1>
      </div>
      {children}
    </div>
  );
};

export default HeaderLayout;

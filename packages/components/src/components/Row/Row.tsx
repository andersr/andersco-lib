import React from "react";

interface Props {
  children: React.ReactNode;
  customStyles?: string;
}

export function Row({ children, customStyles }: Props) {
  return (
    <div className={`flex flex-row items-center ${customStyles || ""}`}>
      {children}
    </div>
  );
}

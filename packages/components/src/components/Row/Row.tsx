import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Row({ children }: Props) {
  return <div className="flex flex-row items-center">{children}</div>;
}

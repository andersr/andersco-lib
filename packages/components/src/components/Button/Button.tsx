import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Button({ children }: Props) {
  return (
    <button className="text-3xl font-bold rounded p-4 bg-slate-300">
      {children}
    </button>
  );
}

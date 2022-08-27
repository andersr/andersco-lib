import React from "react";

interface Props {
  children: React.ReactNode;
  footerContent?: React.ReactNode;
}

// TODO: need to also set the following for this to be full height:

// html, body,  div#root  {
//     @apply h-full;
//    }

export function FullHeightLayout({ children, footerContent }: Props) {
  return (
    <div className={`h-full flex flex-col`}>
      <main
        className={`mt-28 md:mt-24 flex-1 px-4 md:px-5 max-w-6xl mx-auto md:min-w-[30rem]`}
      >
        {children}
      </main>
      <footer className="text-xs text-slate-400 mt-5">{footerContent}</footer>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
}

export function CopyRight({ children }: Props) {
  return (
    <span>
      &copy; {new Date().getFullYear()} {children}
    </span>
  );
}

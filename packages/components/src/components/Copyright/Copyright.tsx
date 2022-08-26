interface Props {
  orgName?: string;
}

export function CopyRight({ orgName }: Props) {
  return (
    <>
      &copy; {new Date().getFullYear()} {orgName}
    </>
  );
}

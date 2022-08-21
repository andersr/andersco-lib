interface Props {
  showMask: boolean;
  onClick?: () => void;
}

export function Mask({ onClick, showMask }: Props) {
  return showMask ? (
    <div
      className={`transform absolute z-10 h-screen w-screen opacity-50 bg-gray-300 ease-in-out transition-opacity duration-300`}
      onClick={onClick}
      data-testid={"mask"}
    />
  ) : null;
}

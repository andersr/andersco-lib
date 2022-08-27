/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// TODO: Make mask click keyboard accessible, eg click on esc to hide mask, or
interface Props {
  showMask: boolean;
  onClick?: () => void;
  // onKeyUp: React.KeyboardEventHandler<HTMLDivElement>;
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

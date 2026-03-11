import type { TPage } from "../types/PageType";

interface IButtonProps {
  page?: TPage;
  isActive?: boolean;
  handleSetActivePage?: (page: TPage) => void;
  children: React.ReactNode;
}

const Button = ({
  isActive,
  handleSetActivePage,
  page,
  children,
}: IButtonProps) => {
  const handleClick = () => {
    if (page && handleSetActivePage) {
      handleSetActivePage(page);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`${isActive && "bg-[#3A6FF8] text-white"} flex items-center gap-2.5 px-3.5 py-2.5 border-none w-full rounded-[10px] hover:bg-[#3A6FF8] hover:text-white transition duration-100`}
    >
      {children}
    </button>
  );
};

export default Button;

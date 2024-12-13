import { FaRegEdit } from "react-icons/fa";

interface PropsType {
  handleClick?: () => void;
}

export default function EditBtn(props: PropsType) {
  return (
    <div
      className="px-[20px] h-[50px] rounded-full border-2 border-white flex items-center justify-center cursor-pointer"
      onClick={props.handleClick}
    >
      <div className="flex gap-x-2 text-white text-[16px] font-['montserrat'] items-center font-semibold whitespace-nowrap">
        <FaRegEdit />
        <span>Edit my profile</span>
      </div>
    </div>
  );
}

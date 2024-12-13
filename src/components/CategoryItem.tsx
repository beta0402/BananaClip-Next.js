import { FaAngleDown } from "react-icons/fa";

interface PropsType {
  title: String;
  cnt: String;
}

export default function CategoryItem(props: PropsType) {
  return (
    <div className="w-full flex justify-between items-center">
      <div>{props.title}</div>
      <div className="flex gap-x-2 text-fourth items-center">
        <div>{props.cnt}</div>
        <FaAngleDown />
      </div>
    </div>
  );
}

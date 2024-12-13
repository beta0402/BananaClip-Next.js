interface PropsType {
  title: String;
  onClick: () => void;
  isActive: Boolean;
}

export default function ProfileNavBarItem(props: PropsType) {
  return (
    <div
      className={`rounded-[16px] w-[170px] h-[55px] flex items-center justify-center text-[17px] cursor-pointer ${
        props.isActive
          ? "bg-light_yellow text-black"
          : "bg-profile_nav text-secondary"
      }`}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
}

interface ButtonProps {
  title: String;
  onClick?: () => void;
  dataAction?: String;
}

export default function NormalButton(props: ButtonProps) {
  return (
    <div
      className="flex w-full h-full bg-btn_normal hover:bg-btn_hover border rounded-[10px] border-secondary items-center justify-center cursor-pointer"
      onClick={props.onClick}
      data-action={props.dataAction}
    >
      {props.title}
    </div>
  );
}

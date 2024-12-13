interface PropsType {
  title: String;
  cnt: String;
}

export default function ShowOnlyItem(props: PropsType) {
  return (
    <div className="w-full flex justify-between items-center text-[19px]">
      <div className="flex gap-x-2">
        <input type="checkbox"></input>
        <div>{props.title}</div>
      </div>
      <div className="text-fourth">{props.cnt}</div>
    </div>
  );
}

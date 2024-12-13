import SearchSmallIcon from "./Icons/SearchSmallIcon";

export default function SearchBar() {
  return (
    <div className="w-full h-[45px] flex items-center gap-x-2 rounded-[10px] border border-secondary bg-btn_normal hover:bg-btn_hover p-2 text-[20px]">
      <SearchSmallIcon />
      <input
        placeholder="Search marketplace"
        className="bg-transparent outline-none"
      ></input>
    </div>
  );
}

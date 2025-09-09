
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";
import GenreDropDown from "../ui/GenreDropDown";
import SearchInput from "../SearchInput";




export const NavigationMenuDemo = () => {
  return (
    <div className="flex h-9  my-[11.5px] justify-center">
      <img src="images/moviez.png" alt="logo" className="h-5 w-23 m-2" />
      <GenreDropDown />
      <Input className="w-[370px] ml-[12px] mr-[300px]" placeholder="Search" />
      
      <ModeToggle />
    </div>
  );
};

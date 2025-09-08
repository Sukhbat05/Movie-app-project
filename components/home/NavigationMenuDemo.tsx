import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Input } from "../ui/input";

export const NavigationMenuDemo = () => {
  return (
    <div className="flex h-9 w-360  my-[11.5px] justify-center">
      <img src="images/moviez.png" alt="logo" className="h-5 w-23 m-2" />
      <NavigationMenu className="ml-[332px] w-[97px]">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
            <NavigationMenuContent className="flex">
              <NavigationMenuLink>Action</NavigationMenuLink>
              <NavigationMenuLink>Comedy</NavigationMenuLink>
              <NavigationMenuLink>Horror</NavigationMenuLink>
              <NavigationMenuLink>Adventure</NavigationMenuLink>
              <NavigationMenuLink>Animation</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Input className="w-[370px] ml-[12px]" placeholder="Search" />
      <img src="images/icon.png" alt="icon" className="ml-[332px]" />
    </div>
  );
};

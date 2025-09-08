import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MovieCardProps = {
  title: string;
  score: number;
  image: string;
};

export const MovieCard = ({ title, score, image }: MovieCardProps) => {
  return (
    <Card className="bg-secondary w-[230px] h-[439px] p-0 overflow-hidden gap-2">
      <CardContent className="p-0">
        <Image width={230} height={430} src={image} alt="" unoptimized />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 text-lg ">
        <CardDescription className="text-[14px] flex h-6 justify-center gap-1">
          <FaStar color="black" />
          <span>{score}/10</span>
        </CardDescription>
        <CardDescription className="text-lg">{title}</CardDescription>
      </CardFooter>
    </Card>
  );
};

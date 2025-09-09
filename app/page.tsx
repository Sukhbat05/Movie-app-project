import { MovieCard } from "@/components/home";

import Movie from "@/components/ui/Movie";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <div>
      <div>
        <img
          className=" w-360 h-150 flex justify-center mt-6 m-auto"
          src="https://cdn2.nbcuni.com/NBCUniversal/2024-11/WKD_TVSlide_1920x1080pxH_Reach_8.jpg?VersionId=0PgVNcaZKc9Kn2pkdR.F4Km7fOc9_As7"
          alt="movie"
        />
      </div>

      <div className="w-360 m-auto">
        <Movie />
      </div>
    </div>
  );
}

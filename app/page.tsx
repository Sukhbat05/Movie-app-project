import { MovieCard} from "@/components/home";
import { NavigationMenuDemo } from "@/components/home";
import { CiSearch } from "react-icons/ci";


export default function Home() {
  return (
    <div>
     <NavigationMenuDemo></NavigationMenuDemo>
     <div> 
       <img className=" w-360 h-150 flex justify-center mt-6" src="https://cdn2.nbcuni.com/NBCUniversal/2024-11/WKD_TVSlide_1920x1080pxH_Reach_8.jpg?VersionId=0PgVNcaZKc9Kn2pkdR.F4Km7fOc9_As7" alt="movie"/>
     </div>
     <div className="flex">
      <MovieCard
        title="Dear Santa"
        score={9}
        image="https://m.media-amazon.com/images/M/MV5BMDNjMzcxNTEtODRjYi00MGQ4LWE3YjAtNjllYzE1OThmZmRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      />
            <MovieCard
        title="Attack On Titan"
        score={6.9}
        image="https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      />
            <MovieCard
        title="Code Geass"
        score={9}
        image="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186544_b_v8_ad.jpg"
      />
            <MovieCard
        title="Hunter x Hunter"
        score={7.4}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBHKUPYA-LIYQ8kBzEGCzbuIszag0sJEaHw&s"
      />
            <MovieCard
        title="Kuroko Basketball"
        score={8.4}
        image="https://m.media-amazon.com/images/M/MV5BYmI3NDAyZGUtYWZiZC00YWIwLTgyNDQtYjZmOGFmNTkzODYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      />
      </div>
     
   </div>
  );
}

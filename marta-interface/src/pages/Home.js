import NavButton from "../components/NavButton";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
          <div class="border-b-2 flex flex-row justify-evenly">
            <div class="font-semibold text-5xl m-auto">MARTA</div>
            <a class="self-center mr-3 hover:cursor-pointer" onClick={() => {navigate("/about");}}>About MARTA</a>
          </div>
          <div class="flex flex-row justify-evenly mt-10">
            <div class="flex flex-col">
              <div class="text-4xl">VIEW ROUTES SCHEDULE</div>
              <div class="mt-8">
                <NavButton line="gold"/>
                <NavButton line="red"/>
                <NavButton line="blue"/>
                <NavButton line="green"/>
              </div>
            </div>
            <div class="h-96 object-scale-down">
              <img class="max-h-full" src={"https://pbs.twimg.com/media/GEDTLN9XEAAzk84.jpg"} alt="marta train"/>
            </div>
          </div>
        </div>
      );
}
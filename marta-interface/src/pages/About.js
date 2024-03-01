import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    let text = "MARTA is the nation’s ninth largest transit system and the largest of its kind in the Southeast that provides bus, rail, and paratransit service. With 40 years of operations under its belt, MARTA services three of the five core counties in the region and generates $2.6 billion in economic impact to the state of Georgia. Employees of the region’s fastest growing sectors overwhelmingly choose MARTA to get to and from work. People from every demographic across the region trust MARTA with their routine transportation needs.";
    return (
        <div class="w-full">
          <button class="bg-black text-white mt-3 ml-3 px-3 rounded" onClick={() => navigate("/")}>Back</button>
          <div class="flex flex-col content-center flex-wrap">
            <div class="h-80 object-scale-down self-center">
              <img class="max-h-full" src={"https://www.councilforqualitygrowth.org/wp-content/uploads/2021/01/MARTA-Reversed-Signature-CMYK.png"} alt="marta train"/>
            </div>
            <div class="w-2/5 text-center self-center">{text}</div>
          </div>
        </div>
      );
}
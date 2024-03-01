import { useNavigate } from "react-router-dom";

export default function NavButton(props) {
    const navigate = useNavigate();
    let color = "text-yellow-400";
    if (props.line === "red") {
        color = "text-red-400";
    } else if (props.line === "blue") {
        color = "text-blue-400"
    } else if (props.line === "green") {
        color = "text-green-400"
    }
    return (
        <button class="text-xl border-b-2 w-full text-left border-black"
            onClick={() => {
                navigate("/" + props.line);
            }}
            >
                <span class={color}>{props.line.substring(0, 1).toUpperCase() + props.line.substring(1)}</span> Line
        </button>
    );
}
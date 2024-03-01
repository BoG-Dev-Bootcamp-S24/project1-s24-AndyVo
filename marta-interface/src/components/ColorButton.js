export default function ColorButton( { line, setColor } ) {
    let color = "bg-yellow-400";
    if (line === "red") {
        color = "bg-red-400";
    } else if (line === "blue") {
        color = "bg-blue-400"
    } else if (line === "green") {
        color = "bg-green-400"
    }
    let onClick = () => {
        setColor(line);
    }
    if (!setColor) {
        onClick = () => {};
    }
    return (
        <button class={"text-white rounded-xl text-xl px-4 py-0.5 " + color} onClick={onClick}
      >{line.substring(0, 1).toUpperCase() + line.substring(1)}</button>
    );
}
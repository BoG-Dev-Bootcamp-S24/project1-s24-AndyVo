export default function NavBar( { color, data, setStation } ) {
    if (data) {
        return (
            <div class="pl-2 bg-black w-80 h-full">
                <div class="py-4 text-gray-400">Select your starting station</div>
                <div class="text-white py-3 pl-4 text-lg border-b-4 border-white hover:cursor-pointer" onClick={() => {
                    setStation(null);
                }}>All Stations</div>
                {data.map((station) => {
                    return <div class="text-white py-3 pl-4 text-lg border-b-4 border-white hover:cursor-pointer" onClick={() => {
                        if (station === "Lakewood/Ft. McPherson") {
                            setStation("LAKEWOOD STATION");
                        } else {
                            setStation(station.toUpperCase() + " STATION");
                        }
                    }}>{station}</div>;
                })}
            </div>
        );
    } else {
        return (
            <div>Error fetching data</div>
        )
    }
}
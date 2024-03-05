export default function NavBar( { color, data, setStation, currStation } ) {
    if (data) {
        return (
            <div class="pl-2 bg-black w-80 h-full">
                <div class="py-4 text-gray-400">Select your starting station</div>
                <div class="text-white py-3 pl-4 text-lg border-b-4 border-white hover:cursor-pointer" onClick={() => {
                    setStation(null);
                }}>All Stations</div>
                {data.map((station) => {
                    station === "Lakewood/Ft. McPherson" ? (
                        currStation === "LAKEWOOD STATION" ? (
                            <div class="text-black py-3 pl-4 text-lg border-b-4 border-white hover:cursor-pointer bg-white" onClick={() => {
                                setStation("LAKEWOOD STATION");
                            }}>{station}</div>
                        ) : (
                            <div class="text-white py-3 pl-4 text-lg border-b-4 border-white hover:cursor-pointer" onClick={() => {
                                setStation("LAKEWOOD STATION");
                            }}>{station}</div>
                        )) : (
                            currStation === station.toUpperCase() + " STATION" ? (
                                <div class="text-black py-3 pl-4 text-lg border-b-4 border-white hover:cursor-pointer bg-white" onClick={() => {
                                    setStation(station.toUpperCase() + " STATION");
                                }}>{station}</div>
                            ) : (
                                <div class="text-white py-3 pl-4 text-lg border-b-4 border-white hover:cursor-pointer" onClick={() => {
                                    setStation(station.toUpperCase() + " STATION");
                                }}>{station}</div>
                            )
                        )
                })}
            </div>
        );
    } else {
        return (
            <div>Error fetching data</div>
        )
    }
}
import { useState, useEffect } from "react";
import Train from "./Train"

export default function TrainList( { color, data, station, count } ) {
    const [arriving, setArriving] = useState(false);
    const [scheduled, setScheduled] = useState(false);
    const [firstDir, setFirstDir] = useState(false);
    const [secondDir, setSecondDir] = useState(false);

    let northsouth = true;
    if (color === "green" || color === "blue") {
        northsouth = false;
    }
    
    if (data) {
        return (
            <div class="flex flex-col align-center w-full">
                {count > 0 ? (
                <div class="self-end mr-2">Data refreshes in: {count}</div>
                ) : (
                <div class="self-end mr-2">Data refreshing</div>
                )}
                <div class="flex flex-row justify-center">
                    {arriving ? <button class="border-2 rounded border-black px-5 mr-2 text-white bg-black" onClick={() => {
                        setArriving(false)
                    }}>Arriving</button>
                    : <button class="border-2 rounded border-black px-5 mr-2" onClick={() => {
                        setArriving(true)
                    }}>Arriving</button>}
                    {scheduled ? <button class="border-2 rounded border-black px-5 mr-2 text-white bg-black" onClick={() => {
                        setScheduled(false)
                    }}>Scheduled</button>
                    : <button class="border-2 rounded border-black px-5 mr-2" onClick={() => {
                        setScheduled(true)
                    }}>Scheduled</button>}
                    {firstDir ? <button class="border-2 rounded border-black px-5 mr-2 text-white bg-black" onClick={() => {
                        setFirstDir(false)
                    }}>{northsouth ? "Northbound" : "Eastbound"}</button>
                    : <button class="border-2 rounded border-black px-5 mr-2" onClick={() => {
                        setFirstDir(true)
                    }}>{northsouth ? "Northbound" : "Eastbound"}</button>}
                    {secondDir ? <button class="border-2 rounded border-black px-5 mr-2 text-white bg-black" onClick={() => {
                        setSecondDir(false)
                    }}>{northsouth ? "Soundbound" : "Westbound"}</button>
                    : <button class="border-2 rounded border-black px-5 mr-2" onClick={() => {
                        setSecondDir(true)
                    }}>{northsouth ? "Southbound" : "Westbound"}</button>}
                </div>
                {(!arriving && !scheduled && !firstDir && !secondDir) ? (
                    !station ? (
                        data.length > 0 ? (
                            data.map((train) => {
                                return <Train train={train}/>;
                            })
                        ) : (
                            <div>No trains found</div>
                        )
                    ) : (
                        data.filter((train) =>
                            train.STATION === station
                        ).length > 0 ? (
                            data.filter((train) =>
                                train.STATION === station)
                            .map((train) => {
                                return <Train train={train}/>;
                            })
                        ) : (
                            <div>No trains found</div>
                        )
                    )
                ) : (
                    !station ? (
                        data.filter((train) =>
                            (!arriving || train.WAITING_SECONDS === 0) &&
                            (!scheduled || train.WAITING_SECONDS !== 0) &&
                            (!firstDir || train.DIRECTION === (northsouth ? "N" : "E")) &&
                            (!secondDir || train.DIRECTION === (northsouth ? "S" : "W"))
                        ).length > 0 ? (
                            data.filter((train) =>
                            (!arriving || train.WAITING_SECONDS === 0) &&
                            (!scheduled || train.WAITING_SECONDS !== 0) &&
                            (!firstDir || train.DIRECTION === (northsouth ? "N" : "E")) &&
                            (!secondDir || train.DIRECTION === (northsouth ? "S" : "W"))
                            ).map((train) => {
                            return <Train train={train}/>;
                        })) : (
                            <div>No trains found</div>
                        )
                    ) : (
                        data.filter((train) =>
                            train.STATION === station
                        ).filter((train) =>
                            (!arriving || train.WAITING_SECONDS === 0) &&
                            (!scheduled || train.WAITING_SECONDS !== 0) &&
                            (!firstDir || train.DIRECTION === (northsouth ? "N" : "E")) &&
                            (!secondDir || train.DIRECTION === (northsouth ? "S" : "W"))
                        ).length > 0 ? (
                            data.filter((train) =>
                            train.STATION === station
                            ).filter((train) =>
                            (!arriving || train.WAITING_SECONDS === 0) &&
                            (!scheduled || train.WAITING_SECONDS !== 0) &&
                            (!firstDir || train.DIRECTION === (northsouth ? "N" : "E")) &&
                            (!secondDir || train.DIRECTION === (northsouth ? "S" : "W"))
                            ).map((train) => {
                            return <Train train={train}/>;
                        })) : (
                            <div>No trains found</div>
                        )
                    )
                )}
            </div>
        );
    } else {
        return (
            <div>Error fetching data</div>
        )
    }
}
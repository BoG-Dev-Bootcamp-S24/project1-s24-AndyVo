export default function Train( { train } ) {
    let color = "bg-yellow-400";
    if (train.LINE === "RED") {
        color = "bg-red-400";
    } else if (train.LINE === "BLUE") {
        color = "bg-blue-400"
    } else if (train.LINE === "GREEN") {
        color = "bg-green-400"
    }
    let delay = false;
    if (train.DELAY !== "T0S") {
        delay = true;
    }
    return (
        <div class="flex flex-row justify-between border-b-2 ml-10 py-8">
            <div class="flex flex-row">
                <div class="self-center text-5xl">{train.STATION.substring(0, 1)}</div>
                <div class="flex flex-col ml-16">
                    <div class="text-xl pb-4">{train.STATION} → {train.DESTINATION}</div>
                    <div class="flex flex-row">
                        <div class={"text-white px-3 rounded-md mr-2 " + color}>{train.LINE}</div>
                        {delay ? (
                            <div class="text-red-400">Delayed</div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
            <div class={"flex flex-col align-center mr-16" + (delay ? " text-red-400" : " text-green-400")}>
                {train.WAITING_SECONDS === 0 ? (
                    <div>Arriving</div>
                ) : (
                    <div>
                        <div>{Math.trunc(train.WAITING_SECONDS/60)} min</div>
                        <div>{train.WAITING_SECONDS % 60} sec</div>
                    </div>
                )}
            </div>
        </div>
    )
}
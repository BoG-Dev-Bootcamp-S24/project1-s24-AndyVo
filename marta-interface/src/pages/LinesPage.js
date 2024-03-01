import TrainList from "../components/TrainList";
import NavBar from "../components/NavBar";
import ColorButton from "../components/ColorButton";
import { useEffect, useState } from "react";

export default function LinesPage( { color } ) {
    const [currColor, setColor] = useState(color);
    const [stationLoading, setStationLoading] = useState(true);
    const [trainLoading, setTrainLoading] = useState(true);
    const [stationData, setStationData] = useState(null);
    const [trainData, setTrainData] = useState(null);
    const [station, setStation] = useState(null);
    const [count ,setCount] = useState(10);

    const TRAIN_URL = "https://midsem-bootcamp-api.onrender.com/arrivals/";
    const STATION_URL = "https://midsem-bootcamp-api.onrender.com/stations/";

    async function getStationData() {
      setStationLoading(true);
      try {
        const res = await fetch(STATION_URL + currColor);
        const newData = await res.json();
  
        setStationData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setStationData(null);
      }
      setStationLoading(false);
    }

    async function getTrainData() {
      setTrainLoading(true);
      try {
        const res = await fetch(TRAIN_URL + currColor);
        const newData = await res.json();
  
        setTrainData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setTrainData(null);
      }
      setTrainLoading(false);
    }

    async function refreshTrainData() {
      try {
        const res = await fetch(TRAIN_URL + currColor);
        const newData = await res.json();
  
        setTrainData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setTrainData(null);
      }
    }

    useEffect(() => {
      getStationData();
      getTrainData();
    }, [currColor])

    useEffect(() => {
      const countInterval = setInterval(() => {
        if (count > 0) {
          setCount(count - 1);
        } else if (count === 0) {
          setCount(count - 1);
          refreshTrainData();
        } else {
          setCount(10);
        }
      }, 1000);

      return () => {
        clearInterval(countInterval);
      }
    }, [refreshTrainData]);

    useEffect(() => {
      setCount(10);
    }, [currColor])
  
    return (
      <div class="h-full">
        {stationLoading || trainLoading ? (
          <div class="flex flex-row justify-evenly py-2 border-b-2">
            <ColorButton line={"gold"} setColor={null}/>
            <ColorButton line={"red"} setColor={null}/>
            <ColorButton line={"blue"} setColor={null}/>
            <ColorButton line={"green"} setColor={null}/>
          </div>
        ) : (
          <div class="flex flex-row justify-evenly py-2 border-b-2">
            <ColorButton line={"gold"} setColor={setColor}/>
            <ColorButton line={"red"} setColor={setColor}/>
            <ColorButton line={"blue"} setColor={setColor}/>
            <ColorButton line={"green"} setColor={setColor}/>
          </div>
        )}
        <div class="text-center text-5xl py-4 border-b-2">{currColor.toUpperCase()}</div>
        <div class="flex flex-row">
          <div>
            {stationLoading ? (
              <div class="pl-2 pt-4 bg-black w-80 h-full text-white">Loading...</div>
            ): (
              <NavBar color={currColor} data={stationData} setStation={setStation} />
            )}
          </div>
          <div class="w-full">
            {trainLoading ? (
              <div>Loading...</div>
            ) : (
              <TrainList color={currColor} data={trainData} station={station} count={count} />
            )}
          </div>
        </div>
        
      </div>
    );
  }
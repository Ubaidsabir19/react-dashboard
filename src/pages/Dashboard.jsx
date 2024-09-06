import { useEffect, useState } from 'react';
import { HiOutlineBuildingLibrary, HiOutlineUserGroup, HiOutlineChartBar, HiOutlineClock } from "react-icons/hi2";
import Card from "../utils/card";
import cardData from '../data/cards.json';
import playerTrackData from '../data/playerTracking.json';
import PieChartComponent from '../charts/pieChartComponent';
import BarChartComponent from '../charts/barChartComponent';
import LineChartComponent from '../charts/lineChart';

const iconMap = {
  HiOutlineBuildingLibrary: <HiOutlineBuildingLibrary className="text-gray-600" size={30} />,
  HiOutlineUserGroup: <HiOutlineUserGroup className="text-gray-600" size={30} />,
  HiOutlineChartBar: <HiOutlineChartBar className="text-gray-600" size={30} />,
  HiOutlineClock: <HiOutlineClock className="text-gray-600" size={30} />
};

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [playerTrack, setPlayerTrack] = useState([]);
  const [selectedDate, setSelectedDate] = useState("2024-09-05");

  // Handle date selection
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  useEffect(() => {
    setCards(cardData);
    setPlayerTrack(playerTrackData);
  }, []);

  return (
    <div className="h-screen overflow-y-auto p-6">
      {/* Card Section */}
      <div className="flex flex-wrap gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={iconMap[card.icon]}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="flex flex-col md:flex-row flex-wrap gap-2 mt-6">
        <div className="flex-1 min-w-full md:min-w-0">
          <PieChartComponent />
        </div>
        <div className="flex-1 min-w-full md:min-w-0">
          <BarChartComponent />
        </div>
      </div>

      {/* Player Tracking Section */}
      <div className="w-full justify-between px-4 py-2 flex flex-col md:flex-row pt-6 pb-4 items-center">
        <h2 className="text-lg font-semibold">Player Tracking Data</h2>

        {/* Date Selector */}
        <div className="flex flex-row items-center mt-2 md:mt-0">
          <h1 className="px-4">Select Date: </h1>
          <select className="bg-slate-200 px-4 py-2 rounded-lg" id="date-select" value={selectedDate} onChange={handleDateChange}>
            <option value="2024-09-05">2024-09-05</option>
            <option value="2024-09-04">2024-09-04</option>
            <option value="2024-09-03">2024-09-03</option>
          </select>
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="w-full">
        <LineChartComponent
          chartData={playerTrack[selectedDate]} // Pass the selected date data
          xKey="time" // Use the time field for the x-axis
          yKey1="onlinePlayers" // Use the field name for y-axis Line 1
          yKey2="offlinePlayers" // Use the field name for y-axis Line 2
          yKey3="playingGame" // Use the field name for y-axis Line 3
        />
      </div>
    </div>
  );
}

export default Dashboard;

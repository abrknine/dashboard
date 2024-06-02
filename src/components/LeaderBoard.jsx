import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaCircle, FaNetworkWired } from 'react-icons/fa';  
import soundFile from "../assets/sound.mp3"; 

const LeaderboardTable = ({ data }) => {
  const [audioElement, setAudioElement] = useState(null);

  useEffect(() => {
    const audio = new Audio(soundFile);
    setAudioElement(audio);
    return () => {
      audio.pause(); // Cleanup audio element on unmount
    };
  }, []);

  const handleMouseEnter = () => {
    if (audioElement) {
      audioElement.currentTime = 0; // Reset the audio position to the beginning
      audioElement.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioElement) {
      audioElement.pause();
    }
  }; 

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-custom-black text-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2">Timestamp</th>
            <th className="px-4 py-2">Flow ID</th>
            <th className="px-4 py-2">Source IP</th>
            <th className="px-4 py-2">Source Port</th>
            <th className="px-4 py-2">Destination IP</th>
            <th className="px-4 py-2">Destination Port</th>
            <th className="px-4 py-2">Interface</th>
          </tr> 
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr 
              key={index} 
              className="border-b border-gray-700 hover:bg-gray-700"  
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <td className="px-4 py-2 flex ">  <FaCalendarAlt className="mr-2" />   {row.timestamp}</td>
              <td className="px-4 py-2 " >   {row.flow_id}</td>
              <td className="px-4 py-2 flex"> <FaCircle className="mr-2 text-gray-400" />{row.src_ip}</td>
              <td className="px-4 py-2">{row.src_port}</td>
              <td className="px-4 py-2 flex"> <FaCircle className="mr-2 text-green-400" /> {row.dest_ip}</td>
              <td className="px-4 py-2 ">{row.dest_port}</td>
              <td className="px-4 py-2 flex ">   <FaNetworkWired className="mr-2" /> {row.in_iface}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;

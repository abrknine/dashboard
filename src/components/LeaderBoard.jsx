import React from 'react';
import { FaCalendarAlt, FaCircle, FaNetworkWired } from 'react-icons/fa';   

const LeaderboardTable = ({ data }) => {
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
            <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
              <td className="px-4 py-2 flex ">  <FaCalendarAlt className="mr-2" />   {row.timestamp}</td>
              <td className="px-4 py-2 " >   {row.flow_id}</td>
              <td className="px-4 py-2 flex"> <FaCircle className="mr-2 text-gray-400" />{row.src_ip}</td>
              <td className="px-4 py-2">{row.src_port}</td>
              <td className="px-4 py-2 flex">               <FaCircle className="mr-2 text-green-400" /> {row.dest_ip}</td>
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
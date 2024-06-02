import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import SearchBar from './components/searchbar';
import data from './data.json';
import SegmentedLine from './components/segmentedline';
import LeaderboardTable from './components/LeaderBoard';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, LinearScale, CategoryScale, PointElement, LineElement, BarElement } from 'chart.js';
Chart.register(ArcElement, LinearScale, CategoryScale, PointElement, LineElement, BarElement);

const noOfData = data.length;
const protocolData = data.reduce((acc, item) => {
  const protocol = item.proto;
  if (acc[protocol]) {
    acc[protocol].count++;
  } else {
    acc[protocol] = { count: 1 };
  }
  return acc;
}, {});

// Prepare data for pie chart
const pieChartData = {
  labels: Object.keys(protocolData),
  datasets: [
    {
      data: Object.values(protocolData).map((item) => item.count),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

// Prepare data for line chart
const lineChartData = {
  labels: data.map((item) => item.timestamp),
  datasets: [
    {
      label: 'Alerts',
      data: data.map((item) => item.dest_port),
      borderColor: '#36A2EB',
      fill: false,
    },
  ],
};

// Prepare data for bar chart
const barChartData = {
  labels: Object.keys(protocolData),
  datasets: [
    {
      label: 'Alerts',
      data: Object.values(protocolData).map((item) => item.count),
      backgroundColor: '#FF6384',
    },
  ],
};

const protocolColors = {
  TCP: 'blue',
  UDP: 'yellow',
  // Add more protocols and their colors as needed
};

function calculateProtocolPercentages(alertData) {
  const protocolCounts = {};

  alertData.forEach(alert => {
    const protocol = alert.proto;
    if (protocolCounts[protocol]) {
      protocolCounts[protocol]++;
    } else {
      protocolCounts[protocol] = 1;
    }
  });

  const totalAlerts = alertData.length;
  const protocolPercentages = [];

  Object.entries(protocolCounts).forEach(([protocol, count]) => {
    const percentage = (count / totalAlerts) * 100;
    const color = protocolColors[protocol] || 'gray'; // Default color if protocol is not in the map
    protocolPercentages.push({ protocol, percentage, color });
  });

  console.log(protocolPercentages);
  return protocolPercentages;
}

function App() {
  const segments = calculateProtocolPercentages(data);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="p-4 flex justify-end bg-gray-800">
          <SearchBar />
        </div>
        <div className="flex-1 p-6 bg-gray-800 overflow-auto">
          <div className="mb-6 flex gap-40">
            <h1 className="text-white font-bold text-4xl">Traffic: {noOfData}</h1>
            <SegmentedLine segments={segments} />
          </div>
          <div>
            <h1 className="text-white ">Statistics</h1>
            <div className="flex flex-col  md:flex-row  md:gap-20 justify-center">
              <div className="mx-4 mb-4 md:mb-0">
                <h2 className="text-white">Pie Chart (Protocols)</h2>
                <Pie data={pieChartData} height={250} width={250} />
              </div>
              <div className="mx-4 mb-4 md:mb-0">
                <h2 className="text-white">Line Chart (Destination Ports)</h2>
                <Line data={lineChartData} height={200} width={450} />
              </div>
              <div className="mx-4 mb-4 md:mb-0">
                <h2 className="text-white">Bar Chart (Protocols)</h2>
                <Bar data={barChartData} height={200} width={250} />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-white">Leaderboard</h1>
            <LeaderboardTable data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const MainChart = () => {
  const chartData = [
    28000, 29500, 27000, 31000, 26000, 33000, 29000, 35000, 30000, 42000, 37000,
    40000, 43000, 47000,
  ];

  const labels = [
    "19:00",
    "19:05",
    "19:10",
    "19:15",
    "19:20",
    "19:25",
    "19:30",
    "19:35",
    "19:40",
    "19:45",
    "19:50",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        borderColor: "#3A6FF8",
        borderWidth: 2,
        fill: false,
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9ca3af",
        },
      },
      y: {
        min: 10000,
        max: 50000,
        ticks: {
          stepSize: 10000,
          color: "#9ca3af",
          callback: (value) => Number(value).toLocaleString(),
        },
        grid: {
          color: "#1f2937",
        },
      },
    },
  };

  return (
    <div className="w-full">
      <Line data={data} options={options} />;
    </div>
  );
};

export default MainChart;

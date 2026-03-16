import type { ICard } from "../types/PageType";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

interface IMiniChartProps {
  chartData: number[];
  color?: string;
}

const Card = ({
  image,
  name,
  shortName,
  price,
  priceChanges,
  chartData,
  color = "#3A6FF8",
}: ICard & IMiniChartProps) => {
  const data = {
    labels: chartData.map(() => ""),
    datasets: [
      {
        data: chartData,
        borderColor: color,
        borderWidth: 2,
        fill: false,
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className="bg-base-black rounded-lg p-6">
      <div className="card-header flex items-center w-full mb-5">
        <div>{image}</div>
        <div className="flex-1 ml-5">
          <h6 className="text-white text-[16px]">{name}</h6>
          <p className="text-base-gray">{shortName}</p>
        </div>
        <div className="text-green-600 text-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-white text-[20px]">${price}</p>
          <p
            className={`${priceChanges > 0 ? "text-green-600" : "text-red-600"} text-[14px]`}
          >
            {priceChanges > 0 ? "+" : ""}
            {priceChanges}
          </p>
        </div>

        <div className="w-25 h-10">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Card;

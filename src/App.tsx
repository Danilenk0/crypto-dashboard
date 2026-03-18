import { Navbar } from "./components/Navbar.tsx";
import Header from "./components/Header.tsx";
import Card from "./components/Card.tsx";
import CreditCard from "./components/CreditCard.tsx";
import type { ICard } from "./types/PageType.ts";
import MainChart from "./components/MainChart.tsx";
import { useState } from "react";
import {
  BitcoinIcon,
  LitecoinIcon,
  EthereumIcon,
  SolanaIcon,
} from "./components/icons/Icons.icon.tsx";

function App() {
  const cardData: ICard[] = [
    {
      id: crypto.randomUUID(),
      image: <BitcoinIcon />,
      name: "Bitcoin",
      shortName: "BTC",
      price: 52.291,
      priceChanges: 0.25,
      chartData: [
        52200, 52250, 52100, 52300, 52280, 52450, 52320, 52500, 52400,
      ],
      color: "#627eea",
    },
    {
      id: crypto.randomUUID(),
      image: <LitecoinIcon />,
      name: "Litecoin",
      shortName: "ITC",
      price: 8.291,
      priceChanges: 0.25,
      chartData: [
        52200, 52250, 52100, 52300, 52280, 52450, 52320, 52500, 52400,
      ],
      color: "#627eea",
    },
    {
      id: crypto.randomUUID(),
      image: <EthereumIcon />,
      name: "Ethereum",
      shortName: "ETH",
      price: 28.291,
      priceChanges: 0.25,
      chartData: [
        52200, 52250, 52100, 52300, 52280, 52450, 52320, 52500, 52400,
      ],
      color: "#627eea",
    },
    {
      id: crypto.randomUUID(),
      image: <SolanaIcon />,
      name: "Solana",
      shortName: "SOL",
      price: 14.291,
      priceChanges: -0.25,
      chartData: [
        52400, 52500, 52320, 52450, 52280, 52300, 52100, 52250, 52200,
      ],
      color: "#627eea",
    },
  ];
  const [isFullSize, setIsFullSize] = useState(true);
  return (
    <div className="w-full h-min bg-page-bg flex">
      <Navbar isFullSize={isFullSize} setIsFullSize={setIsFullSize} />
      <div
        className={`${isFullSize ? "ml-50" : "ml-20"} flex-1 p-4 transition-all duration-300`}
      >
        <Header />
        <div className="flex justify-between mt-7">
          {cardData.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              name={item.name}
              shortName={item.shortName}
              price={item.price}
              priceChanges={item.priceChanges}
              chartData={item.chartData}
              color={item.color}
            />
          ))}
        </div>
        <div className="mt-8 flex w-full">
          <div className="w-1/3 p-3.5">
            <CreditCard />
          </div>

          <div className="w-2/3 bg-base-black rounded-2xl p-7">
            <div className="flex flex-col">
              <div className="flex justify-between mb-6">
                <h4 className="text-white text-[21px]">Chart</h4>
                <button className="text-base-gray border p-1 rounded-lg">
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
                      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col items-center gap-1">
                  <select className="text-base-gray" name="" id="">
                    <option value="">Bitcoin/BTC</option>
                  </select>
                  <h4 className="text-white text-[18px]">$35,352.02</h4>
                </div>
                <div className="flex items-center gap-2.5 text-base-gray">
                  <button className=" border rounded-2xl px-3">1h</button>
                  <button className=" border rounded-2xl px-3">3h</button>
                  <button className=" border rounded-2xl px-3">1d</button>
                  <button className=" border rounded-2xl px-3">1w</button>
                  <button className=" border rounded-2xl px-3">1m</button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <MainChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { Navbar } from "./components/Navbar.tsx";
import Header from "./components/Header.tsx";
import Card from "./components/Card.tsx";
import CreditCard from "./components/CreditCard.tsx";
import type { ICard } from "./types/PageType.ts";
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
          <div className="w-1/4 p-3.5">
            <CreditCard />
          </div>

          <div className="w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

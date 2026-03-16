import { Navbar } from "./components/Navbar.tsx";
import Header from "./components/Header.tsx";
import Card from "./components/Card.tsx";
import type { ICard } from "./types/PageType.ts";
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
      chartData: [52200, 52400, 5200, 52300, 52500, 52450, 52320, 52500, 52400],
      color: "#627eea",
    },
    {
      id: crypto.randomUUID(),
      image: <EthereumIcon />,
      name: "Ethereum",
      shortName: "ETH",
      price: 28.291,
      priceChanges: 0.25,
      chartData: [28000, 28100, 28300, 28200, 28291, 27960, 2800, 28200, 28291],
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
        28000, 27900, 29300, 27600, 28291, 27960, 28000, 28200, 28291,
      ],
      color: "#627eea",
    },
  ];
  return (
    <div className="w-full h-screen bg-page-bg flex">
      <Navbar />
      <div className="flex-1">
        <Header />
        <div className="flex justify-around mt-7">
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
      </div>
    </div>
  );
}

export default App;

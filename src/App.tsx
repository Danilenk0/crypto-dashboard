import { Navbar } from "./components/Navbar.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <div className="w-full h-screen bg-page-bg flex">
      <Navbar />
      <div className="flex-1">
        <Header />
      </div>
    </div>
  );
}

export default App;

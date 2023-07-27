import CelluloidPicks from "./components/CelluloidPicks";
import CircleLogo from "./components/CircleLogo";
import DelrinPicks from "./components/DelrinPicks";
import Description from "./components/Description";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import PriceTable from "./components/PriceTable";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <OurStory />
      <CircleLogo />
      <Description />
      <CelluloidPicks />
      <DelrinPicks />
      <PriceTable />
    </div>
  );
}

export default App;

import CelluloidPicks from "./components/CelluloidPicks";
import CircleLogo from "./components/CircleLogo";
import ContactForm from "./components/ContactForm";
import DelrinPicks from "./components/DelrinPicks";
import Description from "./components/Description";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import PriceTable from "./components/PriceTable";
import UpperFooter from "./components/UpperFooter";

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
      <ContactForm />
      <UpperFooter />
    </div>
  );
}

export default App;

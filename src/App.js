import "./App.css";
import Banner from "./components/Banner";
import Conesso from "./components/Conesso";
import Features from "./components/Features";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Perche from "./components/Perche";
import Processing from "./components/Processing";
import Scegli from "./components/Scegli";
import Sire from "./components/Sire";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Intro />
      <Sire />
      <Conesso />
      <Perche />
      <Features />
      <Scegli />
      <Processing />
      <FAQ />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;

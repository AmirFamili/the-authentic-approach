import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Form from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import VideoTitle from "./components/VideoTitle";
import Schedule from "./components/Schedule";
import { CallToME } from "./components/CallToMe";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  return (
    <div className="App ">
      <Header />
      <VideoTitle />

      <main>
        <Main />

        <Form />
        <FAQ />
      </main>
      <CallToME />
      <Schedule />

      <Footer />
    </div>
  );
};

export default App;

import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Form from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import VideoTitle from "./components/VideoTitle";
import Schedule from "./components/Schedule";
import ShareStory from "./components/ShareStory";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const App = () => {

  return (
    <div className="App ">
      <Header />
      <VideoTitle />

      <main>
        <Main />
        <ShareStory/>
        <FAQ />
        <Form />
      </main>
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;

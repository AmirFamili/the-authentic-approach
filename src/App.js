import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Form from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import VideoTitle from "./components/VideoTitle";


const App = () => {

  return (
    <div className="App ">
      <Header />
      <VideoTitle />

      <main>
        <Main />
        <FAQ />
        <Form/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Main from "./components/Main";
import VideoTitle from "./components/VideoTitle";


function App() {
  return (
    <div className="App ">
      <Header />
      <VideoTitle/>
      
      <main>
        <Main/>
      </main>
      
    </div>
  );
}

export default App;

import "./App.scss";
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo"; 
import videos from "./data/video-details.json";

console.log(videos);

function App() {
  return (
   <>
	 	<Header />
		<CurrentVideo videoData={videos[0]} />
	 </>
  );
}

export default App;

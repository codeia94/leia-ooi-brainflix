import "./App.scss";
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo"; 
import videos from "./data/videos.json";

console.log(videos);

function App() {
  return (
   <>
	 	<Header />
		<CurrentVideo />
	 </>
  );
}

export default App;

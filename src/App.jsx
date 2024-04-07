import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
// import videos from "./data/video-details.json";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
// import CurrentVideoDetails from "./components/CurrentVideoDetails/CurrentVideoDetails";
// import CurrentVideo from "./components/CurrentVideo/CurrentVideo"; 
// import Form from "./components/Form/Form";
// import Comments from "./components/Comments/Comments";
// import SideVideos from "./components/SideVideos/SideVideos";


function App() {

	// const [currentVideo, setCurrentVideo] = useState(videos[0]);

	// const onChangeVideo = (videoId) => {
	// 	const foundVideo = videos.find((video) => {
	// 		return video.id === videoId;
	// 	});
	// 	setCurrentVideo(foundVideo);
	// }

  return (
   <>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="videos/:videoId" element={<HomePage />} />
				<Route path="/" element={<HomePage />} />
				{/* <Route path="/upload" element={<UploadPage />} /> */}
				{/* <Route path="*" element={<h1>404 not found</h1>} /> */}
			</Routes>
		</BrowserRouter>
	 </>
  );
}

export default App;


{/* <>
	 	<Header />
		<CurrentVideo videoData={currentVideo} />
		<div className="main-container">
			<div className="main-container__two">
				<CurrentVideoDetails videoData={currentVideo} />
				<Form />
				<Comments 
					commentsData={currentVideo}	
				/>
			</div>
			<div className="main-container__one">
				<SideVideos 
					videos={videos} 
					onChangeVideo={onChangeVideo}
					currentVideo={currentVideo}
				/>
			</div>
		</div>
	 </> */}
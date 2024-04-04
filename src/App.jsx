import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import videos from "./data/video-details.json";
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "./components/CurrentVideoDetails/CurrentVideoDetails"; 
import Form from "./components/Form/Form";
import Comments from "./components/Comments/Comments";
import SideVideos from "./components/SideVideos/SideVideos";

console.log(videos);

function App() {

	const [currentVideo, setCurrentVideo] = useState(videos[0]);

	const onChangeVideo = (videoId) => {
		const foundVideo = videos.find((video) => {
			return video.id === videoId;
		});
		setCurrentVideo(foundVideo);
	}


  return (
   <BrowserRouter>
	 	<Header />
		<Routes>
			<Route path="/" element={
				<>
					<CurrentVideo videoData={currentVideo} />
					<div className="main-container">
						<div className="main-container__two">

							<CurrentVideoDetails videoData={currentVideo} />
							<Form />
							<Comments
								commentsData={currentVideo} />
						</div>
						<div className="main-container__one">
							<SideVideos
								videos={videos}
								onChangeVideo={onChangeVideo}
								currentVideo={currentVideo} />
						</div>
					</div>
				</>
			} />
		</Routes>
	 </BrowserRouter>
  );
}

export default App;

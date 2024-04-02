import "./App.scss";
import videos from "./data/video-details.json";
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo"; 
import Form from "./components/Form/Form";
import Comments from "./components/Comments/Comments";
import SideVideos from "./components/SideVideos/SideVideos";
import { useState } from "react";

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
   <>
	 	<Header />
		<CurrentVideo videoData={currentVideo} />
		<div className="main-container">
			<div className="main-container__flex">
				<Form />
				<Comments 
					commentsData={currentVideo}	
				/>
			</div>
			<div className="main-container__flex">
				<SideVideos 
					videos={videos} 
					onChangeVideo={onChangeVideo}
					currentVideo={currentVideo}
				/>
			</div>
		</div>
	 </>
  );
}

export default App;

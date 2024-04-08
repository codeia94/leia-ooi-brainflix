import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";



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
				<Route path="/upload" element={<UploadPage />} />
				{/* <Route path="*" element={<h1>404 not found</h1>} /> */}
			</Routes>
		</BrowserRouter>
	 </>
  );
}

export default App;
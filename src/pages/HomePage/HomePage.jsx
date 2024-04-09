import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";

//import components
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "../../components/CurrentVideoDetails/CurrentVideoDetails";
import SideVideos from "../../components/SideVideos/SideVideos";

// const firstId = "84e96018-4022-434e-80bf-000ce4cd12b8";
const apiKey = "efc367f1-b23d-49ad-84f7-aae1e3479d5c";
const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";

console.log(`${baseUrl}/videos?api_key=${apiKey}`);

function HomePage () {
	const { videoId } = useParams();
	//state for video data and list of videos
	const [videoData, setVideoData] = useState(null);
	const [videos, setVideos] = useState([]);


	// async function to fetch video list
	useEffect(() => {
		const fetchVideoList = async () => {
			const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
			setVideos(response.data);
			console.log(response.data);
		};
		fetchVideoList();
	}, []);


	//async function to fetch video data based on videoId
	useEffect(() => {
    const fetchVideoData = async () => {
        const id = (!videoId && videos.length > 0) ? videos[0].id : videoId;
        if (id) {
					const response = await axios.get(`${baseUrl}/videos/${id}?api_key=${apiKey}`);
					console.log(response.data);
					setVideoData(response.data);
        }
    };
    fetchVideoData();
}, [videoId, videos]);

	//loading state while fetching data
	if (!videoData ) {
		return <div>Loading...</div>
	}

	return (
		<>
			<CurrentVideo videoData={videoData} />
			<div className="main-container">
				<div className="main-container__two">
					<CurrentVideoDetails videoData={videoData}/>
				</div>
				<div className="main-container__one">
					<SideVideos selectedVideoId={videoData.id} videos={videos} />
				</div>	
			</div>
		
			{/* onChangeVideo={handleVideoSelect}  */}
		</>
	)
};




export default HomePage;

{/* <CurrentVideo videoData={currentVideo} />
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
		/> */}




import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "../../components/CurrentVideoDetails/CurrentVideoDetails";
import SideVideos from "../../components/SideVideos/SideVideos";

const baseUrl = "http://localhost:8080";

function HomePage () {
	const { videoId } = useParams();
	//state for video data and list of videos
	const [videoData, setVideoData] = useState(null);
	const [videos, setVideos] = useState([]);


	// async function to fetch video list
	useEffect(() => {
		const fetchVideoList = async () => {
			const response = await axios.get(`${baseUrl}/videos/`);
			setVideos(response.data);
			// lconsole.log(response.data);
		};
		fetchVideoList();
	}, []);


	//async function to fetch video data based on videoId
	useEffect(() => {
    const fetchVideoData = async () => {
        const id = (!videoId && videos.length > 0) ? videos[0].id : videoId;
        if (id) {
					const response = await axios.get(`${baseUrl}/videos/${id}`);
					// console.log(response.data);
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
					<SideVideos selectedVideoId={videoData.id} videos={videos} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} />
				</div>	
			</div>
		</>
	)
};

export default HomePage;
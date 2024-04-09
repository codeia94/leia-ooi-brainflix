import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./CurrentVideo.scss";

const apiKey = "efc367f1-b23d-49ad-84f7-aae1e3479d5c";
const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";

function CurrentVideo () {
	const { videoId } = useParams();
	const [poster, setPoster] = useState(null);
	const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

	useEffect(() => {
		
		const fetchVideoData = async () => {
			
				const id = videoId || defaultVideoId;
				const response = await axios.get(`${baseUrl}/videos/${id}?api_key=${apiKey}`);
				setPoster(response.data.image);
				console.log(response);
			
		};
		fetchVideoData();
	}, [videoId])

	return (
		<div className="video">
			<video className="video-current" poster={poster} controls></video>
		</div>
		
	)
}

export default CurrentVideo;
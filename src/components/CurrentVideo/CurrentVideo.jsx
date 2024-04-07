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

	useEffect(() => {
		
		const fetchVideoData = async () => {
			const response = await axios.get(`${baseUrl}/videos/${videoId}?api_key=${apiKey}`);
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
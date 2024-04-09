import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Form from "../Form/Form";
import Comment from "../Comments/Comments";
import "./CurrentVideoDetails.scss";
import ViewCount from "../../assets/icons/views.svg";
import LikeCount from "../../assets/icons/likes.svg";



function CurrentVideoDetails () {

	const apiKey = "efc367f1-b23d-49ad-84f7-aae1e3479d5c";
	const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
	const [details, setDetails] = useState(null);
	const { videoId } = useParams();
	const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
	

	useEffect(() => {
		
			try {
				const fetchVideoData = async () => {
					const id = videoId || defaultVideoId;
					const response = await axios.get(`${baseUrl}/videos/${id}?api_key=${apiKey}`);
					setDetails(response.data);
					console.log(response.data);
				}; 
				fetchVideoData();
			} catch (error) {
				console.error("Error fetching video data", error);
			} 
		
	}, [videoId]);

		if (!details) {
			return <div>Loading...</div>
		}

	return (
		<section>
			<div className="info">
				<div className="info-title">
					<h1 className="info-title__text">{details.title}</h1>
				</div>
			<hr className="td-hr"></hr>
			<div className="info-item">
				<div className="info-item__list">
					<p className="info-item__channel">By {details.channel}</p>
					<p className="info-item__timestamp">{new Date(details.timestamp).toLocaleDateString()}</p>
				</div>
				<div className="info-item__list">
					<p className="info-item__views"><img className="info-item__views-image" src={ViewCount} alt="view"/>{details.views}</p>
					<p className="info-item__likes"><img className="info-item__likes-image" src={LikeCount} alt="like"/>{details.likes}</p>
				</div>
			</div>
			<hr></hr>
			<div className="info-description">{details.description}</div>
			<div className="info-comments">{details.comments.length} comments</div>
		</div>
		<Form />
		<Comment commentsData={details.comments}/>
		</section>
		
	);
}


export default CurrentVideoDetails;
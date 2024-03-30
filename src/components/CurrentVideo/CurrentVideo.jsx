import "./CurrentVideo.scss";
import React from "react";
import ViewCount from "../../assets/icons/views.svg";
import LikeCount from "../../assets/icons/likes.svg";



function CurrentVideo ({videoData}) {
	console.log(videoData);
	return (
		<>
			<div className="video">
				<video className="video-current" poster={videoData.image} controls></video>
			</div>
			<div className="info">
				<div className="info-title">
					<h1 className="title-text">{videoData.title}</h1>
				</div>
			<hr className="td-hr"></hr>
			<div className="info-item">
				<div className="info-item__list">
					<p className="info-item__channel">By {videoData.channel}</p>
					<p className="info-item__timestamp">{new Date(videoData.timestamp).toLocaleDateString()}</p>
				</div>
				<div className="info-item__list">
					<p className="info-item__views"><img className="info-item__views-image" src={ViewCount} alt="view"/>{videoData.views}</p>
					<p className="info-item__likes"><img className="info-item__likes-image" src={LikeCount} alt="like"/>{videoData.likes}</p>
				</div>
			</div>
			<hr></hr>
			<div className="info-description">{videoData.description}</div>
			<div className="info-comments">3 Comments</div>
		</div>
		</>
	);
}

export default CurrentVideo;




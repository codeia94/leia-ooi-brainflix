import "./CurrentVideoDetails.scss";

function CurrentVideoDetails ({videoData}) {
	return (
		<div className="video">
			<video className="video-current" poster={videoData.image} controls></video>
		</div>
	)
}

export default CurrentVideoDetails;
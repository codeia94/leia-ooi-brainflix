import "./CurrentVideo.scss";

function CurrentVideo ({videoData}) {
	return (
		<div className="video">
			<video className="video-current" poster={videoData.image} controls></video>
		</div>
	)
}

export default CurrentVideo;
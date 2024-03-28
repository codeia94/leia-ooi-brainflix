import "./CurrentVideo.scss";
import tempVideoImage from "../../assets/images/Upload-video-preview.jpg";

function CurrentVideo () {
	return (
		<div className="video">
			<video className="video-current" poster={tempVideoImage} constrols></video>
		</div>
	)
}

export default CurrentVideo;
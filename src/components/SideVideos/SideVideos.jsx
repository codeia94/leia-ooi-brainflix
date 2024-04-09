import { Link } from "react-router-dom";
import "./SideVideos.scss";

function SideVideos({ selectedVideoId, videos }) {

	const filteredVideos = videos.filter((video) => {
		if (selectedVideoId) {
			return video.id !== selectedVideoId;
		} else {
			return true;
		}
	});

	return (
		<aside className="side-videos">
			<h2 className="side-videos__title">NEXT VIDEO</h2>
			<div className="side-videos__container">
				{filteredVideos.map((video) => {
					return (
						<Link to={`/videos/${video.id}`} key={video.id} className="side-videos__link">
							<div key={video.id} className="side-videos__list" >
									<div className="video-container">
										<video className="video-container__video" poster={video.image}></video>
									</div>
									<div className="video-details">
										<p className="video-details__title">{video.title}</p>
										<p className="video-details__channel">{video.channel}</p>
									</div>
							</div>
						</Link>
					)
				})}
			</div>
		</aside>
	);
}

export default SideVideos;
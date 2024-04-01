import "./SideVideos.scss";


function SideVideos({ videos, onChangeVideo, currentVideo }) {
	const onVideoClick = (videoId) => {
		// console.log("Video clicked", videoId);
		onChangeVideo(videoId);
	};

	const filteredVideos = videos.filter((video) => {
		return video.id !== currentVideo.id;
	});

	return (
		<aside className="side-videos">
			<h2 className="side-videos__title">NEXT VIDEO</h2>
			<div className="side-videos__container">
				{filteredVideos.map((video) => {
					return (
						<div key={video.id} className="side-videos__list" onClick={() => {onVideoClick(video.id);}}>
								<div className="video-container">
									<video className="video-container__video" poster={video.image}></video>
								</div>
								<div className="video-details">
									<p className="video-details__title">{video.title}</p>
									<p className="video-details__channel">{video.channel}</p>
								</div>
						</div>
					)
				})}
			</div>
		</aside>
	);
}

export default SideVideos;

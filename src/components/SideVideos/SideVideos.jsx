import "./SideVideos.scss";

function SideVideos({ videos }) {
	return (
		<aside className="side-videos">
			<h2 className="side-videos__title">NEXT VIDEO</h2>
			<div className="side-videos__container">
				{videos.map((video) => {
					return (
						<div key={video.id} className="side-videos__list">
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


{/* <aside className="side-videos">
			<h3 className="side-videos__title">NEXT VIDEO</h3>
			<div className="side-videos__container">
				<video className="side-videos__video" src=""> </video>
			</div>
			
		</aside> */}
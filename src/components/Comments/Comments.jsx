import "./Comments.scss";


function Comments ({commentsData}) {

	// console.log(commentsData);
	return (
		<div className="comments">
			<hr></hr>
			{commentsData.map((comment) => (
				<div key={comment.id} className="comments-list">
					<img className="comments-img" alt="img" />
					<div className="comments-container">
						<div className="comments-container__details">
							<p className="comments-container__details-name">{comment.name}</p>
							<p className="comments-container__details-date">{new Date(comment.timestamp).toLocaleDateString() }</p>
						</div>
						<div className="comments-container__comment">{comment.comment}</div>
					{/* <hr></hr> */}
					</div>
				</div>
			))}
		</div>
	)
}


export default Comments;
import "./Form.scss";
import React from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Form() {

	return (
		<div className="form">
			<img src={avatar} className="form-avatar" alt="avatar"/>
			<div className="form-container">
				<form className="form-container__input">
					<div className="form-container__input-label">JOIN THE CONVERSATION</div>
					<textarea
						className="form-container__input-text"
						typeof="text"
						placeholder="Add a new comment"
						id="comment"
						name="comment"
					/>
				</form>
				<button
					className="form-container__button"
					type="submit"
				>
					COMMENT
				</button>
			</div>
		</div>
	)
}


export default Form;
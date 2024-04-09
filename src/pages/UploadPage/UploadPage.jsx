import { useNavigate } from "react-router-dom";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";


function UploadPage () {

	const Navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();

		//Get field values from form
		const title = event.target.title.value;
		const description = event.target.description.value;

		//check if fields are empty
		if (!title || !description) {
			alert("Please fill out all fields before submitting");
			return;
		} else {
			alert("Video uploaded successfully");
			//navigate to HomePage
			Navigate("/");
		}
	}

	return (
		<>
		<hr className="hr-top"></hr>
		<div className="upload">
			<h1 className="upload-title">Upload Video</h1>
			<hr className="hr-btm"></hr>
			<div className="upload-container">
				<div className="upload-thumbnail flex-one">
					<h2 className="upload-thumbnail__title">VIDEO THUMBNAIL</h2>
					<img src={videoThumbnail} alt="video thumbnail" className="upload-thumbnail__image" />
				</div>
				<form id="uploadForm" className="uploadform flex-two" onSubmit={handleSubmit}>
					<div className="uploadform-container">
						<div className="uploadform-title">
							<label className="uploadform-title__label" >TITLE YOUR VIDEO</label>
							<input 
								className="uploadform-title__text" 
								typeof="text" 
								id="title" 
								name="title" 
								placeholder="Add a title to your video" />
						</div>
					</div>
					<div className="uploadform-container">
						<div className="uploadform-description">
							<label className="uploadform-description__label" >ADD A VIDEO DESCRIPTION</label>
							<textarea 
								className="uploadform-description__text" 
								typeof="text" 
								id="description" 
								name="description" 
								placeholder="Add a description to your video" />
						</div>
					</div>
				</form>
				</div>
					<hr className="hr-form"></hr>
				<div className="uploadform-button">
					<button form="uploadForm" className="uploadform-button__submit" type="submit">PUBLISH</button>
					<button className="uploadform-button__cancel" type="submit">CANCEL</button>
				</div>
			
			{/* <hr className="hr-desktopbtm"></hr> */}
		</div>
		</>
	);
}

export default UploadPage;
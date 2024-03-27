import brainflix from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";

import "./Header.scss";


function Header () {
	return (
		<header>
			<nav className="nav">
				<img className="nav-logo" src={brainflix} alt="Brainflix icon" />
				<div className="nav-bar">
					<input className="nav-bar__search" type="text" placeholder="Search" />
					<img className="nav-bar__icon" src={search} alt="search icon" />
					<img className="nav-avatar" src={avatar} alt="avatar"/>
				</div>

				<div className="nav-upload">
					<button className="nav-button">UPLOAD</button>
						<img src={upload} alt="upload"/>
				</div>

			
			</nav>
		</header>
	);
}


export default Header;
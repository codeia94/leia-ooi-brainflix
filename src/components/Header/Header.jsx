import { Link } from "react-router-dom";
import brainflix from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";


function Header () {
	return (
		<header>
			<nav className="nav">
				<Link to="/" className="nav-link">
					<img className="nav-logo" src={brainflix} alt="Brainflix icon" />
				</Link>
				<div className="nav-bar">
					<div className="nav-bar__container">
						<input className="nav-bar__search" type="text" placeholder="Search" />
						{/* <img className="nav-bar__icon" src={search} alt="search icon" /> */}
					</div>	
					<img className="nav-bar__avatar" src={avatar} alt="avatar"/>
					<Link to="/upload" className="nav-link">
						<button className="nav-button">UPLOAD</button>
					</Link>
				</div>
			</nav>
		</header>
	);
}


export default Header;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {

  return (
   <>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/videos/:videoId" element={<HomePage />} />
				<Route path="/upload" element={<UploadPage />} />
			</Routes>
		</BrowserRouter>
	 </>
  );
}

export default App;
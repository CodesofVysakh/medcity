import { useState } from "react";
import "./App.css";
import "./assets/css/style.scss";
import "./assets/css/responsive.scss";
import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import CourseList from "./components/screens/CourseList";
import SearchSection from "./components/screens/SearchSection";
import LoginModal from "./components/general/LoginModal";

function App() {
	const [isModal, setIsModal] = useState(false);
    return (
        <>
			{
				isModal && (<LoginModal isModal={isModal} setIsModal={setIsModal} />)
			}
            <Header setIsModal={setIsModal} />
            <SearchSection />
            <CourseList />
            <Footer />
        </>
    );
}

export default App;

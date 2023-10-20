import './App.css';
import './assets/css/style.scss';
import './assets/css/responsive.scss'
import Footer from './components/general/Footer';
import Header from './components/general/Header';
import CourseList from './components/screens/CourseList';
import SearchSection from './components/screens/SearchSection';

function App() {
  return (
	<>
		<Header />
		<SearchSection />
		<CourseList />
		<Footer />
	</>
  );
}

export default App;

import './MainPage.css';
import SideBar from './SideBar';
import NavBar from './NavBar';
import TopicPage from './TopicPage';

function MainPage() {
    return (
        <div className='main-wrapper'>
            <NavBar />
            <SideBar />
            <TopicPage />
        </div>
    );
}

export default MainPage;

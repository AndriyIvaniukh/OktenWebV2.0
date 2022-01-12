import './App.css';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
    return (
        <div className={'main'}>
            <div className={"top"}>
                <Users/>
                <Posts/>
            </div>
            <div className="bottom">
                <Comments/>
            </div>
        </div>
    );
}

export default App;

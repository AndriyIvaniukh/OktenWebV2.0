import {Routes, Route, Link} from "react-router-dom";


import UsersPage from "./pages/UsersPage/usersPage";
import PostsPage from "./pages/PostsPage/postsPage";
import "./app.css";
import PostDetails from "./pages/PostDetails/PostDetails";
import Comments from "./pages/Comments/Comments";

const App = () => {
    return (
        <div className={'app'}>
            <div className="header">
                <Link to='/'>Users</Link>
                <Link to='/posts'>Posts</Link>
            </div>
            <div className="page">
                <Routes>
                    <Route path={'/'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<Comments/>}/>
                        </Route>
                    </Route>
                </Routes>

</div>
</div>
)
    ;
};

export default App;

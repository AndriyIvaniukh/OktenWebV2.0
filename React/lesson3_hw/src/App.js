import {Routes, Route, Link} from "react-router-dom";
import React from 'react';

import UsersPage from "./pages/UsersPage/usersPage";
import PostsPage from "./pages/PostsPage/postsPage";
import "./app.css";
import PostDetails from "./pages/PostDetails/PostDetails";
import Comments from "./pages/Comments/Comments";
import UserDetails from "./pages/UserDetails/UserDetails";
import UserPosts from "./pages/UserPosts/UserPosts";
import UserAlbums from "./pages/UserAlbums/UserAlbums";
import PhotosByAlbum from "./pages/PhotosByAlbum/PhotosByAlbum";


const App = () => {
    return (
        <div className={'app'}>
            <div className="header">
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
            </div>
            <div className="page">
                <Routes>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'userPosts'} element={<UserPosts/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<UserAlbums/>}>
                            <Route path={'photos/albumId=:albumId'} element={<PhotosByAlbum/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<Comments/>}/>
                        </Route>
                    </Route>
                </Routes>

            </div>
        </div>
    )
};

export default App;

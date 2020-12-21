import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./styles/global.css";
import "./styles/header.css";
import {Main} from "./pages/Main";
import {PostPage} from "./pages/PostPage";
import {CommentPage} from "./pages/CommentPage";
import {CommentPostPage} from "./pages/CommentPostPage";

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/comments" exact component={CommentPage}/>
                    <Route path="/posts/:id" exact component={PostPage}/>
                    <Route path="/posts/:id/comments" exact component={CommentPostPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

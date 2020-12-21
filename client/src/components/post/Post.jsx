import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Comments} from "../comment/Comments";

export class Post extends Component {
    render() {
        let post = this.props.post;
        return (
            post ? (
                <div className={"post"}>
                    <div className={"mainPost"}>
                        <h1>{post.title}</h1>
                        <div>{post.content}</div>
                        <p className={"showAllComments"}>
                            <NavLink to={"/posts/" + post.id + "/comments"}> Show all comments </NavLink>
                        </p>
                    </div>
                    <Comments comments={post.comments} showAll={false}/>
                </div>
            ) : (
                <div className={"post"}>
                    loading...
                </div>
            )
        );
    };
}


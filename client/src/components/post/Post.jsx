import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Comments} from "../comment/Comments";

export class Post extends Component {
    render() {
        let post = this.props.post;
        return (
            post ? (
                <div className={"post"}>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title}/>
                    <div>{post.content}</div>
                    <h3>
                        <NavLink to={"/posts/" + post.id + "/comments"}> Show all comments </NavLink>
                    </h3>
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


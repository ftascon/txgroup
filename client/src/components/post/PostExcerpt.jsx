import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export class PostExcerpt extends Component {
    render() {
        return (
            <div className='post' key={this.props.post.id}>
                <h1 className='title'>
                    <NavLink to={"/posts/"+this.props.post.id}> {this.props.post.title}</NavLink>
                </h1>
                <div>
                    {this.props.post.content}
                </div>

            </div>
        );
    };
}

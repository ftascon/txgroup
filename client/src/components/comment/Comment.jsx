import React, {Component} from "react";

export class Comment extends Component {
    render() {
        return (
            <div className={"comment"} key={this.props.id}>
                <h1>{this.props.comment.title}</h1>
                <p>{this.props.comment.author.name}</p>
                <div>{this.props.comment.content}</div>
            </div>
        );
    };
}

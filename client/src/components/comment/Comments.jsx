import React, {Component} from "react";
import {Comment} from "./Comment";

export class Comments extends Component {

    getComments(){
        let maxComments = this.props.max ?? 3;
        return (
            this.props.showAll
                ? this.props.comments
                : this.props.comments.slice(0, maxComments)
        )
    }

    render() {
        let comments = this.getComments();
        return (
            <div className='commentList'>
                {
                    comments.map((comment) => {
                        return (
                            <Comment comment={comment} key={comment.id}/>
                        )
                    })
                }
            </div>
        )
    };
}

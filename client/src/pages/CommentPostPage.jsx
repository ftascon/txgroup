import React, {Component} from "react";
import {getCommentsByPostId} from "../services/comments";
import {Header} from "../components/parts/Header";
import {Comments} from "../components/comment/Comments";

export class CommentPostPage extends Component {

    constructor(props) {
        super(props);
        this.state = {comments: []}
    }

    componentDidMount() {
        getCommentsByPostId(
            this.props.match.params.id
        ).then(
            comments => {
                this.setState({
                    comments: comments
                })
            }
        );
    }

    render() {
        return (
            <div className='main'>
                <Header/>
                <Comments comments={this.state.comments} showAll={true}/>
            </div>
        )
    };
}

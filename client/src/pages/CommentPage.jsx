import React, {Component} from "react";
import {getComments} from "../services/comments";
import {Header} from "../components/parts/Header";
import {Comments} from "../components/comment/Comments";
import "./../styles/comments.css";

export class CommentPage extends Component {

    constructor(props) {
        super(props);
        this.state = {comments: []}
    }

    componentDidMount() {
        getComments().then(
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

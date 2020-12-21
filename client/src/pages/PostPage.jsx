import React, {Component} from "react";
import {getPostById} from "../services/posts";
import {Header} from "../components/parts/Header";
import {Post} from "../components/post/Post";

export class PostPage extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []}
    }

    componentDidMount() {
        getPostById(
            this.props.match.params.id
        ).then(
            post => {
                this.setState({
                    post: post
                })
            }
        );
    }

    render() {
        return (
            <div className='main'>
                <Header/>
                <Post post={this.state.post}/>
            </div>
        )
    };
}

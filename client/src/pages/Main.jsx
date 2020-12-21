import React, {Component} from "react";
import {getPosts} from "../services/posts";
import {Header} from "../components/parts/Header";
import {List} from "../components/post/List";
import "./../styles/posts.css";

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []}
    }

    componentDidMount() {
        getPosts()
            .then(posts => {
                this.setState({
                    posts: posts.slice(0, this.props.number)
                })
            });
    }

    render() {
        return (
            <div className='main'>
                <Header/>
                <List posts={this.state.posts} />
            </div>
        )
    };
}

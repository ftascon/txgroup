import React, {Component} from "react";
import {PostExcerpt} from "./PostExcerpt";

export class List extends Component {
    render() {
        return (
            <div className='postList'>
                {
                    this.props.posts.map((post, index) => {
                        return (
                            <PostExcerpt post={post} key={post.id}/>
                        )
                    })
                }
            </div>
        )
    };
}

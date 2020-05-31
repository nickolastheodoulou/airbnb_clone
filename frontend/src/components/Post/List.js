import React, { Component } from 'react';
import axios from 'axios';

export class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:6200/api/post/list', null)
            .then(res => {
                let posts = res.data.post_list
                this.setState({posts})
            })
            .catch(error => {
                console.log(error)
            })
    }



    render(){
        let {posts} = this.state
        return (
            <div>
                <ul>
                    {posts.map(currentPost => {
                        return(
                            <li>
                                {currentPost.title} | {currentPost.description} | {currentPost.pricePerNight} |
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default List;
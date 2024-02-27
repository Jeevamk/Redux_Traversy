import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
class Posts extends React.Component{
    componentWillUnmount (){
    
        // eslint-disable-next-line react/prop-types
        this.props.fetchPosts();
    }

    render(){
        const postItems = this.state.postData.map((post) =>(
            <div key={post.id}>
                <h2>{post.title}</h2>
                <h3>{post.body}</h3>
            </div>
        ));
        return (
            <div>
                <h1>posts</h1>
                {postItems}
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default connect(null,{fetchPosts})(Posts)
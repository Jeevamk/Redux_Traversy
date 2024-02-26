import React from 'react'

class Posts extends React.Component{

    constructor(props){
        super(props)
        this.state={
            postData : []
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => this.setState({postData:data}))
    }
    render(){
        const postItems = this.state.postData.map(post =>(
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

export default Posts
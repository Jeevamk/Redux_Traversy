import React from 'react'

class PostForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title :'',
            body :''

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit  =this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit(e){
        e.preventDefault();


        const postData = {
            title : this.state.title,
            body : this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts' , {method:'POST',
    headers: {
        'content-type' :'application/json'
    },
    body: JSON.stringify(postData)
   }).then(res => res.json())
    .then(data=> console.log(data))
    }

   

  render() {
    return (
      <div>
        <h2>Add Posts</h2>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title : </label> <br />
                <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
            </div>
            <br />
            <div>
                <label>Body : </label> <br />
                <textarea name="body" value={this.state.body}  onChange={this.onChange}/>
            </div>
            <br />
            <button type="submit" style={{backgroundColor:'black',color:'white'}}>Submit</button>
        </form>
      </div>
    )
  }
}


export default PostForms;
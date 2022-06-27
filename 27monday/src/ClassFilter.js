import React , {Component} from "react";

class ClassFilter extends Component {

  state = {
    title : '',
      data : []
  }

    async componentDidMount(){
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  // .then((response) => response.json())
  // .then((data) => console.log(data));

      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
        this.setState({data : data.splice(0,10)});

      }catch(err){
        console.log(err)
      }
    }

    changeInputName = (e) => {
        this.setState({ title: e.target.value });
      };

  render(){
    console.log('render method called ')

      const {data} = this.state; 
      return(



        <div>
        <input type="text" placeholder="User Search" value={this.state.title} onChange={this.changeInputName} />
        
        {data.filter((post) => post.title.toLowerCase().includes(this.state.title.toLowerCase())).map((post) => (
          <ul key={post.id}>
            <h4>
              {post.id}- {post.title}
            </h4>
            <li>{post.body}</li>
          </ul>
        ))}

      </div>

      )
}


}
export default ClassFilter;

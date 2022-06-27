import React , {Component} from "react";

class App extends Component {

  state = {
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

  render(){
    console.log('render method called ')

      const {data} = this.state; 
      return(
        <div>
          <ul>
            {data.map((item)=>{return <li key={item.id}>{item.body}</li>}
            )}
          </ul>
        </div>
      )
}


}
export default App;

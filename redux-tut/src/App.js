
import {deposit , withdraw} from './store/actions';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';


function App() {
  const [amount , setAmount] = useState(0);
  const dispatcher = useDispatch();
  const state = useSelector((state) => state.res);
  const handelChange = (e)=>{
    setAmount(e.target.value);
  }
  return (
    <div className="App">
      <input onChange={handelChange} value={amount}/>
      <button onClick={()=>dispatcher(deposit(+amount))}>Increment</button>
      <button onClick={()=>dispatcher(withdraw(+amount))}>Decrement</button>
      <br/><br/>
      {state}
    </div>
  );
}

export default App;

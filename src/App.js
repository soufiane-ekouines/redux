import { useSelector,useDispatch } from "react-redux";
import { increment,dencrement,login,logout   } from "./store/actions";

function App() {
  const count = useSelector(state=>state.counter.count)
  const log = useSelector(state=>state.logged.loged)

  const dispatch = useDispatch();
  return (
    <div className="App">
      <header>
        <div>{count}</div>
        {
          !log?(<button onClick={()=>dispatch(login())}>Login</button>):(<button onClick={()=>dispatch(logout())}>logout</button>)
        }
      
      </header>
      <div>
        <button onClick={()=>dispatch(increment(3))}>+3</button>
        <button onClick={()=>dispatch(increment())}>+</button>

        <button onClick={()=>dispatch(dencrement())}>-</button>

      </div>
    </div>
  );
}

export default App;

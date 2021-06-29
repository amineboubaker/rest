
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {getUser} from './js/actions/Actions';
import AddUser from "./components/AddUser";
import UserList from "./components/userList"
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getUser())
    
  }, [dispatch])
  const { users, isLoading } = useSelector((state) => state);
  return <div className="App">
     {
    isLoading? <h1>...Loading</h1>:<div><UserList users={users}/></div>
     }
     
     <AddUser/>
   
       
  </div>;
}

export default App;

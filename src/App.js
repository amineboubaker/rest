
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {getUser} from './js/actions/Actions';


import UserList from "./components/userList"
import { useEffect } from "react";
import AddNewUser from "./components/AddNewUser";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getUser())
    
  }, [dispatch])
  const isLoading  = useSelector((state) => state.isLoading);
  return <div className="App">
    <h1 className="title">User Card</h1>
     {
    isLoading? <h1>...Loading</h1>:<div><UserList /></div>
     }
     
     
     <AddNewUser/>
   
       
  </div>;
}

export default App;

// import logo from './logo.svg';
import {useState} from "react"
import './App.css';
import LoginForm from "./components/LoginForm"

function App() {
  const adminUser = {
    email: "karthik@gmail.com",
    password:"mako@123"
  }
  const [user,setUser] = useState ({name:"",email:''})
  const [error,setError] = useState("")

  const Login = (details) =>{
    if(details.email === adminUser.email &&  details.password === adminUser.password){
      setUser({
       name : details.name, 
       email : details.email
      })
    console.log("user logged in")}else(
      setError("Sorry wrong user credentials!!"))
      console.log("invalid user")
    console.log("details",details)
  }

  const Logout = () =>{
    setUser({name:"",email:''})
    console.log("logout")
  }
  
  return (
    <div>
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>welcome,<span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
           </div>
      ):(
        <LoginForm Login={Login} error={error}></LoginForm>
      )}
      
    </div>
  );
}

export default App;

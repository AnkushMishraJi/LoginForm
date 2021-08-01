import './App.css';
import React,{useState} from 'react';
import LoginForm from './components/LoginForm';
import Portfolio from './components/Portfolio';
import FBLogin from './components/FBLogin';

function App() {
    const adminUser={
        email:"admin@admin.com",
        password:"admin123"
    }
    const [user, setUser]=useState({name:"",email:""});
    const [error, setError]=useState("");
    
    const Login=(details) => {
        console.log(details);
        if((details.email == adminUser.email && details.password == adminUser.password)){
            console.log("Logged in");
            
            setUser({
                name: details.name,
                email: details.email
            });

            setError("");
        }
        else{
            console.log("Details do not match");
            setError("Details do not match!")
        }
    }
    const Logout=()=>{
        console.log("Logout");
        setUser({
            name: "",
            email: ""
        })
        setError("");
    }
    return(
        <div className="App"> 
        {(user.email != "") ? (
            <div className="welcome">
            <div id="main-bar">
            <div id="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            </div>
            <button id="logout" onClick={Logout}>Logout</button>
            </div>
            <Portfolio />
            </div>   
        ): (
            <LoginForm Login={Login} error={error}/>
        )     
        }
        </div>
        
    );

}

export default App;

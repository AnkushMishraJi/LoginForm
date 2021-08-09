import './App.css';
import React,{useState} from 'react';
import LoginForm from './components/LoginForm';
import Portfolio from './components/Portfolio';

function App() {
    const adminUser={
        email:"admin@admin.com",
        password:"admin123"
    }
    const [user, setUser]=useState({name:"",email:""});
    const [error, setError]=useState("");
    
    const Login=(details) => {
        console.log(details);
        if((details.email === adminUser.email && details.password === adminUser.password) || login){
            console.log("Logged in");
            console.log(login);
            
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

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');
  
    const responseFacebook = (response) => {
      console.log(response);
      setData(response);
      setPicture(response.picture.data.url);
      if (response.accessToken) {
        setLogin(true);
      } else {
        setLogin(false);
      }
      console.log(login);
    }
    return(
        <div className="App"> 
        {(user.email !== "") ? (
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
            <LoginForm Login={Login} error={error} login={login} data={data} picture={picture} responseFacebook={responseFacebook}/>
        )     
        }
        </div>
        
    );

}

export default App;

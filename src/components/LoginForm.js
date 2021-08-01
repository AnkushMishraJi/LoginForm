import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input}
from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import './LoginForm.css';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import FBLogin from './FBLogin';

function LoginForm({Login, error}){
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

      return(
      <Form onSubmit={submitHandler} className="login-form">
      <h1 className="text-center">Welcome!!!</h1>
      {(error != "") ? (<div className="error">{error}</div>) : "" }
      <FormGroup>
          <Label>Name</Label>
          <input type="name" placeholder="Name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
      </FormGroup>
      <FormGroup>
          <Label>Email</Label>
          <input type="email" placeholder="Email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
      </FormGroup>
      <FormGroup>
          <Label>Password</Label>
          <input type="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
      </FormGroup>
      <input type="submit" id="login-btn" value="Log in" />
      <div className="text-center login-text">
          Or continue with your social account 
      </div>
      <FBLogin ></FBLogin>
      <div className="text-center fb-text">
          <a href="/sign-up">Sign up</a>
          <span>|</span>
          <a href="/forgot-password">Forgot Password</a>
      </div>
      </Form>
      
      
  );
}

export default LoginForm;
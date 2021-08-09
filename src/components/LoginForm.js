import React, {useState} from "react";
import {Form, FormGroup, Label}
from 'reactstrap';
import './LoginForm.css';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';

function LoginForm({Login, error, login, data, picture,responseFacebook}){
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

      return(
      <Form onSubmit={submitHandler} className="login-form">
      <h1 className="text-center">TENCO</h1>
      {(error != "") ? (<div className="error">{error}</div>) : "" }
      <FormGroup>
          <Label>Name</Label>
          <input type="name" placeholder="Name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} required/>
      </FormGroup>
      <FormGroup>
          <Label>Email</Label>
          <input type="email" placeholder="Email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} required/>
      </FormGroup>
      <FormGroup>
          <Label>Password</Label>
          <input type="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} required/>
      </FormGroup>
      <button type="submit" id="login-btn">Log In</button>
      <div className="text-center login-text">
          Or continue with your social account 
      </div>
      <div className="container">
      <Card className="fb-card">
        <Card.Header>
          { !login && 
            <FacebookLogin
              appId="359709302356737"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook"></FacebookLogin>
          }
          { login &&
            <Image src={picture} roundedCircle />
          }
        </Card.Header>
        { login &&
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.email}
            </Card.Text>
          </Card.Body>
        }
      </Card>
    </div>
      <div className="text-center fb-text">
          <a href="/sign-up">Sign up</a>
          <span>|</span>
          <a href="/forgot-password">Forgot Password</a>
      </div>
      </Form>
      
      
  );
}

export default LoginForm;
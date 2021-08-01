import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import './FBLogin.css';
import App from '/home/ankush/git_workspace/myapp/src/App.js';
import LoginForm from './LoginForm';

function FBLogin() {
  
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

  }

  return (
    <div class="container">
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
  );
}

export default FBLogin;
import { React, useState} from 'react'
import FacebookLogin from 'react-facebook-login';
import List from '../List'

const APP_ID = '1030201954541970' 

export default function Login () {

    const [login, setLogin] = useState(null)
    const [user, setUser] = useState(null)

    const responseFacebook = (response) => {
        console.log(response);
        if (response.accessToken) {
          setLogin(true);
          setUser({
              name: response.name,
              picture: response.picture.data.url
            })
        } else {
          setLogin(false);
          setUser(null)
        }
      }

    return  <div className="login-container">
          { !login ? 
            <FacebookLogin
              appId={APP_ID}
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
              : <List user={user}/>
          }     
    </div>
}
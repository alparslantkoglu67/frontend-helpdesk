
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

import LoginForm from './LoginForm';
import LanguageOptions from './LanguageOptions';
import Yonlendirmeler from '../Pages/Yonlendirmeler.jsx';
import MainPage from '../Pages/MainPage.jsx'


const Login = () => {
  const [isClicked, setisClicked] = useState(true);

  return (
    /**/


    <div>
      <a onClick={() => setisClicked(!isClicked)} >Giriş Yap </a>
      {isClicked ?

        (
          <div className="container">
            <div>
              <img src="/src/assets/logo1.png" alt="Logo" />
            </div>
            <div className="card mx-auto" >
              <div className="card-body">
                <h5 className="card-title text-center">Help Desk</h5>

                <LoginForm />
                <LanguageOptions />
              </div>
            </div>
          </div>




        )



        :


        (
          <MainPage />
        )





      }
      <div>

      </div>
    </div>
  );
}

export default Login;

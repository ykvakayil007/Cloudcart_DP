import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthApi from '../apis/AuthApi';
import ShopFinder from '../apis/ShopFinder';
import logo from '../images/logo_new.png';
import Cookies from 'js-cookie';
import { ShopContext } from '../context/ShopContext';

const Login = () => {
    const Auth = React.useContext(AuthApi);
    const {user, setUser} = useContext(ShopContext);
    let history = useHistory();
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const Login = await ShopFinder.post(`/user/login`,{
                username,
                password
            });
            if (Login.data.data===undefined){
                for (let letter of Login.data) {
                    if (letter==='i'){
                        alert("Password is not correct");
                    };
                    if (letter==='u'){
                        alert("Invalid user name,Register if not..");
                    };
                };
            }else{
                setUser(Login.data.data.user);
                Auth.setAuth(true);
                Cookies.set("user",user.id);
                console.log("started")
            };
        } catch(err) {
            console.log(err);
        };
        
    };
    const register =()=>{
        history.push("/user/register")
    };

    const mainHeader = {width: "100%",
    maxWidth: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"};

    const forms = {
        width: "444px",
        height: "494px",
        padding: "62px 48px",
        border: "1px solid #c2c2c2",
        borderRadius: "15px",
        textAlign: "start",
        fontFamily: "'Noto Sans', sans-serif",
        fontSize: "14px",
        marginBottom: "17px !important",
        color: "#212121"
    };

    const btnOrange =  {
        backgroundColor: "#f54336 !important",
        width: "100%",
        color: "#fff",
        borderRadius: "30px",
        marginTop: "10px",
        marginBottom: "10px",
        fontSize:"13px"
    };

    const h2 = {
        marginBottom: "17px !important",
        color: "#212121"
    };
    const formGroup =  {
        marginBottom:"10px"
    };

    const formControl = {
        paddingTop: "30px !important",
        paddingLeft: "0",
        paddingBottom: "30px !important",
        outline: "none !important",
        border: "none",
        borderBottom: "1px solid #e0e2e6",
        borderRadius: "0px",
        marginTop: "10px",
        color: "#cacdd2",
        opacity: "0.7",
        '&::focus': {
             borderBottom: "1px solid #f54336 !important",
             outline: "none",
             boxShadow: "none"
        }
    };

    return(
        <div>
        <img src = {logo} width="200" height="150" alt = "logo"/>
            <header id="main-header" style={mainHeader}>
      <div className="form" style={forms}>
        <form action="#" className="was-validated">
          <div className="form-group" style={formGroup}>
            <h2 style={h2}>Login.</h2>
          </div>
          <div className="form-group" style={formGroup}>
            <input
              type="text"
              placeholder="Email adress"
              onChange={(e) => setName(e.target.value)}
              id="username"
              className="form-control"
              style={formControl}
              required
            />
            <div className="valid-feedback">Valid.</div>
          </div>

          <div className="form-group" style={formGroup}>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="form-control"
              style={formControl}
              required
            />
            <div className="valid-feedback">Valid.</div>
          </div>
          <div className="form-group" style={formGroup}>
            <button className="btn btn-lg btn-orange" style={btnOrange} onClick = {handleSubmit}>
              LogIn
            </button>
          </div>
          <div className="form-group" style={formGroup}></div>
          <div className="form-group" style={formGroup}>
            <p className="">
              Don't have an account?<a href="register" onClick = {register}> Register</a>
            </p>
          </div>
        </form>
      </div>
    </header>
  </div>
    )
};
export default Login;
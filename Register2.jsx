import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ShopFinder from '../apis/ShopFinder';
const Register = () => {
    let history = useHistory();
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const handleSubmit = async () => {
        try {
            const response = await ShopFinder.post("/user/register",{
                username,
                email,
                address,
                contact,
                location,
                password,
                password2
            });
            if (response.data.data===undefined){
                for (let letter of response.data) {
                    if (letter==='e'){
                        alert("Please, Enter all the fields");
                    };
                    if (letter==='i'){
                        alert("Password Should be atleast 6 characters");
                    };
                    if (letter==='o'){
                        alert("Password don't match");
                    };
                    if (letter==='u'){
                        alert("Email is alrady registered or username is taken");
                    };
                };
            }else{
                alert("You are Registered");
                history.push('/user/login');
            };
        } catch(err) {
            console.log(err);
        };
    };
    const login =()=>{
        history.push("/user/login")
    };

    const mainHeader = {
        width: "100%",
        maxWidth: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      };
      
      const forms = {
        width: "444px",
        height: "720px",
        padding: "62px 48px",
        border: "1px solid #c2c2c2",
        borderRadius: "15px",
        textAlign: "start",
        fontFamily: "'Noto Sans', sans-serif",
        fontSize: "14px",
        marginBottom: "17px",
        color: "#212121"
      };
      
      const btnOrange = {
        backgroundColor: "#f54336",
        width: "100%",
        color: "#fff",
        borderRadius: "30px",
        marginTop: "10px",
        marginBottom: "10px",
        fontSize: "13px"
      };
      
      const h2 = {
        marginBottom: "17px",
        color: "#212121"
      };
      const formGroup = {
        marginBottom: "10px"
      };
      
      const formControl = {
        paddingTop: "30px",
        paddingLeft: "0",
        paddingBottom: "30px",
        outline: "none",
        border: "none",
        borderBottom: "1px solid #e0e2e6",
        borderRadius: "0px",
        marginTop: "10px",
        color: "#cacdd2",
        opacity: "0.7",
        "&::focus": {
          borderBottom: "1px solid #f54336",
          outline: "none",
          boxShadow: "none"
        }
      };
      
    return(
    <div>
        <img src="kk" width="200" height="150" alt="logo" />
        <header id="main-header" style={mainHeader}>
          <div className="form" style={forms}>
            <form action="#" className="was-validated">
              <div className="form-group" style={formGroup}>
                <h2 style={h2}>Register</h2>
              </div>
              <div className="form-group" style={formGroup}>
                <input
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                  id="username"
                  className="form-control"
                  style={formControl}
                  type="text"
                  required
                />
              </div>
    
              <div className="form-group" style={formGroup}>
                <input
                  type="text"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="form-control"
                  style={formControl}
                  required
                />
              </div>
    
              <div className="form-group" style={formGroup}>
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="address"
                  className="form-control"
                  style={formControl}
                  required
                />
              </div>
    
              <div className="form-group" style={formGroup}>
                <input
                  type="text"
                  placeholder="Mobile No."
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  id="contact"
                  className="form-control"
                  style={formControl}
                  required
                />
              </div>
    
              <div className="form-group" style={formGroup}>
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  id="location"
                  className="form-control"
                  style={formControl}
                  required
                />
              </div>
    
              <div className="form-group" style={formGroup}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="form-control"
                  style={formControl}
                  required
                />
              </div>
    
              <div className="form-group" style={formGroup}>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  id="password2"
                  className="form-control"
                  style={formControl}
                  required
                />
              </div>
              <div className="form-group" style={formGroup}>
                <button
                  className="btn btn-lg btn-orange"
                  style={btnOrange}
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
              <div className="form-group" style={formGroup}></div>
              <div className="form-group" style={formGroup}>
                <p className="">
                  Already have an account?
                  <a href="login" onClick={login}>
                    {" "}
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </header>
      </div>
    );
};
export default Register;
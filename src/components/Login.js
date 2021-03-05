import React,{useState} from 'react';
import "./Login.css";
import {useDispatch} from 'react-redux';
import{login} from '../features/userSlice';
import {auth} from "../firebase";
import Footer from "./Footer";

function Login() {
    const[state,setState]=useState(false);
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const dispatch=useDispatch();
    const logInToApp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(
                login({
                email: userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
               })
            );  
        }).catch((error)=>alert(error));
    };
    const register=()=>{
     if(!name){
            return alert("Please enter your name")
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
        userAuth.user
        .updateProfile({
            displayName:name,
        })
        .then(()=> {
            dispatch(
                login({
                email: userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:name,
                
            })
            );
        }); 
            })
            .catch((error)=>alert(error));
};
return (
<div className="login__container">
{!state ?(<div className="login">
<h2 className="login__heading">LOGIN</h2>
<p className="login__para">Please enter your E-mail and Password:</p>
<form>
<input value={email} onChange={e=>setEmail(e.target.value)}
 type="text" placeholder="Email"/>
<input  value={password} onChange={e=>setPassword(e.target.value)}
 type="password" placeholder="Password"/>
<button className="loginBtn" type="submit" onClick={logInToApp}>LOGIN</button>
</form>
<div style={{ display: 'flex' }}>Don't have an account?{""}

<span className="login__register"  style={{ cursor: 'pointer' }} onClick={()=>setState(true)}>Sign up</span>
</div>
</div>):

(<div className="register">
<h2 className="login__heading">REGISTER</h2>
<p >Please fill in the information below:</p>
<form>
<input value={name} onChange={e=>setName(e.target.value)}
 type="text" placeholder="First name"/>
<input type="text" placeholder="Last name"/>
<input value={email} onChange={e=>setEmail(e.target.value)}
 type="text" placeholder="Email"/>
<input  value={password} onChange={e=>setPassword(e.target.value)}
 type="password" placeholder="Password"/>

</form>
<div >
<button className="loginBtn" 
 onClick={register}>CREATE MY ACCOUNT</button>
</div>
</div>)}
<Footer style={{width:"100%"}}/>
</div>
)
}

export default Login

import React,{useEffect, useRef, useState}from "react";
import { useForm } from "react-hook-form";
import List from "./List";
import "./Login.css";




const Login = () => {
const username=useRef();
const password=useRef();
const onSubmit=()=>{
  if(username.current.value==="rabinbhn"&&password.current.value=="123456"){
    localStorage.setItem("usernamedata","rabinbhn")
    localStorage.setItem("password","123456");
  }
}
{

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [userstate,setUserstate]=useState(false);
  const onSubmit=()=>{
    setUserstate(true)
    alert("logged in sucessfully")
  }


  
 
  return (
    <>
    {!userstate?(
    <div className="login-page">
      <h3 style={{textAlign:'center',marginBottom:'1rem'}}>EMS Login system</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-inputs">
          <section>
            <input
              className="input-io"
              type="text"
              placeholder="username"
              ref={username}


              {...register("username", {
                required: {
                  value:true,
                message:'username is required'},
                minLength: {
                  value: 5,
                  message: "username must be 5 charcters",
                },
              })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </section>

          <section>
            <input
              type="password"
              ref={password}
              className="input-io"
              placeholder="password"
            
              {...register("password", {
                required: {
                  value:true,
                  message:'password id required'},
                minLength: {
                  value: 8,
                  message: "password must be more than 8 characters",
                },
                maxLength: {
                  value: 16,
                  message: "password must be less than 16 characters",
                },
                pattern: {
                  value: /[a-z]/,
                  message: "it must contain one special characters",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </section>
          <section>
           <input className="login-btn"  type="submit"></input> 
          </section>
        </div>
      </form>
    </div> ):
    <List userstate={userstate}/> 
    } 
  </>
  );
}

}
export default Login;

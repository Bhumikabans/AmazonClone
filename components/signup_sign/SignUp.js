import React from 'react'
import "./sign.css"
import { NavLink } from 'react-router-dom'
import  {useState} from 'react'



const SignUp = () => {

  const [udata,setUdata] = useState({
          fname:"",
          email:"",
          mobile:"",
          password:"",
          cpassword:""
  });
console.log(udata);
  //  const adddata = (e)=>{
  //     const {name,value} = e.target;
  //  }

  //  setUdata(()=>{
  //      return {
  //       ...udata,
  //       [name]:value
  //      }
  //  })


  return (
    <section>
    <div className='sign_container'>
      <div className='sign_header'>
        <img src="./blacklogoamazon.png" alt="amazonlogo"></img>
 </div>
  <div className='sign_form'>
   <form>
     <h1>Sign-Up</h1>
     <div className='form_data'>
         <label htmlFor='fname'>Your name</label>
         <input type="text"
         onChange={(e)=>setUdata({...udata,fname:e.target.value})}
         value={udata.fname}
          name="fname" id="fname"></input>
      </div>
      <div className='form_data'>
         <label htmlFor='email'>Email</label>
         <input type="text"
       onChange={(e)=>setUdata({...udata,email:e.target.value})}
         value={udata.email}
         name="email" id="email"></input>
      </div>
      <div className='form_data'>
         <label htmlFor='number'>Mobile</label>
         <input type="text" 
        onChange={(e)=>setUdata({...udata,mobile:e.target.value})}
         value={udata.mobile}
         name="mobile" id="mobile"></input>
      </div>
      <div className='form_data'>
       <label htmlFor='password'>Password</label>
  <input type="password"
    onChange={(e)=>setUdata({...udata,password:e.target.value})}
   value={udata.password}
  name="password" placeholder='At least 6 character' id="password"></input>
      </div>
      <div className='form_data'>
       <label htmlFor='password'>Password Again</label>
  <input type="cpassword" 
  onChange={(e)=>setUdata({...udata,cpassword:e.target.value})}
  value={udata.cpassword}
  name="cpassword"  id="password"></input>
      </div>
      <button className='signin_btn'>Continue</button>
      <div className='signin_info'>
        <p>Already have an account?</p>
        <NavLink to="/login">Signin</NavLink>

      </div>
   </form>
   </div>
   
</div>
</section>
  )
}

export default SignUp

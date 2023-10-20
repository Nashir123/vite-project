
import { useState } from 'react';
import './App.css'

function App() {
  const [first,setFirst]=useState("");
  const[sec,setSec]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[cpassword,setCpassword]=useState("");
  function ValidateEmail(mail) 
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
 if (mail.match(mailformat))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
  function fun()
  {
  
    if(first==="")
    {
        alert("first name should not empty")
    }
    if(sec==="")
    {
        alert("second name should not empty")
    }
    var mail= ValidateEmail(email)
    if(mail===false)
    {
      alert("Please input a valid email");
    }
    if(password.length<8)
    {
      alert("password should be 8 char length")
    }
    if(password!==cpassword)
    {
       alert("password should match");
    }
  }
  return (
    
  <div className="form">
    <div className="top">
        <label >
            First Name
        </label>
          <input type="text" className="first"
           value={first}
           onChange={(e)=>setFirst(e.target.value)}
           />
    </div>
    <div>
        <label >
            Last Name
        </label>
          <input type="text" className="second" 
             value={sec}
           onChange={(e)=>setSec(e.target.value)}
          />
     
    </div>
    <div>
        <label >
           email
        </label>
          <input type="text" className="email"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           />
     
    </div>
    <div>
        <label >
          Password
        </label>
          <input type="text"className="password"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
            />
    </div>
    <div>
        <label >
          confirm Password
        </label>
          <input type="text"className="cpassword"
           value={cpassword}
           onChange={(e)=>setCpassword(e.target.value)}
            />
    </div>
    <div>
        <button className="btn" onClick={fun}>
            submit
        </button>
    </div>
</div>

  )
}

export default App

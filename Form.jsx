import {useState} from 'react'

const Form = () => {
  const[data,setdata]=useState({email:" ",password: " "});
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setdata(values=>({...values,[name]:value}));
    
    
    
      
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
   console.log(data);
  
  }
  return (
    
    <div className='App'>
     <p id="head">Create Account</p>
     <form onSubmit={handleSubmit}>
      <label>Email<br/>
        <input type="text" name="email" onChange={handleChange}></input>
      </label><br/><br/>
      <label>Password<br/>
        <input type="password" name="password" onChange={handleChange}></input>
      </label>
      <br/>
      <label class="container">
  <input type="checkbox"></input>I Accept the Terms of Service</label><br/>
<button>SUBMIT</button>
    

     </form>
    </div>
  )
}

export default Form

      
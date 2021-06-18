import React,{useState} from 'react';
import gif from './assets/abc.gif'
import styled from 'styled-components'
import brandgifh from './assets/text7.gif'

const Backg =styled.img`
position:absolute;
width:100%;
height:120%;
overflow:hidden;
left:0;
top:0

`

const Brand1 =styled.div`
position:absolute;
top:20px;
left:30px;
z-index:10;


`

const FormWrapper = styled.div`
position:absolute;
top:50%;left:50%;
transform:translate(-50%,-50%);
min-width:30%;
@media (min-width: 768px) {
  width:30%
}
overflow:hidden;
background-color:#eee;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

`

const Register = (props) => {
     
   
    const [fname,setFname]=useState('');  
    const [lname,setLname]=useState(''); 
    const [email,setEmail]=useState(''); 
    const [city,setCity]=useState(''); 
    const [phone,setPhone]=useState(''); 

    const submitHandler =(event)=>{
              event.preventDefault();
              console.log("event trigerred", event);
              const newData={name:`${fname} ${lname}`, email,address:{city},phone };


    }
    
    

    

    


    return (
      <>
        <Brand1 >
       <img src={brandgifh} height="5w" width="5vw" alt="brand"/>
       <h3>Register</h3>
       </Brand1>
        <div style={{color:"red"}}>
            <Backg src={gif} alt="loading-img"/>
            <form onSubmit={(event)=>{
                   submitHandler(event);
            }}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            
                            <div class="form-group mt-5" >
    {/* <label htmlFor="fname">First Name</label> */}
    <input type="text" 
    placeholder="First Name"
    class="form-control mt-2" 
    value={fname}
    onChange={(event)=>{
        event.preventDefault();
        setFname(event.target.value);

    }}
    

    id="fname" 
    aria-describedby="emailHelp"/>
    
  </div> 
  
   
  <div class="form-group mt-5" >
    {/* <label htmlFor="lname">Last Name</label> */}
    <input type="text" class="form-control mt-2"
    placeholder="Last Name"
     id="lname"
    value={lname}
    onChange={(event)=>{
        setLname(event.target.value);

    }} aria-describedby="emailHelp"/>
    
  </div>

  <div class="form-group mt-5">
    {/* <label htmlFor="email">Email address</label> */}
    <input type="email" 
    placeholder="Email Address"
    class="form-control mt-2" id="email" value={email}
    onChange={(event)=>{
        setEmail(event.target.value);

    }} aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group mt-5">
    {/* <label htmlFor="city">City</label> */}
    <input type="text" 
    placeholder="City"
    class="form-control mt-2" value={city}
    onChange={(event)=>{
        setCity(event.target.value);

    }} id="city"/>
  </div>

  <div class="form-group mt-5">
    {/* <label htmlFor="phone">Phone no</label> */}
    <input type="tel" 
    
    class="form-control mt-2"
    placeholder="Phone"
      value={phone}
    onChange={(event)=>{
        setPhone(event.target.value);

    }}id="phone" aria-describedby="emailHelp"/>
    
  </div>
  <div class="file btn btn-sm pl-5">
							<input type="file" name="file"/>
						</div>

  
  
  <button type="submit" data-testid="btnSubmit" style={{backgroundColor:"green"}}  class="btn btn-primary mt-5">Register</button>


                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}

export default Register;

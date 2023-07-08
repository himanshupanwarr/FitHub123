import React, { useState } from 'react'
import { Label,Card,TextInput,Button,No } from 'flowbite-react'
import { gym} from '../Asset';

const UserSingup = () => {
    const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const  handleSubmit=(e)=>{
  //   e.preventDefault(); 
  //   // alert("succesful");
  //   // window.location.href='./home'
    
  // }

  // fetch("http://localhost:5000/singup", {
  //   method: "POST",
  //   crossDomain: true,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  //   body: JSON.stringify({
  //       name,
  //     email,password
  //   }),
  // }).then((res)=>res.json()).then((data)=>{
  //   console.log(data,"userrigester");
  //   if (data.status == "ok") {
  //     alert("Registration Successful");
  //   } else {
  //     alert("Something went wrong");
  //   }
  // })








  const handleSubmit = (e) => {
  {
      e.preventDefault();

      // console.log(name, email, password)
      fetch("http://localhost:5000/singup", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name,email,password
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
            window.location.href='./home';
          } else {
            alert("Already registered");
          }
        });
    }
  };



  return (
    <div className='w-[100%] h-[660px] my-2 flex z-0' style={{backgroundImage:`url(${gym})`,backgroundPosition:'center',backgroundSize:'cover'}}  >

    <div className="w-[500px] sm:ml-[120px] h-[100%] flex flex-col space-y-3 p-12 my-3">
    <h3 className='text-4xl sm:text-4xl text-white w-[405px] my-3 mx-3 '>Sing Up!For best Offers</h3>
    <Card>
      <form action='/singup'   method='post' className="flex flex-col gap-4">
        <div>
            <div>
        <div className="mb-2 block">
            <Label
              htmlFor="email1" 
              value="Your Name"
              />
          </div>
          <TextInput
            id="email2"
            // name='email'
            type="string"
            placeholder="Full Name"
            onChange={(e)=>setName(e.target.value)}
            required={true}
            />
        </div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1" 
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            // name='email'
            type="email"
            placeholder="name@.com"
            onChange={(e)=>setEmail(e.target.value)}
            required={true}
            />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
              />
          </div>
          <TextInput
            id="password1"
            // name='password' 
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            required={true}
            />
        </div>
        <div className="flex items-center gap-2">
          {/* <No Display Name id="remember" /> */}
          <Label htmlFor="remember">
      
        <p className="forgot-password text-right">
            Already registered <a href="/login">--sign in?</a>
          </p>
          </Label>
        </div>
        <Button type="submit" disabled={email===""||name===""||password===""?true:false} onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Card>
  </div>
            </div>
  )
}

export default UserSingup
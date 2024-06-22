import { useState } from "react"

function Signup() {
 const [createId,setCreateId] = useState({});
 const create = (e) =>{
   const{name,value} =e.target;
   setCreateId((previousData) => ({
     ...previousData,[name]:value,
    }))
    
  }
  // console.log(createId);
  const handleSignup = async (e)=> {
  
      e.preventDefault();  //use to hold the value in console
      //api
      // console.log(createId);
      
      const response = await fetch("http://localhost:2024/signup",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(createId)
      });
      const jsonData = await response.json();
      console.log(jsonData)

  };
  return (
    <>
 
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign up to your account
      </h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST" onSubmit={handleSignup}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <input
            placeholder="   enter username"
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required=""
              value={create.username}
              onChange={ create}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone Number
          </label>
          <div className="mt-2">
            <input
            placeholder="   enter valid phone number"
              id="phone"
              name="phone"
              type="number"
              autoComplete=""
              required=""
              value={create.phone}
              onChange={create}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
            placeholder="  create a valid email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required=""
              value={create.email}
              onChange={ create}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            
          </div>
          <div className="mt-2">
            <input
            placeholder="   create password"
              id="createPassword"
              name="password"
              type="password"
              autoComplete="current-password"
              required=""
              value={create.password}
              onChange={ create}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
             Confirm Password
            </label>
            
          </div>
          <div className="mt-2">
            <input
            placeholder="   re-enter password"
              id="confirmPassword"
              name="Password"
              type="password"
              autoComplete=""
              required=""
              value={create.Password}
              onChange={ create}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        Already have account?
        <a
          href="/signin"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Signin
        </a>
      </p>
    </div>
  </div>
</>

  
  )
}

export default Signup

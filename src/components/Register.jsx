import {React,useState} from "react";
import axios from "axios"






const Register = () => {
  const [firstname,setFirstName ]=useState("")
  const [lastname, setLastName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  
  const handleSubmit =async (event)=>{
    event.preventDefault()
    try {
      await axios.post('/Register',{
        firstname,
        lastname,
        email,
        password
      });
      alert('Registeration Successfull !')
    } catch (error) {
      alert('Registeration Failed !')
    }
    
  }

  return (
    <>
      <div className="flex bg-white min-h-full flex-col justify-center items-center h-100dvh px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="border-2 border-indigo-600 rounded-lg	p-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-8">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  text-black">
                Sign up to your account
              </h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6  text-black text-left"
                >
                  First-Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstname"
                    name="firstname"
                    value={firstname}
                    type="text"
                    onChange={(ev)=>{setFirstName(ev.target.value)}}

                    autocomplete="firstname"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6  text-black text-left"
                >
                  Last-Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    type="text"
                    onChange={(ev)=>{setLastName(ev.target.value)}}
                    autocomplete="lastname"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6  text-black text-left"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    type="email"
                    onChange={(ev)=>{setEmail(ev.target.value)}}
                    autocomplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6  text-black"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={(ev)=>{setPassword(ev.target.value)}}
                    autocomplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6  text-black"
                  >
                    Confirm-Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="repassword"
                    type="password"
                    autocomplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button

                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;


import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createAccount, login } from "../../api/account";
import { toast } from 'react-toastify';
import { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';



const Login = () => {
  const navigate = useNavigate();
  const [ signup, setSignup ] = useState(false);
  const { logUserIn } = useContext(AuthContext);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    if (signup === true) {
      try {
        await createAccount(data);
        navigate('/login')
        reset();
        toast.success('Well done! Account created!', { toastId: 'signupSuccess'})
      } catch (err) {
        toast.error('Account could not be created', { toastId: 'signupError'})
      }
    } else {
      try {
        const res = await login(data);
        console.log(res)
        logUserIn(res)
        if (res) {
          toast.success(`Welcome ${data.email}!`, { toastId: 'loginSuccess'})
          navigate('/home')
        }
      } catch (err) {
        toast.error('Login error', { toastId: 'loginError'})
      }
    }
  }


  return (
    <>
      <main className='h-full place-content-center' >
      <section className="mt-36 flex flex-col items-center">
      <h1 className="mb-8">Sign in</h1>  
          <form id="loginForm" className="flex flex-col gap-5 items-center" onSubmit={handleSubmit(onSubmit)}>
            { signup === true && 
              <input className="h-8 p-2"
                defaultValue="" 
                type="username"
                placeholder="Username:"
                {...register("username", { required: true })} 
              />
            }
            {errors.email && <span className="-mt-4 text-xs text-rose-600">Username is required</span>}
            <input className="h-8 p-2"
              defaultValue="" 
              type="email"
              placeholder="Email:"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="-mt-4 text-xs text-rose-600">Email is required</span>}
            <input className="h-8 p-2"
              defaultValue=""
              type="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 8})}
            />
            {errors.password && <span className="-mt-4 text-xs  text-rose-600">Password is required</span>}

            { signup === true ? (
              <>
              <button form="loginForm" className=" text-slate-50  bg-gray-800 h-8 w-32 mt-8" type="submit">Sign Up</button>
              <div className="flex items-center">
              <span>Already have an account?</span><div className="text-indigo-400  w-32 hover:scale-125 cursor-pointer" onClick={() => setSignup(false)}>Sign in now</div>
              </div>
              </>
            ) : (
              <>
              <button form="loginForm" className=" text-slate-50  bg-gray-800 h-8 w-32 mt-8" type="submit">Sign In</button>
              <div className="flex items-center">
            <span>Don't have an account?</span><div className="text-indigo-400  w-32 scale-125 hover:scale-125 cursor-pointer" onClick={() => setSignup(true)}>Sign up now</div>
              </div>
              </>
            )}
            
            
            
            
          </form>
          
        </section>

      
      
      </main>
    </>

  )
};

export default Login;

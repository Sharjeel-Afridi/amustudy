import useLogin from "../../../utils/useLogin.js";
import { redirect } from "next/navigation";
import Link from "next/link";


const Login = () => {
    const { email, setEmail, password, setPassword, login, handleSubmit } = useLogin();
    


    if(login === true){
        redirect('/');
    }

    return(
        <div className="flex h-screen w-screen justify-center items-center bg-white text-black">
            <div className='flex flex-col justify-center items-center bg-slate-200 px-5 py-10 rounded-md'>
                {/* <h1 className='title'>AMUStudy</h1> */}
                <h3 className='text-[1.5rem] font-semibold mb-10'>Login</h3>
                <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
                    <input 
                    type="text" 
                    className='px-4 py-2 rounded-md'
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Email"
                    />

                    <input 
                    type="password" 
                    className='px-4 py-2 rounded-md'
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    />

                    <button type="submit" className='bg-green-500 w-[40%] py-4 rounded-md text-white'>Login</button>
                </form>
                <p className='text-slate-500 mt-5'>New to resolveX?</p>
                <Link href="/signup" className='text-blue-700'> Sign up</Link>
            </div>
        </div>
    )
}
export default Login;
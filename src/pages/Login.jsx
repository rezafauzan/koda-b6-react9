import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../redux/reducers/authReducer"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const navigator = useNavigate()

    function formLogin(data) {
        if (data.email === "koda@email.com") {
            if (data.password === "test1234") {
                alert("Login berhasil!")
                dispatch(login(data))
                navigator("/")
            } else {
                alert("Password atau email salah")
            }
        } else {
            alert("Password atau email salah")
        }
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit(formLogin)} className="flex flex-col justify-center gap-4 p-4 bg-white rounded shadow w-full max-w-180">
                <h1 className="text-xl font-bold">Login</h1>
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")} id="email" className="outline-0 p-4 rounded" placeholder="Masukan email anda" />
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password")} id="password" className="outline-0 p-4 rounded" placeholder="********" />
                <button type="submit" className="p-4 bg-fuchsia-700 text-white rounded cursor-pointer">Login!</button>
            </form>
        </div>
    )
}
export default Login
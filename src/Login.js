import { useState } from "react";

function Login() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [userEr, setUserEr] = useState(false);

    const handleLogin = (e) => {
        console.log(email, password);
        
        e.preventDefault();
    }
    const  validate = (e) => {
        const item = e.target.value;
        setEmail(item);
        console.log(item);
        if(item.length < 3 && item.length != 0){
            setUserEr(true);
        }
        else
            setUserEr(false);
           
    }
    return(
        <div className="App">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>

                <input type="text" placeholder = "Enter Email"
                onChange={(e) => {setEmail(e.target.value)}} />
                
                <br />
                <br />
                <input type="text" placeholder = "Enter Password"
                onChange={validate} />
                {
                    userEr ? <span>Password is too short!</span>
                    :
                    <span>{null}</span>
                }
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;
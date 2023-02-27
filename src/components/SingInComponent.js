import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignInComponent(props) {
    const [email, setEmail]= useState("");
    const [password, setPassword]=useState("");
    const [rememberMe,setRememberMe]=useState(false);
    const [emailErrorS,setEmailError]= useState("");
    const [passwordErrorS, setPasswordError]= useState("");
    const navigate =useNavigate();

    const homePage=()=>{
        navigate("/home")
    }
    const handleEmailInputChange = function (e){
        console.log('hi from handleemailinputchange');
        setEmail(e.target.value);
    }
    const handlePasswordInputChange = function (e){
        console.log('hi from handlepasswordinputchange');
        console.log(e.target.value);
        setPassword(e.target.value);

    }
    const handleRememberMeInputChange = function(e){
        console.log('hi from remembermeinputchange');
        setRememberMe(!rememberMe);
    }
    const handleSubmit = function (e){
        let emailError ='';
        let passwordError= '';
        if (!email){
            emailError= 'email cant be empty';
        }
        if(!password){
            passwordError = 'password cant be empty';
        } else if(password.length<8){
            passwordError='password should be at least 8 characters';
        }

        if(emailError|| passwordError){
            setEmailError(emailError);
            setPasswordError(passwordError);
            alert(JSON.stringify({emailError: emailErrorS, passwordError: passwordErrorS}));
            e.prevent.default();
        } else {
            //alert(JSON.stringify({email:email, password:password, rememberMe: rememberMe}))
            homePage();
        }
    }
    return (
        <div>
            <title>{"Sign In"}</title>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input type={"email"}
                       value={email}
                       onChange={handleEmailInputChange} 
                />
                <br></br>
                <label>Password: </label>
                <input type={"password"}
                       value={password}
                       onChange={handlePasswordInputChange} 
                />
                <br></br>
                <label>
                    <input type="checkbox"
                       checked={rememberMe}
                       onChange={handleRememberMeInputChange} 
                    />
                    Remember me
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignInComponent;
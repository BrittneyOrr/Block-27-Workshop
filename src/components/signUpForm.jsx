import { useState } from 'react';


export default function SignUpForm(props) {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(null);
   const { setToken } = props;

   async function handleSubmit (event) {
    event.preventDefault();
    try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const result = await response.json();
        console.log('Result: ', result);
        setToken(result.token);
    } catch (error){
    setError(error.message);
   }
}

return (
    <div className="formWrapper">
        <h2>Sign Up!</h2>
        {
            error && <p>{error}</p>
        }

        <form onSubmit = {handleSubmit}> 
            <label>
                Username: {' '}
                <input value = {username} required minlength = "8" onChange={(e) => setUsername(e.target.value)} />
            </label>
    
            <label>
                Password: {' '}
                <input value= {password} required minlength = "8" onChange={(e) => setPassword(e.target.value)} />
            </label>
    
            <button className="button"> Submit </button>
        </form>
    </div>
    );
}


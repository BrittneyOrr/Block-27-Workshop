import { useState, useEffect} from "react";

export default function Authenticate(props) {
    const { token } = props;
    const [successMessage, setSuccessMessage] = useState(null);
	const [error, setError] = useState(null);

     async function handleClick() {
     console.log('IN handleClick');
     try {
         const response = await fetch(
             'https://fsa-jwt-practice.herokuapp.com/authenticate',
             {
                 method: 'GET',
                 headers: {
                     'Content-Type': 'application/json',
                     Authorization: `Bearer ${token}`
                 }
             }
         );
         const result = await response.json();
         console.log('Authenticate Result: ', result);
         setSuccessMessage(result.message);
     } catch (error) {
         setError(error.message);
     }
 }

 return (
     <div>
         <h2>Authenticate</h2>
         {successMessage && <p>{successMessage}</p>}
         {error && <p>{error}</p>}
         <button onClick={handleClick}>Authenticate Token!</button>

     </div>
 );
}

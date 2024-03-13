import { useState } from 'react'
import './App.css'
import Authenticate from "./components/authenticate";
import SignUpForm from "./components/signUpForm";


export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}

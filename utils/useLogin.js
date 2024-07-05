"use client"
import { useContext, useState } from "react";
import pb from "../lib/pocketbase";
// import UserContext from "../src/app/layout";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(pb.authStore.isValid);
  // const { setLoggedinUser } = useContext(UserContext);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail(e.nativeEvent.target[0].value);
    setPassword(e.nativeEvent.target[1].value);

    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      if (authData){
          setLogin(pb.authStore.isValid);
          // setLoggedinUser(pb.authStore.model.username);
      }
    } catch (error) {
      console.log(error);
    }
  

    

    setEmail("");
    setPassword("");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    login,
    setLogin,
    handleSubmit
  };
};

export default useLogin;

import axios from "axios";
import qs from 'qs';
import { useState, createContext } from "react";
import endpoints from "../endpoints";

export const AuthContext = createContext();

function AuthContextProvider (props){
    const [username, setUsername] = useState('indunil');
    const [password, setPassword] = useState('123');
    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState();
    const [message, setMessage] = useState();
    const [location, setLocation] = useState('products');

    function login(){
        axios({
            method: 'post',
            url: endpoints.authLogin,
            data: qs.stringify({
                username,
                password
            }),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            responseType: 'json',
        }).then((value)=>{
            if(value.status == 200 && value.data){
                if(value.data.login == 1){
                    setLogged(true);
                    setToken(value.data.token);
                }
            }
        });
    }

    function logout(){
        setLogged(false);
        setToken(null);
        setLocation('products');
    }

    const value = {username, setUsername,password, setPassword, logged, token, login, logout, location, setLocation}
    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
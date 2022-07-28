import React from 'react'
import jwt_decode from "jwt-decode";
import {useParams, useSearchParams} from "react-router-dom";

const Home = () => {
    const [params] = useSearchParams()
    console.log("Params::", params.get("id_token"))
    const decodedToken = jwt_decode(params.get("id_token"))
    return <>
        <h1>Hi, welcome to the relying party web application!!</h1>
        <h1>Logged in User: {decodedToken.name} - {decodedToken.email}</h1>
    </>
}

export default Home;

import React from 'react'

const Login = () => {

    const login = (e) => {
        e.preventDefault()
        console.log("Logging in")

        let details = {
            'client_id': '0b74b9a3-d7a9-415b-bb90-1a1542ae3da0',
            'client_secret': 'ba76c50d-4926-44b9-96cb-e09e752204c5',
            'response_type': 'id_token',
            'scope': 'oidc vc_authn',
            'redirect_uri': 'http://localhost:3000/home'
        };

        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
            body: formBody,
            redirect: 'follow'
        }
        fetch('http://localhost:8080/api/v1/authorize', requestOptions)
            .then(response => {
                console.log(response)
                if (response.status === 302) {
                    window.location.href = response.url;
                }
            })
            .catch(error => console.log("Error::", error));

        // const requestOptions = {
        //     method: 'POST',
        //     redirect: 'follow',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({credentialShareRequestToken: "kdsafkj", credentialShareResponseToken: "dsfhnals", isHolderMustBeSubject: false})
        // }
        // fetch('http://localhost:8080/api/v1/id_token', {method: 'GET', redirect: 'follow'})
        //     .then(response => {
        //         console.log("response::", response)
        //         if (response.status === 302) {
        //             window.location.href = response.url;
        //         }
        //     })
        //     .catch(error => console.log("Error::", error));
    }

    return <>
        <h1>Login with Affinidi Wallet!!</h1>
        <button onClick={login}>Login</button>
    </>
}

export default Login;

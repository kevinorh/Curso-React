import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'kevin',
        email: 'kevin@google.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        // console.log(target)
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        // console.log('useEffect called')

    }, []);

    useEffect(() => {
        // console.log('formState changed')

    }, [formState]);

    useEffect(() => {
        // console.log('email changed')

    }, [email]);


    return (
        <>
            <h1> Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            { (username === 'kevin2') && <Message/>}
        </>
    )
}

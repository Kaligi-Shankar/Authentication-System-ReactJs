import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import { useHistory } from 'react-router-dom'
const Registration = () => {
    const history = useHistory()
    const handleSubmit = async (params) => {
        let users = JSON.parse(localStorage.getItem("users"))
        if (users) {
            let updatedUsers = [...users, params]
            await localStorage.setItem("users", JSON.stringify(updatedUsers))
        } else {
            await localStorage.setItem("users", JSON.stringify([params]))
        }
        history.push("/login")
    }
    return (
        <RegistrationForm handleSubmit={handleSubmit} />
    )
}

export default Registration
import axios from "axios"
import Profile from "./profile"
import { useState } from "react"

const CheckStatus = () => {
    const [ client, setClient ] = useState({})
    const [ data, setData ] = useState(
        {
            token: ""
        }
    )
    const getUserData = (e) => {
        e.preventDefault()
        axios.post("http://mavisa.ma/client/getSingleClientUsingToken", data)
        .then(res => {
            setClient(res.data)
        })
    }
    
    const changeHandler = (e) => {
        setData({token: e.target.value})
    }
    console.log(client)
    return (
        <div className="container mx-auto px-4">
            <div className="header font-bold text-2xl text-primary text-center">
                <h1>Check Your Visa Status</h1>
            </div>
            <div className="check-status-input flex items-center justify-center">
                <form className="w-1/2 my-8" onSubmit={getUserData}>   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <input type="text" id="default-search" name="token" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={changeHandler} placeholder="Please Enter your Token here..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </form>
            </div>
            <div className="profile-info">
                <Profile client={client}/>
            </div>
        </div>
    )
}

export default CheckStatus
import axios from "axios"
import Profile from "./profile"
import { useState } from "react"
import checkUrl from "../../helpers/checkUrl"

const CheckStatus = () => {
    checkUrl("/edit-document");
    const [ client, setClient ] = useState(null)
    const [ data, setData ] = useState(
        {
            token: ""
        }
    )
    const getUserData = (e) => {
        e.preventDefault()
        axios.post("http://mavisa.ma/client/getSingleClientUsingToken", data)
        .then(({data}) => {
            if(data.status === "success") {
                setClient(data.client)
                document.querySelector("#default-search").value = ""
            }else {
                setClient({message: "No Document Existe With this Token!"})
            }
        })
    }
    
    const changeHandler = (e) => {
        setData({token: e.target.value})
    }
    return (
        <div className="container mx-auto px-4">
            <div className="header font-bold text-2xl text-primary text-center">
                <h1>Check Your Visa Status</h1>
            </div>
            <div className="check-status-input flex items-center justify-center">
                <form className="w-1/2 my-8" onSubmit={getUserData}>   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <input type="text" id="default-search" name="token" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={changeHandler} placeholder="Please Enter your Token here..." required autoComplete="off" />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </form>
            </div>
            <div className="profile-info">
                {client ? <Profile client={client}/> : <div className="flex p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">MaVisa!</span> Please Make sure you enter your token in the input field.
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default CheckStatus
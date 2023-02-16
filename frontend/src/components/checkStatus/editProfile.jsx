import React, { useState } from 'react'
import countryList from 'react-select-country-list'
import SelectInput from '../visaForm/selectInput'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
import emailjs from '@emailjs/browser';

let nationalities = [...countryList().getData()]

const FamilySituationsOptions = [
    {  value: "married", label: "Married" },
    {  value: "single", label: "Single" },
    {  value: "divorced", label: "Divorced" }
]
const VisaTypeOptions = [
    {  value: "shot-stay", label: "Short-stay(< 90)" },
    {  value: "long-stay", label: "Long-stay(> 90)" }
]
const DocTypeOptions = [
    {  value: "cin", label: "CIN" },
    {  value: "passport", label: "Passport" }
]

const EditProfile = () => {
    let clientData = JSON.parse(localStorage.getItem("client"))
    console.log(clientData)

    const updateClient = (e, data) => {
        e.preventDefault()
        axios.put("http://mavisa.ma/client/updateClient", data)
        .then(response => {
            console.log(response.data)
            if(response.data.status === "success") {
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });
                localStorage.clear();
                setTimeout(() => {
                    location.assign("/check-visa-situation")
                }, 4000)
            }else {
                toast.error(response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });
            }
        })
        .catch(error => console.log(error));
    }
    for(let item in clientData) {
        const [ firstName, lastName ] = clientData[item].nom_complet.split(" ")
        const {address,date_arriver,date_depart,id,naissance,nationalite,numero_document,rdv_date,rdv_id,rdv_time,situation,status,token,type,type_visa,user_id} = clientData[item]
        const [data, setData] = useState({
            id: id,
            firstName: firstName,
            lastName: lastName,
            nationality: nationalite,
            birthDate: naissance,
            family_situation: situation,
            address: address,
            visa_type: type_visa,
            depart_date: date_depart,
            arrival_date: date_arriver,
            doc_type: type,
            doc_num: numero_document,
            rdv_date: '',
            rdv_time: ''
        })
        const changeHandler = (e) => {
            setData({...data,[e.target.name]: e.target.value, id: id});
        }
        console.log(data)
        return (
            <div className='profile flex items-center justify-center'>
                <ToastContainer/>
                <form className='w-1/2' onSubmit={(e) => updateClient(e, data)}>
                    <div className="mb-2">
                        <div className="field-wrapper flex items-center gap-4">
                            <div className="field w-1/2">
                                <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <i className='bx bx-user-circle'></i>
                                    </div>
                                    <input type="text" id="first-name" name='firstName' defaultValue={firstName} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="field w-1/2">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <i className='bx bx-user-circle'></i>
                                    </div>
                                    <input type="text" id="last-name" name='lastName' defaultValue={lastName} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="mb-2">
                        <div className="field-wrapper flex items-center gap-4">
                            <div className="field w-1/2">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Birth Date</label>
                                <div className="relative max-w-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" name="birthDate" id="birthDate" defaultValue={naissance} onChange={changeHandler} placeholder="Select date" />
                                </div>
                            </div>
                            <div className="field w-1/2">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Nationality</label>
                                <div className="relative">
                                    <SelectInput options={nationalities} name="nationality" value={nationalite} id="nationality" onChange={changeHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="mb-2">
                        <div className="field-wrapper flex items-center gap-4">
                            <div className="field w-1/2">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Family Situation</label>
                                <div className="relative">
                                    <SelectInput options={FamilySituationsOptions} value={situation} name="family_situation" id="family_situation" onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="field w-1/2">
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <i className='bx bx-home-alt-2'></i>
                                    </div>
                                    <input type="email" name="address" defaultValue={address} id="address" onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Address" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="mb-2">
                        <div className="field-wrapper flex items-center gap-4">
                            <div className="field w-full">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Visa Type</label>
                                <div className="relative">
                                    <SelectInput options={VisaTypeOptions} value={type_visa} name="visa_type" id="visa_type" onChange={changeHandler}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="mb-2">
                        <div className="field-wrapper flex items-center gap-4">
                            <div className="field w-1/2">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Depart Date</label>
                                <div className="relative max-w-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" defaultValue={date_depart} placeholder="Select date" name="depart_date" id="depart_date" onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="field w-1/2">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Arrival Date</label>
                                <div className="relative max-w-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" defaultValue={date_arriver} placeholder="Select date" name="arrival_date" id="arrival_date" onChange={changeHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="mb-2">
                        <div className="field-wrapper flex items-center gap-4">
                            <div className="field w-1/2">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Document Type</label>
                                <div className="relative max-w-sm">
                                    <SelectInput options={DocTypeOptions} value={type} name="doc_type" id="doc_type" onChange={changeHandler}/>
                                </div>
                            </div>
                            <div className="field w-1/2">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Document N*</label>
                                <div className="relative max-w-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <i className='bx bx-sticker'></i>
                                    </div>
                                    <input type="number" min={5} defaultValue={numero_document} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Document Number" name="doc_num" id="doc_num" onChange={changeHandler}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="mb-2 mt-8">
                        <div className="field-wrapper flex items-center gap-4">
                            <div className="field w-1/2">
                                <Link to="/">
                                    <button className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
                                </Link>
                            </div>
                            <div className="field w-1/2">
                                <button type="submit" className="w-full text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update Application</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditProfile
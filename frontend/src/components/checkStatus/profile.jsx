import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const cancelRDV = (id) => {
    axios.delete(`http://mavisa.ma/client/deleteClient/${id}`)
    .then(res => {
        location.assign("/");
    }).catch((error) => console.log(error))
}

const Profile = ({ client }) => {
    if(!localStorage.getItem('token')) {
        localStorage.setItem('token', JSON.stringify(client.token));
    }
    if(!client.message) {
        const {id,nom_complet,address,date_arriver,date_depart,naissance,nationalite,numero_document,rdv_date,rdv_time,situation,status,type,type_visa} = client
        const [ firstName, lastName ] = nom_complet.split(" ")
        return (
            <div className="profile">
                <div className="container mx-auto px-8 flex items-center justify-center">
                    <div className="profile-wrapper w-4/5 flex items-center gap-8 border-2 px-12 py-5 bg-slate-50 border-slate-100 shadow-lg shadow-primary/10 rounded">
                        <div className="client-info flex items-start justify-between gap-8 w-full">
                            <div className="personal-info w-1/2">
                                <h1 className='font-bold capitalize text-lg mb-4'>Personal Info</h1>
                                <div className="doc-info">
                                    <h2>FIRST NAME: <span className='text-primary info'>{firstName}</span></h2>
                                    <h2>LAST NAME: <span className='text-primary info'>{lastName}</span></h2>
                                    <h2>BIRTH DATE: <span className='text-primary info'>{naissance}</span></h2>
                                    <h2>NATIONALITY: <span className='text-primary info'>{nationalite}</span></h2>
                                    <h2>FAMILY SITUATION: <span className='text-primary info'>{situation}</span></h2>
                                    <h2>EMAIL ADDRESS: <span className='text-primary info'>{address}</span></h2>
                                    <h2>VISA TYPE: <span className='text-primary info'>{type_visa}</span></h2>
                                    <h2>DEPART DATE: <span className='text-primary info'>{date_depart}</span></h2>
                                    <h2>ARRIVAL DATE: <span className='text-primary info'>{date_arriver}</span></h2>
                                    <h2>DOCUMENT TYPE: <span className='text-primary info'>{type}</span></h2>
                                    <h2>DOCUMENT N°: <span className='text-primary info'>{numero_document}</span></h2>
                                </div>
                            </div>
                            <div className="rdv-info w-1/2">
                                <h1 className='font-bold capitalize text-lg mb-4'>Visa RDV Info</h1>
                                <div className="info">
                                    <h2>VISA RDV DATE: <span className='text-primary info'>{rdv_date}</span></h2>
                                    <h2>VISA RDV TIME: <span className='text-primary info'>{rdv_time}</span></h2>
                                    <h2>VISA RDV STATUS: <span className='text-primary info'>{status}</span></h2>
                                </div>
                                <div className="btns mt-40">
                                    <Link className="text-white bg-gradient-to-r from-primary via-blue-600 to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 edit" to="/edit-document">Edit Informations</Link>
                                    <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => cancelRDV(id)}>Cancel RDV</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else {
        return (
            <div className="flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                <span className="sr-only">info</span>
                <div>
                    <span className="font-medium">Warning!</span> {client.message}.
                </div>
            </div>
        )
    }
}

export default Profile
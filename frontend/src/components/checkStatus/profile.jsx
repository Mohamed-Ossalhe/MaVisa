import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const cancelRDV = (id) => {
    axios.delete(`http://mavisa.ma/client/deleteClient/${id}`)
    .then(res => {
        console.log(res.data.status)
    })
}

const Profile = ({ client }) => {
    if(!client.message) {
        if(!localStorage.getItem("client")) {
            localStorage.setItem("client", "{}")
        }
        let newData = client
        localStorage.setItem("client", JSON.stringify(newData))
        for(let item in client) {
            const [ firstName, lastName ] = client[item].nom_complet.split(" ")
            const {id,address,date_arriver,date_depart,naissance,nationalite,numero_document,rdv_date,rdv_time,situation,status,type,type_visa} = client[item]
            return (
                <div className="profile">
                    <div className="container mx-auto px-8 flex items-center justify-center">
                        <div className="profile-wrapper w-4/5 flex items-center gap-8 border-2 px-12 py-5 bg-slate-50 border-slate-100 shadow-lg shadow-primary/10 rounded">
                            <div className="client-info flex items-start justify-between gap-8 w-full" id={id}>
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
                                        <button type="button" onClick={(e) => {
                                            let id = parseInt(e.target.parentElement.parentElement.parentElement.id)
                                            cancelRDV(id)
                                        }} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel RDV</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }else {
        // toast.warn('Sorry, No Document Found With This Token!', {
        //     position: "top-center",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: false,
        //     draggable: false,
        //     progress: undefined,
        //     theme: "light",
        // });
        return (
            <div>
                {/* <ToastContainer /> */}
            </div>
        )
    }
}

export default Profile
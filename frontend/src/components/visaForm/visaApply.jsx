import VisaForm from "./visaForm"
import asideImg from "../../assets/img/undraw_close_tab_re_4cj6.svg"

const VisaApply = () => {
    return (
        <div className="apply-form">
            <div className="container mx-auto">
                <div className="apply-form-wrapper md:flex md:items-start px-4 md:px-12 md:justify-evenly">
                    <header className="header md:w-2/5 mt-20">
                        <h1 className="font-bold text-2xl text-secondary capitalize mb-4">hey! Dear, Welcome to <span className="italic font-black">MaVisa.ma</span></h1>
                        <p className="text-slate-600 capitalize text-base">Start Your Visa Application by Filling this Informations Form.</p>
                        <div className="rules mt-8">
                            <img src={asideImg} alt="" className="h-80 hidden md:block"/>
                        </div>
                    </header>
                    <div className="content md:w-1/2">
                        <VisaForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisaApply
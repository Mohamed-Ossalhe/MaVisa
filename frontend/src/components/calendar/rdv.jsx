import ReserveCalendar from "./ReserveCalendar"
import asideImg from "../../assets/img/undraw_close_tab_re_4cj6.svg"
import ReserveTime from "./ReservationTime"
import { Link } from "react-router-dom"

const Rdv = () => {
    return (
        <div className="rdv-content max-h-screen overflow-hidden">
            <div className="container mx-auto px-24 h-full overflow-hidden">
                <div className="header pt-5 capitalize h-1/3 mb-8 header font-bold text-2xl text-primary text-center">
                    <h1>Choose Appiontement Date and Time</h1>
                </div>
                <div className="rdv-date-time h-2/3 flex items-start gap-8">
                    <div className="calendar w-1/2"><ReserveCalendar /></div>
                    <div className="time w-1/2 py-8">
                        <ReserveTime />
                        <div className="rdv-btns mt-12 flex items-end justify-end">
                            <Link to="/visa-informations">
                                <button className="px-5 py-2 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white rounded-sm transition-colors">Confirm</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rdv
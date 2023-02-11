import ReserveCalendar from "./ReserveCalendar"
import asideImg from "../../assets/img/undraw_close_tab_re_4cj6.svg"

const Rdv = () => {
    return (
        <div className="rdv-content max-h-screen overflow-hidden">
            <div className="container mx-auto px-24 h-full overflow-hidden">
                <div className="header text-center pt-5 text-primary text-xl capitalize h-1/3 mb-8">
                    <h1>Choose Appiontement Date and Time</h1>
                </div>
                <div className="rdv-date-time h-2/3 flex items-start gap-8">
                    <div className="calendar w-1/2"><ReserveCalendar /></div>
                    <div className="time w-1/2 py-8">
                        <label htmlFor="years" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Appiontement Time:</label>
                        <select id="years" size="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>08:00</option>
                            <option>09:00</option>
                            <option>10:00</option>
                            <option>11:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rdv
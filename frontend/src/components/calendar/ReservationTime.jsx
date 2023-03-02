import { useState } from "react"

const ReserveTime = ({times}) => {
    const reservedTimes = times.map((e) => {
        return e.rdv_time;
    })
    const availabletimes = ["08:00:00", "09:00:00", "10:00:00", "11:00:00", "14:00:00", "15:00:00"];
    const filterTimes = availabletimes.filter((time) => {
        return !reservedTimes.includes(time);
    })
    // console.log(filterTimes)
    const [ timeSelected, setTimeSelected ] = useState("")
    const getTimeSelected = (e) => {
        let time = e.target.value
        setTimeSelected(time)
        sessionStorage.setItem("rdv-time", JSON.stringify(timeSelected))
    }
    // console.log(reservedTimes)
    return (
        <div className="selectTime">
            <label htmlFor="times" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Appiontement Time:</label>
            <select id="times" size="6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onClick={getTimeSelected}>
                {filterTimes.length !== 0 ? filterTimes.map((time) => {
                    return (
                        <option key={time} value={time}>{time}</option>
                    )
                }): ""}
                {/* <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option> */}
            </select>
        </div>
    )
}

export default ReserveTime
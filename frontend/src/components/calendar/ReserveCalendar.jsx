import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from 'react'
import axios from "axios"

const events = []
const eventsDisabled = []
const getEvents = () => {
    axios.get("http://mavisa.ma/rdv/getAllRdvs")
    .then(res => {
        console.log(res)
        res.data.map(element => {
            const { rdv_date, rdv_time } = element
            events.push({
                title: "rdv",
                start: `${rdv_date}`,
                display: 'background',
                backgroundColor: '#004AAD'
            })
        })
    })
}

getEvents()
// console.log(events)

const disabledDates = () => {
    axios.get("http://mavisa.ma/rdv/getReservedRdvs")
    .then(res => {
        res.data.map(item => {
            const {rdv_date, count} = item
            eventsDisabled.push(rdv_date)
        })
    })
}

disabledDates()
console.log(eventsDisabled)

// a custom render function
function renderEventContent(eventInfo) {
    return (
        <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        </>
    )
}

const ReserveCalendar = ({times,setTimes}) => {
    const [ dateSelected, setDateSelected ] = useState()
    const getDayClicked = async (e) => {
        let date = e.dateStr
        const resposne = await axios.post('http://mavisa.ma/rdv/getReservedDayTimes', date)
        .then(({data})=>{
                setTimes(data);
        })
        setDateSelected(date)
        sessionStorage.setItem("rdv-date", JSON.stringify(dateSelected))
    }
    return (
        <div>
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            weekends={false}
            events={events}
            eventContent={renderEventContent}
            selectable={true}
            dateClick={getDayClicked}
            eventDisplay="background"
            dayCellClassNames={function (day) {
                eventsDisabled.map((item) => {
                    let date = new Date(day.date);
                    let checkDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
                    console.log(item)
                    if(checkDate === item) {
                        console.log("ggg")
                        // day.classLiast.add("bg-black")
                    }
                })
            }}
            // validRange={(currentDate) => {
            //     let startDate = new Date(currentDate.valueOf());
            //     let endDate = new Date(currentDate.valueOf());
            //     startDate.setDate(startDate.getDate() - 1)
            //     endDate.setDate(endDate.getDate() + 90)
            //     return { start: startDate, end: endDate }
            // }}
            />
        </div>
    )
}

export default ReserveCalendar
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from 'react'
import axios from "axios"

const getEvents = () => {
    const events = []
    axios.get("http://mavisa.ma/rdv/getAllRdvs")
    .then(res => {
        // let i = 1
        // res.data.forEach(element => {
        //     events.push({
        //         id: i,
        //         title: "event",
        //         start: element.rdv_date + "T" + element.rdv_time,
        //         display: 'background'
        //     })
        //     i++;
        // });
        res.data.map(element => {
            const { rdv_date, rdv_time } = element
            events.push({
                title: "event",
                date: `${rdv_date}T${rdv_time}`,
                display: 'background'
            })
        })
    })
    return events
}
console.log(getEvents())

const ReserveCalendar = () => {
    const [ dateSelected, setDateSelected ] = useState("")
    const getDayClicked = (e) => {
        let date = e.dateStr
        setDateSelected(date)
        sessionStorage.setItem("rdv-date", JSON.stringify(dateSelected))
    }
    return (
        <div>
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            weekends={false}
            events={getEvents()}
            eventContent={renderEventContent}
            selectable={true}
            dateClick={getDayClicked}
            eventDisplay="background"
            validRange={(currentDate) => {
                let startDate = new Date(currentDate.valueOf());
                let endDate = new Date(currentDate.valueOf());
                startDate.setDate(startDate.getDate() - 1)
                endDate.setDate(endDate.getDate() + 90)
                return { start: startDate, end: endDate }
            }}
            />
        </div>
    )
}

// a custom render function
function renderEventContent(eventInfo) {
    return (
        <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        </>
    )
}

export default ReserveCalendar
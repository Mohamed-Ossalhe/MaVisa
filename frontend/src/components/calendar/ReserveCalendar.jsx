import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from 'react'
import axios from "axios"

const events = []
const getEvents = () => {
    axios.get("http://mavisa.ma/rdv/getAllRdvs")
    .then(res => {
        res.data.forEach(element => {
            events.push({
                start: element.rdv_date + "T" + element.rdv_time,
                display: 'background',
                overlap: false,
                color: '#257e4a'
            })
        });
    })
}
getEvents()
console.log(events)

const ReserveCalendar = () => {
    const [ dateSelected, setDateSelected ] = useState("")
    const getDayClicked = (date) => {
        setDateSelected(date.dateStr)
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
            dateClick={(e) => getDayClicked(e)}
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
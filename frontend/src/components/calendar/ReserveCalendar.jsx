import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from 'react'

const events = [
    { title: 'Meeting', start: new Date() }
]

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
            dateClick={getDayClicked}
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
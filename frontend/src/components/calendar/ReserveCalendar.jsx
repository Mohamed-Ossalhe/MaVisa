import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
    { title: 'Meeting', start: new Date() }
]

const ReserveCalendar = () => {
    return (
        <div>
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            weekends={false}
            events={events}
            eventContent={renderEventContent}
            selectable={true}
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
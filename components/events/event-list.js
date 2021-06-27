import EventItem from "./event-item";

const EventList = props => {
    return <ul className="container w-50">
        {props.events.map(event => <EventItem key={event.id} event={event} />)}
    </ul>
}

export default EventList;

import EventItem from "./event-item";

const EventList = props => {
    return <ul className="ps-0">
        {props.events.map(event => <EventItem key={event.id} event={event} />)}
    </ul>
}

export default EventList;

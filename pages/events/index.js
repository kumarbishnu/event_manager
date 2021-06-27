import {getAllEvents} from "../../dummy_data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import {useRouter} from "next/router";

const Events = () => {

    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year, month) => {
        router.push(`/events/${year}/${month}`);
    }

    return <div className="container w-50" style={{marginTop: "6rem"}}>
        <EventsSearch onSearch={findEventsHandler} />
        <EventList events={events} />
    </div>
}

export default Events;

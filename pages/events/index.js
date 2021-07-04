import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import {useRouter} from "next/router";
import {getAllEvents} from "../../helpers/api-util";

const Events = props => {

    const router = useRouter();

    const findEventsHandler = (year, month) => {
        router.push(`/events/${year}/${month}`);
    }

    return <div className="container w-50" style={{marginTop: "6rem"}}>
        <EventsSearch onSearch={findEventsHandler} />
        <EventList events={props.events} />
    </div>
}

export async function getStaticProps() {
    const events = await getAllEvents()
    return {props: {events}, revalidate: 60}
}

export default Events;

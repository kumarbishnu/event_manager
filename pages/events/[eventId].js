import {useRouter} from "next/router";
import {getEventById} from "../../dummy_data";
import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetail = () => {

    const router = useRouter();
    const event = getEventById(router.query.eventId);

    if (!event) {
        return <h2>No event found!</h2>
    }

    return <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </Fragment>

}

export default EventDetail;

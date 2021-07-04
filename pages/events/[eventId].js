import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import {getEventById, getFeaturedEvents} from "../../helpers/api-util";
import Alert from "../../components/ui/alert";

const EventDetail = props => {

    const event = props.event;

    if (!event) {
        return <Alert variant="info">Loading...</Alert>
    }

    return <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </Fragment>

}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map(e => ({params: {eventId: e.id}}));
    return {paths, fallback: 'blocking'}
}

export async function getStaticProps(context) {
    const event = await getEventById(context.params.eventId);
    return {props: {event}, revalidate: 30};
}

export default EventDetail;

import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy_data";
import EventList from "../../components/events/event-list";
import Alert from "../../components/ui/alert";

const FilteredEvent = () => {

    const router = useRouter();

    const filter = router.query.slug;
    if (!filter) {
        return <Alert variant="info">Loading...</Alert>
    }

    const year = +filter[0];
    const month = +filter[1];
    if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
        return <Alert variant="danger">Invalid URL</Alert>
    }

    const filteredEvents = getFilteredEvents({year, month});
    if (!filteredEvents || filteredEvents.length === 0) {
        return <Alert variant="danger">No events found!</Alert>
    }

    return <div className="container w-50" style={{marginTop: "6rem"}}>
        <EventList events={filteredEvents} />
    </div>

}

export default FilteredEvent;

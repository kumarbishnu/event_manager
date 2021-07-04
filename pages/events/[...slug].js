import {useRouter} from "next/router";
import {getFilteredEvents} from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import Alert from "../../components/ui/alert";

const FilteredEvent = props => {

    if (props.hasError) {
        return <Alert variant="danger">Invalid URL!</Alert>
    }

    if (!props.events || props.events.length === 0) {
        return <Alert variant="danger">No events found!</Alert>
    }

    return <div className="container w-50" style={{marginTop: "6rem"}}>
        <EventList events={props.events} />
    </div>

}

export async function getServerSideProps(context) {

    const filter = context.params.slug;

    const year = +filter[0];
    const month = +filter[1];
    if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
        return {props: {hasError: true}}
    }

    const events = await getFilteredEvents({year, month});
    return {props: {events}}
}

export default FilteredEvent;

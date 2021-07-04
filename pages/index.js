import EventList from "../components/events/event-list";
import {getFeaturedEvents} from "../helpers/api-util";

const HomePage = props => {

    return <div className="container w-50" style={{marginTop: "6rem"}}>
        <EventList events={props.events} />
    </div>

}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {props: {events: featuredEvents}, revalidate: 1800}
}

export default HomePage;

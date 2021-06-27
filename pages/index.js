import {getFeaturedEvents} from "../dummy_data";
import EventList from "../components/events/event-list";

const HomePage = () => {

    const featuredEvents = getFeaturedEvents();

    return <div style={{marginTop: "6rem"}}>
        <EventList events={featuredEvents} />
    </div>
}

export default HomePage;

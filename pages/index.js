import {getFeaturedEvents} from "../dummy_data";
import EventList from "../components/events/event-list";

const HomePage = () => {

    const featuredEvents = getFeaturedEvents();

    return <div className="container w-50" style={{marginTop: "6rem"}}>
        <EventList events={featuredEvents} />
    </div>
}

export default HomePage;

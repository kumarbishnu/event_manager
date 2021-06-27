import {getFeaturedEvents} from "../dummy_data";
import EventList from "../components/events/event-list";

const HomePage = () => {

    const featuredEvents = getFeaturedEvents();

    return <main style={{display: "grid", placeItems: "center", height: "100vh"}}>
        <EventList events={featuredEvents} />
    </main>
}

export default HomePage;

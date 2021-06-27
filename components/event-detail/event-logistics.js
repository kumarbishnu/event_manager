import styles from '../../styles/event-logistics.module.css';
import LogisticItem from "./logistic-item";
import {faCalendarAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {event} from "next/dist/build/output/log";

const EventLogistics = props => {

    const date = new Date(props.date).toLocaleDateString('en-US',
        {day: 'numeric', month: 'long', year: "numeric"});

    return <section className={`card w-50 mx-auto bg-dark shadow ${styles.eventLogistics}`}>
        <div className="card-body row p-4 align-items-center">
            <div className="col-md-5">
                <img src={`/${props.image}`} alt={props.imageAlt} />
            </div>
            <div className="col-md-7 ps-5">
                <LogisticItem icon={faCalendarAlt}>
                    <time className="fst-italic">{date}</time>
                </LogisticItem>
                <LogisticItem icon={faMapMarkerAlt}>
                    <address className="fst-italic" style={{whiteSpace: "pre"}}>{props.address.replace(', ', '\n')}</address>
                </LogisticItem>
            </div>
        </div>
    </section>

}

export default EventLogistics;

import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faLongArrowAltRight, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

const EventItem = props => {

    const {event} = props;
    const date = new Date(event.date).toLocaleDateString('en-US',
        {day: 'numeric', month: 'long', year: "numeric"});

    return <li className="card mb-4 shadow-sm">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={'/' + event.image} alt={event.title} className="img-fluid w-100" style={{height: "280px", objectFit: "cover"}} />
            </div>
            <div className="col-md-8">
                <div className="card-body p-4">
                    <h2 className="card-title mb-3">{event.title}</h2>
                    <div className="d-flex mb-2">
                        <div className="me-2 text-center" style={{width: "20px"}}><FontAwesomeIcon icon={faCalendarAlt} /></div>
                        <time className="fw-bold text-secondary">{date}</time>
                    </div>
                    <div className="d-flex">
                        <div className="me-2 text-center" style={{width: "20px"}}><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                        <address className="fst-italic" style={{whiteSpace: "pre"}}>{event.location.replace(', ', '\n')}</address>
                    </div>
                    <Link href={`/events/${event.id}`}>
                        <a className="btn btn-success px-4 mt-5 float-end">Explore Event <FontAwesomeIcon icon={faLongArrowAltRight} className="ms-2" /></a>
                    </Link>
                </div>
            </div>
        </div>
    </li>

}

export default EventItem;

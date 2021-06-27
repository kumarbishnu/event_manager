import styles from '../../styles/event-summary.module.css';

const EventSummary = props => {

    return <section className={styles.eventSummary}>
        <h1>{props.title}</h1>
    </section>

}

export default EventSummary;

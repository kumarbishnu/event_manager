import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LogisticItem = props => {

    return <div className="mb-3">
        <span><FontAwesomeIcon icon={props.icon} /></span><br/>
        <span>{props.children}</span>
    </div>

}

export default LogisticItem;

const Alert = props => {

    return <div className="container w-50" style={{marginTop: "6rem"}}>
        <div className={`alert alert-${props.variant}`}>
            {props.children}
        </div>
    </div>

}

export default Alert;

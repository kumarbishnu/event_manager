import {useRef} from "react";

const EventsSearch = props => {

    const yearRef = useRef();
    const monthRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const year = yearRef.current.value;
        const month = monthRef.current.value;

        props.onSearch(year, month);
    }

    return <form className="card shadow-sm mb-4" onSubmit={submitHandler}>
        <div className="card-body row align-items-center">
            <label htmlFor="year" className="form-label col-auto mb-0">Year</label>
            <select name="year" id="year" className="form-select col" ref={yearRef}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
            <label htmlFor="month" className="form-label col-auto mb-0">Month</label>
            <select name="month" id="month" className="form-select col" ref={monthRef}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
            <div className="col-auto">
                <button type="submit" className="btn btn-success px-4">Find Events</button>
            </div>
        </div>
    </form>

}

export default EventsSearch;

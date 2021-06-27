import Link from "next/link";

const MainHeader = props => {

    return <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container">
            <a href="/" className="navbar-brand">Event Manager</a>
            <ul className="navbar-nav">
                <li className="nav-item"><Link href="/events"><a className="nav-link">Browse All Events</a></Link></li>
            </ul>
        </div>
    </nav>

}

export default MainHeader;

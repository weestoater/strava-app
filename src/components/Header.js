import React from 'react';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="http://www.ianburrett.co.uk">ianburrett</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"  aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><a className="nav-link" href="/">Strava</a></li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-info my-2 my-sm-0" type="submit"><i className="fa fa-search" /></button>
                    </form>
                </div>
            </nav>
        </>
    );    
}
import React from "react";
import {Link} from "react-router-dom"; //To use the Link component, you need to import it from react-router-dom

function Footer(props) {
    return(
        <footer className="site-footer"> {/*This footer element is a JSX attribute. It will be displayed in the website as a footer component.*/}
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li> {/*By using the Link element, we ensures that each of this links will go through the React Router Library*/}
                            <li><Link to="/directory">Directory</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"/></a>{" "} {/*This curly brace at the end means a JavaScript expression has been used. This {" "} provides spacing between the buttons in the footer.*/}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook"/></a>{" "} {/*This {" "} provides spacing between the buttons in the footer.*/}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"/></a>{" "}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"/></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" />1-206-555-1234</a><br /> {/*JSX allows self ending tags, an example is <i/>, if there is no information between the tags.*/}
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" />campsites@nucamp.co</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
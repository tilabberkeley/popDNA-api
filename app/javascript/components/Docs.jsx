import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from "react-router-dom"
// import { Foundation } from 'foundation-sites/js/foundation.core'
// import { Accordiion } from 'foundation-sites/js/foundation.accordion'
require('/node_modules/foundation-sites/dist/js/plugins/foundation.core.js')
require('/node_modules/foundation-sites/dist/js/plugins/foundation.accordion.js')
// import { Foundation } from 'foundation-sites';

const Docs = () => {
    return (
        <div>
            <Navbar tab="docs"/>
            <ul className="accordion" data-accordion data-allow-all-closed="true">
                <li className="accordion-item is-active" data-accordion-item>
                    <Link to="#" className="accordion-title">Accordion 1</Link>

                    <div className="accordion-content" data-tab-content>
                    <p>Panel 1. Lorem ipsum dolor</p>
                    <Link to="#">Nowhere to Go</Link>
                    </div>
                </li>

            </ul>
            <ul className="accordion" data-accordion data-allow-all-closed="true">
                <li className="accordion-item is-active" data-accordion-item>
                    <Link to="#" className="accordion-title">Accordion 1</Link>

                    <div className="accordion-content" data-tab-content>
                    <p>Panel 1. Lorem ipsum dolor</p>
                    <Link to="#">Nowhere to Go</Link>
                    </div>
                </li>

            </ul>
        <Footer/>
        </div>
    )
}

export default Docs

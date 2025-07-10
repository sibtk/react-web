import React from "react";
import { Link } from "react-router-dom";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <Link to="/projects/rtoc-reporting">
                    <img src={mock01} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>RTOC Reporting Automation</h2>
                </Link>
                <p>Streamlined upstream reporting across RTOC teams using Power BI and SharePoint. Reduced prep time by 80%.</p>
            </div>
            <div className="project">
                <Link to="/projects/real-estate-roi">
                    <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Real Estate ROI Dashboard</h2>
                </Link>
                <p>Built an internal tool in Retool to score comps, filter listings, and flag high-ROI opportunities.</p>
            </div>
            <div className="project">
                <Link to="/projects/sku-strategy-tracker">
                    <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>SKU Strategy Tracker</h2>
                </Link>
                <p>Designed Power BI dashboard for SKU margins and vendor consolidation. Supported 12% QoQ margin growth.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
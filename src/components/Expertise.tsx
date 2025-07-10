import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCogs, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Power BI",
    "Retool",
    "React",
    "SharePoint",
    "Excel",
    "Figma",
    "Lucidchart"
];

const labelsSecond = [
    "Monday.com",
    "Notion",
    "Zapier",
    "SQL",
    "Google Workspace",
    "Slack",
    "AI Tools"
];

const labelsThird = [
    "Documentation Systems",
    "SOP Design",
    "Stakeholder Dashboards",
    "User Research",
    "Product Briefs",
    "Low-code Tools"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Internal Tools & Dashboards</h3>
                    <p>
                        I build internal tools and dashboards using low-code platforms and BI tools to support decision-making and team visibility.
                    </p>
                    <div className="flex-chips">
                        <div className="chip-group">
                            <span className="chip-title">Core Tools:</span>
                            {["Power BI", "Retool", "Excel", "SharePoint", "React"].map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                        <div className="chip-group">
                            <span className="chip-title">Design Tools:</span>
                            {["Figma", "Lucidchart"].map((label, index) => (
                                <Chip key={index + 10} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x"/>
                    <h3>Workflow Automation & Systems Ops</h3>
                    <p>
                        I streamline operations by building workflow automations and backend integrations that cut manual effort and improve accuracy.
                    </p>
                    <div className="flex-chips">
                        <div className="chip-group">
                            <span className="chip-title">Ops Tools:</span>
                            {["Monday.com", "Zapier", "Notion", "Google Workspace"].map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                        <div className="chip-group">
                            <span className="chip-title">Integrations:</span>
                            {["SQL", "APIs", "SharePoint"].map((label, index) => (
                                <Chip key={index + 10} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLightbulb} size="3x"/>
                    <h3>Product Strategy & Enablement</h3>
                    <p>
                        I support product decisions through data-backed strategy, documentation, and UX enablement to align stakeholders and solve root issues.
                    </p>
                    <div className="flex-chips">
                        <div className="chip-group">
                            <span className="chip-title">Enablement Tools:</span>
                            {["Notion", "Lucidchart", "Confluence"].map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                        <div className="chip-group">
                            <span className="chip-title">Methods:</span>
                            {["SOP Design", "User Research", "Stakeholder Dashboards", "Product Briefs"].map((label, index) => (
                                <Chip key={index + 10} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
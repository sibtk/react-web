import React, { useEffect, useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  const [isLightMode, setIsLightMode] = useState(false);
  useEffect(() => {
    const mainContainer = document.querySelector('.main-container');
    const checkMode = () => {
      if (mainContainer) {
        setIsLightMode(mainContainer.classList.contains('light-mode'));
      } else {
        setIsLightMode(false); // fallback to dark
      }
    };
    checkMode();
    let observer: MutationObserver | null = null;
    if (mainContainer) {
      observer = new MutationObserver(checkMode);
      observer.observe(mainContainer, { attributes: true, attributeFilter: ['class'] });
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const contentStyle = isLightMode
    ? { background: 'linear-gradient(135deg, #23244a 0%, #181c24 100%)', color: '#fff', border: '1.5px solid #23244a', boxShadow: '0 2px 12px rgba(106,90,205,0.10)' }
    : { background: 'linear-gradient(135deg, #f8f9faee 0%, #e6e6faee 100%)', color: '#23244a', border: '1.5px solid #d1d1e0', boxShadow: '0 2px 12px rgba(106,90,205,0.10)' };
  const contentArrowStyle = isLightMode
    ? { borderRight: '7px solid #23244a' }
    : { borderRight: '7px solid #f8f9faee' };

  return (
    <div id="history">
      <div className="items-container timeline-card" style={{ paddingBottom: '120px' }}>
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="June 2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Product Associate – Internal Tools</h3>
            <h4 className="vertical-timeline-element-subtitle">Aquila Engineering, Houston, TX</h4>
            <p>
              Transitioned from Product Intern after Summer 2025. Automated upstream reporting (−80% prep time), built BOP dashboards (−30% issue response time), and integrated Monday.com workflows with SharePoint to support IT and field ops.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="Jan 2025 – June 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Product Strategy Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">TechMecca (Lumeria), Richmond, TX</h4>
            <p>
              Built SKU dashboards to track 1,200+ products, designed Figma mockups, ran pricing and churn analysis, and supported vendor consolidation strategy projected to save 8%.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="March 2024 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Real Estate Agent / Strategy Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Texas Real Estate Commission, Houston, TX</h4>
            <p>
              Closed $1.89M in residential sales, advised on $6.5M+ in active inventory, built ROI dashboards and lead workflows, and reduced agent response time by 60%.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
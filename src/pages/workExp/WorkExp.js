import React from "react";
import { MdWorkOutline } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="March 2026 – Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                Data Analyst Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Tide Platform Limited (Fintech – Transaction Monitoring & Fraud Detection)
              </h4>
              <p>
                • Write and optimize complex SQL queries on Google BigQuery to
                build transaction monitoring Baseline rules for fraud
                detection across business accounts.
              </p>
              <p>
                • Developed Baseline rules to flag suspicious financial
                behaviour, such as disproportionate cumulative debit volumes
                and anomalous spikes in single-day highest debit amounts.
              </p>
              <p>
                • Built rolling-window aggregation logic using BigQuery window
                functions (PARTITION BY, RANGE BETWEEN, DENSE_RANK) and UNIX
                date arithmetic for 5-day, 10-day, and 25-day lookback
                periods.
              </p>
              <p>
                • Worked with a multi-table schema (business, account,
                transaction) joined across unique identifiers to isolate
                genuine suspicious activity for accurate fraud signals.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;

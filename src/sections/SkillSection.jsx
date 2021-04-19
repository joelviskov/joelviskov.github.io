import React from "react"
import Section from "../components/Section"
import { Element } from 'react-scroll'

const SkillSection = () => {
  return (
    <Element name="skills">
      <Section title="Skills" className="skill-section">
        <div className="grid-container">
          <div className="grid-item">
            <h4>Frontend</h4>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>React Native</li>
              <li>SASS</li>
            </ul>
          </div>

          <div className="grid-item">
            <h4>Backend</h4>
            <ul>
              <li>.NET Core</li>
              <li>.NET Framework</li>
              <li>ASP.NET Web Forms</li>
              <li>Entity Framework</li>
              <li>NodeJS</li>
              <li>Python</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="grid-item">
            <h4>DevOps</h4>
            <ul>
              <li>Octopus</li>
              <li>TeamCity</li>
              <li>Github Actions</li>
              <li>Docker</li>
              <li>Sentry</li>
              <li>Splunk</li>
              <li>Selenium</li>
            </ul>
          </div>
        </div>
      </Section>
    </Element>
  )
}

export default SkillSection
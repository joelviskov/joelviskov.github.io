import React from "react"
import Section from "../components/Section"
import { Element } from 'react-scroll'

const ExperienceSection = () => {
  return (
    <Element name="experience">
      <Section title="Experience" className="experience-section">
        <h4>Work experience</h4>
        <ul>
          <li>Apr 2019-? - Helmes AS (Software Developer)</li>
        </ul>
        <br />
        <h4>School experience</h4>
        <ul>
          <li>2018-2022 - TalTech Univesity (Business Information Technology)</li>
          <li>2002-2016 - Tõrva Gymnasium</li>
        </ul>
      </Section>
    </Element>
  )
}

export default ExperienceSection
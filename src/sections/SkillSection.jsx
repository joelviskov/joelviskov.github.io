import React from "react"
import Section from "../components/Section"
import { Element } from 'react-scroll'

const SkillSection = () => {
  return (
    <Element name="skills">
      <Section title="Skills" className="skill-section">
        <div className="grid-container">
          <div className="grid-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra, lorem nec ullamcorper luctus, urna ipsum mollis neque, a fringilla quam eros nec erat. Integer imperdiet sem blandit nunc porttitor euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nibh tellus, porta eget leo eget, dignissim dapibus magna. Sed molestie ornare quam. Sed et justo leo. Integer in ipsum quis mauris vehicula interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </div>
          <div className="grid-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dui eget orci eleifend rhoncus pellentesque ut augue. In maximus pharetra mi, non fringilla nisi vehicula a. Pellentesque facilisis bibendum nulla sit amet tincidunt. Suspendisse potenti. Sed ac sapien aliquam, dictum risus non, elementum orci. Nunc quis gravida quam. Vestibulum ac orci id dolor efficitur egestas.
        </div>
        </div>
      </Section>
    </Element>
  )
}

export default SkillSection
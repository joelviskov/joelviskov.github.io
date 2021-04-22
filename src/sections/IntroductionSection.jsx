import Section from "../components/Section"
import { Element } from 'react-scroll'

const IntroductionSection = () => {
  return (
    <Element name="introduction">
      <Section title="Introduction" className="introduction-section">
        <p>
          Computers have been central to me my whole life. From the age of young child, I have always been glued to the front of the screen - initially only video games, then computers and technology in general.
          By the age of 12 I knew enough to build my first computer. Around that time I also had my first experience with programming world, building simple games with GameMaker (game engine) and JavaScript.
          At the time those were only small projects with on-and-off interests, often quickly abandoned.
          But it was enough to know I couldn't imagine myself doing anything else, and this is what I loved the most.
        </p>

        <p>
          Currently my team is responsible for the development of business-critical systems in one of the largest telecommunication companies in Scandinavia.
          I'm showing high interest in DevOps world, automating CI/CD pipelines and ensuring high quality of code with less work and faster development cycle.
          I have taken the responsibility of ensuring smooth deliveries, mentoring team members on good practises and setting up monitoring of staging and production environments.
          Team members characterize me as very quick learner and not afraid to pick up any challenge. Numerous times I have been assigned a task on unfamiliar project and
          I've found easy to figure everything out, and I think it even provides me excitement to see new systems and learn from them.
          Over time I have done numerous demos to clients, and application demo to a audience of ~50 people.
        </p>

        <p>
          Technologies that I use daily are .NET 5.0 and React + TypeScript, but I also have some knowledge of mobile development using React Native and Expo.
          On hobby projects I try to use something different, like NodeJS for backend and Python for smaller programs like webcrawlers.
          As a DevOps enthusiast, I have been trying to dive further into the topic of security, release management and quality control.
          I have had the pleasure of migrating old pipelines and replacing them with new ones, and adding new automated functionalities to ensure less manual work is required from everyone.
        </p>
      </Section>
    </Element>
  )
}

export default IntroductionSection
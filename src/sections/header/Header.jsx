import Container from "../../components/Container"
import { FaLinkedin, FaGithubAlt } from 'react-icons/fa';
import SocialMediaLink from "./SocialMediaLink";
import SectionLink from "./SectionLink";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="grid-container">
          <div className="grid-item">
            <ul className="section-links">
              <SectionLink to="introduction">
                Introduction
              </SectionLink>
              <SectionLink to="skills">
                Skills
              </SectionLink>
            </ul>
          </div>
          
          <div className="grid-item">
            <ul>
              <SocialMediaLink link="https://www.linkedin.com/in/joel-viskov/">
                <FaLinkedin />
              </SocialMediaLink>
              <SocialMediaLink link="https://github.com/joelviskov">
                <FaGithubAlt />
              </SocialMediaLink>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
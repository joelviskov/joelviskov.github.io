import React from "react"
import Container from "../components/Container"
import { FaStar, FaGripLines } from 'react-icons/fa'

const PortraitSection = () => {
  return (
    <Container className="portrait-section">
      <div className="items">
        <div>
          <img alt="Portrait of Joel" className="portrait" />
        </div>
        <div>
          <h1 className="name">
          <FaGripLines /><FaStar /> Joel Viskov <FaStar /><FaGripLines />
          </h1>
        </div>
      </div>
    </Container>
  )
}

export default PortraitSection
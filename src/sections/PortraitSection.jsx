import React from "react"
import Container from "../components/Container"

const PortraitSection = () => {
  return (
    <Container className="portrait-section">
      <div className="items">
        <div>
          <img alt="Portrait of Joel" className="portrait" src="portrait.png" />
        </div>
        <div>
          <h1 className="name">Joel Viskov</h1>
          <h3>Software Developer at Helmes</h3>
          <h3>Business IT Student at TalTech</h3>
        </div>
      </div>
    </Container>
  )
}

export default PortraitSection
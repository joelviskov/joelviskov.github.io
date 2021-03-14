import Container from "./Container"

const Section = ({ title, children, ...props }) => {
  return (
    <Container {...props}>
      <div className="section">
        <div className="section-header">
          <h2>{title}</h2>
        </div>
        <div>
          {children}
        </div>
      </div>
    </Container>
  )
}

export default Section
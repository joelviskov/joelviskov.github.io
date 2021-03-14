const SocialMediaLink = ({ children, link }) => {
  return (
    <li className="social-media center">
      <a href={link} target="_blank" rel="noreferrer">{children}</a>
    </li>
  )
}

export default SocialMediaLink
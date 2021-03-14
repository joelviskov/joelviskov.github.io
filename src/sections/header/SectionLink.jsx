import React from "react";
import { Link } from "react-scroll";

const SectionLink = ({ to, children }) => (
  <li className="center">
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-50}
    >
      {children}
    </Link>
  </li>
)

export default SectionLink
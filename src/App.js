import React from 'react';
import { FaLinkedin, FaGithubAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons'
import './index.scss'

const App = () => {
  return (
    <IconContext.Provider value={{ size: '5em', className: 'react-icons' }}>
      <div className='wrapper'>
        <p className='icons'>
          <FaGithubAlt onClick={() => window.open("https://github.com/joelviskov", "_blank")} />
          <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/joel-viskov", "_blank")} />
          <MdEmail onClick={() => window.open("mailto:joelviskov@gmail.com", "_blank")} />
        </p>
      </div >
    </IconContext.Provider>

  );
}


export default App;

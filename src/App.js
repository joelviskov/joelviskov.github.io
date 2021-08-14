import React from 'react';
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons'
import './index.scss'

const App = () => {
  return (
    <IconContext.Provider value={{ size: '5em', className: 'react-icons' }}>
      <img src="graphics.gif" alt="graphics" className="illustration" />
      <div className='wrapper'>
        <div className='content'>
          <div>
            <h1 className="name">Joel Viskov</h1>
            <h2>Software Engineer | DevOps</h2>
          </div>

          <div>
            <FaGithubSquare color={'#050C04'} onClick={() => window.open("https://github.com/joelviskov", "_blank")} />
            <FaLinkedin color={'#0E76A8'} onClick={() => window.open("https://www.linkedin.com/in/joel-viskov", "_blank")} />
            <FaEnvelope color={'#EE442B'} onClick={() => window.open("mailto:joelviskov@gmail.com", "_blank")} />
          </div>


        </div>
      </div >
      <footer>
        <small><a href="https://icons8.com">Illustration by Icon8</a></small>
      </footer>
    </IconContext.Provider >

  );
}


export default App;

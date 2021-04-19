import React from 'react';
import './styles/index.scss';
import Portrait from './sections/PortraitSection';
import SkillSection from './sections/SkillSection';
import ExperienceSection from './sections/ExperienceSection';
import Header from './sections/header/Header';
import IntroductionSection from './sections/IntroductionSection';

const App = () => {
  return (
    <div>
      <Header />

      <Portrait />

      <div className="content">
        <IntroductionSection />
        <ExperienceSection />
        <SkillSection />
      </div>

    </div >
  );
}

export default App;

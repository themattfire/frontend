import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData('http://localhost:3000/data').then(setData);
  }, []);

  return (
    <>
      <Header avatar={data.avatar} name={data.name}>
        <About
          profession={data.profession}
          address={data.address}
          email={data.email}
          website={data.website}
          phone={data.phone}
        />
      </Header>
      <Profile prof={data.profile} />
      <Experience experience={data.experience} projects={data.projects} />
      <div className='habs__container'>
        <Academic academic={data.academic} certificate={data.certificate} />
        <Skills softskills={data.softskills} hardskills={data.hardskills} />
      </div>
      <div className='int__container'>
        <Interest interest={data.interest} />
        <Languages languages={data.languages} />
      </div>
    </>
  );
};

export default App;

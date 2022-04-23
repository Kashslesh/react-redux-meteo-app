import React from 'react';
import classes from './App.module.css';
import Layout from './Components/Layout/Layout';
import SectionsSearch from './Components/Sections/SectionsSearch';
import SectionsCardMeteo from './Components/Sections/SectionsCardMeteo';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <SectionsSearch />
        <SectionsCardMeteo />
      </Layout>
    </div>
  );
}

export default App;

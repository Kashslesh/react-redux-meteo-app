import React from 'react';
import Form from '../Form/Form';
import Items from '../Items/Items';
import classes from './SectionsSearch.module.css';
const SectionsSearch = (props) => {
  return (
    <section className={classes.SectionsSearch}>
      <Form />
      <Items />
    </section>
  );
};
export default React.memo(SectionsSearch);

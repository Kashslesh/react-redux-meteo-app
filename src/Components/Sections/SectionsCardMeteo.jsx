import MeteoRequest from '../Form/MeteoRequest';
import classes from './SectionsCardMeteo.module.css';

const SectionsCardMeteo = () => {
  return (
    <section className={classes.sectiondCard}>
      <MeteoRequest />
    </section>
  );
};
export default SectionsCardMeteo;

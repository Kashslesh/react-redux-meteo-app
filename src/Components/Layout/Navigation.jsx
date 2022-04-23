import classes from './Navigation.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudSunRain} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faInfo} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
const Navigation = () => {
  return (
    <header>
      <nav className={classes}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCloudSunRain} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInfo} />
          </li>
          <li>
            <FontAwesomeIcon icon={faList} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;

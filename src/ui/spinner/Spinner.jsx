import styles from './spinner.module.css';
import Icon from '../../components/icon/Icon';

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        <Icon name='loading' />
      </div>
    </div>
  );
}

export default Spinner;

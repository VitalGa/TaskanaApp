import styles from './spinner.module.css';
import { Icon } from '@/components';

export function Spinner() {
  return (
    <div className={`${styles.spinnerContainer} flex items-center justify-center`}>
      <div className={`${styles.spinner} flex items-center justify-center`}>
        <Icon name='loading' />
      </div>
    </div>
  );
}

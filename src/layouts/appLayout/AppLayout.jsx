import styles from './appLayout.module.css';
import { Header } from '@/components';
import { Content } from '@/layouts';

export function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Header className={styles.header} />
      <Content className={styles.content} />
    </div>
  );
}

import styles from './appLayout.module.css';
import { Header } from '@/components';
import { Content } from '@/layouts';

const AppLayout = () => {
  return (
    <div className={`${styles.appLayout} `}>
      <Header />
      <Content />
    </div>
  );
};

export default AppLayout;

import styles from './appLayout.module.css';
import Header from '@/components/header/Header';
import Content from '@/layouts/content/Content';

const AppLayout = () => {
  return (
    <div className={`${styles.appLayout} `}>
      <Header />
      <Content />
    </div>
  );
};

export default AppLayout;

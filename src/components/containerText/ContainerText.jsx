import styles from './containerText.module.css';

const ContainerText = () => {
  return (
    <div className={`${styles.containerText} flex flex-col gap-4`}>
      <h2 className='heading-h2'>Все твои задачи организованы как надо</h2>
      <p className='text-lg-regular'>Отличная работа! Ты большой молодец!</p>
    </div>
  );
};

export default ContainerText;

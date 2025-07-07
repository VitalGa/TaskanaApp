import styles from './containerText.module.css';

function ContainerText() {
  return (
    <div className={`${styles.containerText} flex flex-col gap-16`}>
      <p className={`heading-h2`}>Все твои задачи организованы как надо</p>
      <p className={`text-lg-regular`}>Отличная работа! Ты&nbsp;большой молодец!</p>
    </div>
  );
}

export default ContainerText;

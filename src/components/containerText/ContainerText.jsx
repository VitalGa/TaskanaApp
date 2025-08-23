import styles from './containerText.module.css';

function ContainerText() {
  return (
    <div className={`${styles.containerText} flex flex-col gap-16`}>
      <p className={`${styles.heading} heading-h2`}>Все твои задачи организованы как надо</p>
      <p className={`${styles.text} text-lg-regular`}>Отличная работа! Ты&nbsp;большой молодец!</p>
    </div>
  );
}

export default ContainerText;

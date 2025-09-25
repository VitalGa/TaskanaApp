import styles from './containerHeader.module.css';

export function ContainerHeader() {
  return (
    <div className={`${styles.containerHeader} flex justify-between items-center`}>
      <h1 className='heading-h1'>Входящие</h1>
    </div>
  );
}

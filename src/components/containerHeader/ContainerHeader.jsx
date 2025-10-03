import styles from './containerHeader.module.css';
import { Dropdown } from '@/components/dropdown';

export function ContainerHeader({ sortBy, onSortChange, sortOptions }) {
  return (
    <div className={`${styles.containerHeader} flex justify-between items-center`}>
      <h1 className='heading-h1'>Входящие</h1>

      <Dropdown
        options={sortOptions}
        value={sortBy}
        onChange={(val) => {
          onSortChange(val);
          console.log('Сортировка:', val);
        }}
      />
    </div>
  );
}

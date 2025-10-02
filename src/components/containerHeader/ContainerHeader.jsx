import styles from './containerHeader.module.css';
import { Dropdown } from '@/components/dropdown';

export function ContainerHeader() {
  return (
    <div className={`${styles.containerHeader} flex justify-between items-center`}>
      <h1 className='heading-h1'>Входящие</h1>
      <Dropdown
        defaultValue={{ value: 'createdAtDesc', label: 'Дата создания ↓', icon: 'createdAtDesc' }}
        options={[
          { value: 'priorityDesc', label: 'Приоритет ↓', icon: 'priorityDesc' },
          { value: 'priorityAsc', label: 'Приоритет ↑', icon: 'priorityAsc' },
          { value: 'alphaDesc', label: 'Алфавит ↓', icon: 'alphabeticalDesc' },
          { value: 'alphaAsc', label: 'Алфавит ↑', icon: 'alphabeticalAsc' },
          { value: 'createdAtDesc', label: 'Дата создания ↓', icon: 'createdAtDesc' },
          { value: 'createdAtAsc', label: 'Дата создания ↑', icon: 'createdAtAsc' },
          { value: 'updatedAtDesc', label: 'Дата обновления ↓', icon: 'updatedAtDesc' },
          { value: 'updatedAtAsc', label: 'Дата обновления ↑', icon: 'updatedAtAsc' },
        ]}
        onSortChange={(val) => console.log('Сортировка:', val)}
      />
    </div>
  );
}

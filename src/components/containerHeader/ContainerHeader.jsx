import { useState } from 'react';
import styles from './containerHeader.module.css';
import { Dropdown } from '@/components/dropdown';
import { sortOptions } from '@/components/data/sortOptions';

export function ContainerHeader() {
  const [sort, setSort] = useState('createdAtDesc');

  const options = sortOptions;
  /*   { value: 'priorityDesc', label: 'Приоритету', icon: 'priorityDesc' },
    { value: 'priorityAsc', label: 'Приоритету', icon: 'priorityAsc' },
    { value: 'alphaDesc', label: 'Алфавиту', icon: 'alphabeticalDesc' },
    { value: 'alphaAsc', label: 'Алфавиту', icon: 'alphabeticalAsc' },
    { value: 'createdAtDesc', label: 'Дате создания', icon: 'createdAtDesc' },
    { value: 'createdAtAsc', label: 'Дате создания', icon: 'createdAtAsc' },
    { value: 'updatedAtDesc', label: 'Дате обновления', icon: 'updatedAtDesc' },
    { value: 'updatedAtAsc', label: 'Дате обновления', icon: 'updatedAtAsc' },
  ]; */

  return (
    <div className={`${styles.containerHeader} flex justify-between items-center`}>
      <h1 className='heading-h1'>Входящие</h1>

      <Dropdown
        options={options}
        value={sort}
        onChange={(val) => {
          setSort(val);
          console.log('Сортировка:', val);
        }}
      />
    </div>
  );
}

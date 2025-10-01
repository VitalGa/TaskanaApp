import styles from './header.module.css';
import { useState } from 'react';
import { Logo, Icon, ThemeSwitcher } from '@/components';
import { Button } from '@/ui';
import { useTaskEditor } from '@/context/TaskEditorContext';

export function Header({ className = '' }) {
  const [isLoading] = useState(false);
  const { openTaskEditor, isTaskEditorOpen } = useTaskEditor();

  // TODO: remove this after testing
  // const handleClick = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // };

  return (
    <header className={`${styles.header} ${className} flex justify-between`}>
      <Logo className={styles.logo} />
      <div className={`flex gap-24`}>
        <Button
          loading={isLoading}
          variant='primary'
          size='medium'
          className='text-md-semibold'
          gap='8'
          ariaLabel='Создать новую задачу'
          disabled={isTaskEditorOpen}
          onClick={() => {
            // handleClick();
            openTaskEditor();
          }}>
          <Icon name='plus' width={24} height={24} />
          Создать
        </Button>

        <ThemeSwitcher />
      </div>
    </header>
  );
}

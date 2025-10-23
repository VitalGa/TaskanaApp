import styles from './header.module.css';
import { useState } from 'react';
import { Logo, Icon, ThemeSwitcher } from '@/components';
import { Button } from '@/ui';
import { useTaskEditor } from '@/context/TaskEditorContext';

export function Header({ className = '' }) {
  const [isLoading] = useState(false);
  const { openTaskEditor, isTaskEditorOpen, editorMode } = useTaskEditor();

  return (
    <header className={`${styles.header} ${className} flex justify-between`}>
      <Logo className={styles.logo} />
      <div className={`flex gap-24`}>
        <Button
          loading={isLoading}
          variant='primary'
          size='medium'
          className='text-md-semibold header-button-create'
          gap='8'
          ariaLabel='Создать новую задачу'
          onClick={() => {
            if (!isTaskEditorOpen || editorMode === 'edit') {
              openTaskEditor();
            }
          }}>
          <Icon name='plus' width={24} height={24} />
          Создать
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

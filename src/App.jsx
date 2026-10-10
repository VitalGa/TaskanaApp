import { AppLayout } from '@/layouts';
import { TaskProvider } from '@/context/TaskContext';
import { TaskEditorProvider } from '@/context/TaskEditorContext';
import { ThemeProvider } from '@/context';

export function App() {
  return (
    <ThemeProvider>
      <TaskEditorProvider>
        <TaskProvider>
          <AppLayout />
        </TaskProvider>
      </TaskEditorProvider>
    </ThemeProvider>
  );
}

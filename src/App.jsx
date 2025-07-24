import AppLayout from '@/layouts/appLayout/AppLayout';
import { TaskProvider } from '@/context/TaskContext';
import { TaskEditorProvider } from '@/context/TaskEditorContext';
import { ThemeProvider } from '@/context';

function App() {
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

export default App;

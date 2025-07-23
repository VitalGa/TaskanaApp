import AppLayout from '@/layouts/appLayout/AppLayout';
import { TaskProvider } from '@/context/TaskContext';
import { TaskEditorProvider } from '@/context/TaskEditorContext';

function App() {
  return (
    <TaskEditorProvider>
      <TaskProvider>
        <AppLayout />
      </TaskProvider>
    </TaskEditorProvider>
  );
}

export default App;

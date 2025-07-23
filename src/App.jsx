import AppLayout from '@/layouts/appLayout/AppLayout';
import { TaskProvider } from '@/context';

function App() {
  return (
    <TaskProvider>
      <AppLayout />
    </TaskProvider>
  );
}

export default App;

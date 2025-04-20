import './App.css';
import './assets/global.css';
import './assets/typography.css';
import AppLayout from '@/layouts/appLayout/AppLayout';
import Content from '@/layouts/content/Content';

function App() {
  return (
    <AppLayout>
      <Content />
    </AppLayout>
  );
}

export default App;

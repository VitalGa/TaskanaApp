import './App.css';
import './assets/global.css';
import './assets/typography.css';
import AppLayout from '@/layouts/appLayout/AppLayout';
import IncomingTasks from '@/pages/incomingTasks/IncomingTasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<IncomingTasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

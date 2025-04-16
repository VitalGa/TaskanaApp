import TaskList from '@/components/taskList/TaskList';

const MainContainer = () => {
  return (
    <div className='main-container'>
      <h1>Входящие задачи</h1>
      <TaskList />
    </div>
  );
};

export default MainContainer;

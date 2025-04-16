import MainContainer from '@/containers/mainContainer/MainContainer';
import Footer from '@/components/footer/Footer';

const IncomingTasks = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <main>
        <MainContainer />
      </main>
      <Footer />
    </div>
  );
};

export default IncomingTasks;

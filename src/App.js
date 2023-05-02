
import './App.css';
import Header from './component/Header';
import FeedbackList from './component/FeedbackList';
import FeedbackStats from './component/FeedbackStats';
import FeedbackForm from './component/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';
function App() {


  return (
    <>
    <FeedbackProvider> 
        <Header/>
    <FeedbackForm />
    <FeedbackStats/>
    <FeedbackList />
    </FeedbackProvider>
 
    </>
  );
}

export default App;

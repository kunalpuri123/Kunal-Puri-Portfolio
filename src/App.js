import Main from './components/Main';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import BackgroundView from './Layout/BackgroundView';
import LeetCodeProfile from './components/Leetcode';
import { Skills } from './components/Skills';


function App() {

  return (
    <BackgroundView>
      <div className='font-poppins select-none text-white bg-black dark:bg-black dark:text-white  transition duration-500'>
        <Navbar />
        <Main />
        <Skills/>
        <Projects />
        <LeetCodeProfile/>
     
        <Experiences />
        <Contact />
   
      </div>
    </BackgroundView>
  )
}

export default App
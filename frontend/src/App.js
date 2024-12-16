import './App.css';
import '../src/styles/style.css';
import AnnouncementCard from './components/Announcements';   
import Biographie from './components/Biographie'; 
import MajestyCard from './components/Hero'; 
import MarqueeSection from './components/Marquee';
import ProgramCard from './components/Program';
import TestimonialSection from './components/Testimonials'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MajestyCard/>
        <AnnouncementCard/>  
        <ProgramCard/>  
        <TestimonialSection/> 
        <Biographie/>
        <MarqueeSection/>
      </header>
    </div>
  );
}

export default App;

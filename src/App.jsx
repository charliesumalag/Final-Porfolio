import Nav from './components/Nav'
import WorkExpSec from './components/WorkExpSec'
import HeroSec from './components/HeroSec'
import ContactSec from './components/ContactSec'
import ProjectSec from "./components/ProjectSec";

const App = () => {
  return (
    <div className='bg-[#FFFFFF] leading-[1.7em] text-black font-openSans'>
      <div className='max-w-[800px] mx-auto'>
        <Nav />
        <HeroSec />
        <WorkExpSec />
        <ProjectSec />
        <ContactSec />
      </div>
    </div>
  )
}

export default App

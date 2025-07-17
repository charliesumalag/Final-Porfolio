import Nav from './components/Nav'
import WorkExpSec from './components/WorkExpSec'
import HeroSec from './components/HeroSec'
import ContactSec from './components/ContactSec'
import ProjectSec from "./components/ProjectSec";
import CertificateSec from "./components/CertificateSec";

const App = () => {
  return (
    <div className='bg-[#FFFFFF] leading-[1.7em] text-black font-openSans'>
      <div className='max-w-[800px] mx-auto'>
        <Nav />
        <HeroSec />
        <WorkExpSec />
        <ProjectSec />
        <CertificateSec />
        <hr className="mt-12 border-gray-300" />
        <ContactSec />
      </div>
    </div>
  )
}

export default App

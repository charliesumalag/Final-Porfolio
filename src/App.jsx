import Nav from './components/Nav'
import Hero from './components/Hero'

import TeackStack from "./components/TeckStack";

const App = () => {

  return (
    <div className='bg-[#0C0F11] text-[#FFFFFF]'>
      <div className='max-w-[750px] mx-auto'>
        <section id='home' className=''>
          <Nav />
          <Hero />

          <div className='my-22'>
            <h3 className='font-bold text-lg'>TECH STACK</h3>
            <div className='flex gap-6  flex-wrap mt-8'>
              <TeackStack icon='fa-brands fa-react' text='React' color='#61DAFB' />
              <TeackStack icon='fa-brands fa-js' text='JavaScript' color='#F7DF1E'  />
              <TeackStack icon='fa-brands fa-html5' text='HTML' color='#E44D26'  />
              <TeackStack icon='fa-brands fa-css3' text='CSS' color='#1172B8'  />
              <TeackStack icon='fa-brands fa-php' text='PHP' color='#7377AD'  />
              <TeackStack icon='fa-brands fa-laravel' text='Laravel' color='#ED2E03'  />
              <TeackStack icon='fa-solid fa-database' text='MySQL' color='#4689B2'  />
            </div>
          </div>
        </section>
        <section id='projects' className='min-h-screen'>Projects</section>
        <section id='contact' className='min-h-screen'>Contact</section>
      </div>
    </div>
  )
}

export default App

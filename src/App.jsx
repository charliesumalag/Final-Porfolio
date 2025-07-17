import Nav from './components/Nav'
import Hero from './components/Hero'
import Title from "./components/Title";
import google from "./assets/img/googlelogo.jpg";

import TeackStack from "./components/TeckStack";

const App = () => {

  return (
    <div className='bg-[#FFFFFF] leading-[1.7em] text-black font-openSans'>
      <div className='max-w-[800px] mx-auto'>
        <section id='home' className=''>
          <Nav />
          <Hero />
          <div className='mt-22'>
            <Title text='TECH STACK' />
            <div className='flex gap-4  flex-wrap mt-6'>
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
        <section id='work-experience' className='pt-22'>
           <Title text='Work Experience' />
           <div className=' mt-8 flex flex-col gap-1'>
            <div className='flex gap-2'>
              <img src={google} alt="" className='w-[50px] rounded-full' />
              <div className='flex flex-col gap-1'>
                <p className='text-[15px] leading-[25px] font-poppins font-bold text-black'>Web Developer</p>
                <div className='flex gap-2'>
                  <p className='text-[#999] uppercase  leading-[14px] tracking-[0.6px] font-roboto text-[11.5px]'>Ocean ThinkIT • 2025</p>
                  <p className='text-[#999] uppercase  leading-[14px] tracking-[0.6px] font-roboto text-[11.5px]'> • Open Job Training</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-500 leading-[1.65em] tracking-[0.1px] font-roboto text-[15px] mt-4'>For the past two years, I have primarily worked with startups, developing products from the ground up. I have led the frontend development of an AI-powered Interview Platform, building a job marketplace for dentists, and creating a system for managing promotional prize games.</p>
            </div>
          </div>
        </section>
        <section id='projects' className='min-h-screen mt-22'>
           <Title text='Projects' />
        </section>
        <section id='contact' className='min-h-screen'>Contact</section>
      </div>
    </div>
  )
}

export default App

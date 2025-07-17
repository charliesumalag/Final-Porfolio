import React from 'react'
import TeackStack from "../components/TeckStack";


const Stack = () => {
  return (
    <div className='flex gap-4  flex-wrap mt-6'>
      <TeackStack icon='fa-brands fa-react' text='React' color='#61DAFB' />
      <TeackStack icon='fa-brands fa-js' text='JavaScript' color='#F7DF1E'  />
      <TeackStack icon='fa-brands fa-html5' text='HTML' color='#E44D26'  />
      <TeackStack icon='fa-brands fa-css3' text='CSS' color='#1172B8'  />
      <TeackStack icon='fa-brands fa-php' text='PHP' color='#7377AD'  />
      <TeackStack icon='fa-brands fa-laravel' text='Laravel' color='#ED2E03'  />
      <TeackStack icon='fa-solid fa-database' text='MySQL' color='#4689B2'  />
    </div>
  )
}

export default Stack

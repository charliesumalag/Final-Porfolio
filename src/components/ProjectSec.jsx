import Title from "../components/Title";
import Project from "./Project";


const ProjectSec = () => {
  return (
    <section id='projects' className=' pt-22 '>
      <Title text='Projects' />
      <Project text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quos ducimus nisi nobis deserunt quas facilis debitis repellendus aliquam molestiae. Quia obcaecati eaque minima, repellat iusto doloremque! Suscipit, impedit facere?' title='Personal Blog' />
      <Project text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla, at adipisci deleniti ullam, odio illo blanditiis repudiandae rem, qui accusamus voluptatum ut. Officia tempore culpa deleniti molestias quia dolor.' title='Connect Community' />
    </section>

  )
}
export default ProjectSec

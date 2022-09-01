import ProjectCard from "../ProjectCard/ProjectCard";
import Projects from "../Projects/projects";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function  MyCarousel(){

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.2,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


return<div>
  <Carousel
  swipeable={false}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={false}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  itemClass="carousel-item"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
 
>
      <ProjectCard
        title={Projects[4].title}
    img={'/untrodden.PNG'}
    link={Projects[4].link}
      />
      <ProjectCard
            title={Projects[3].title}
        img={'/GetaNote.PNG'}
        link={Projects[3].link}
      />
      <ProjectCard
        title={Projects[2].title}
        img={'/BandIts.PNG'}
        link={Projects[2].link}
      />
      <ProjectCard
        title={Projects[1].title}
        img={'/ToDo.PNG'}
        link={Projects[1].link}
      />
   <ProjectCard
        title={Projects[0].title}
        img={'/Med.PNG'}
        link={Projects[0].link}
      />
      
      
      
     
</Carousel>
</div>

}

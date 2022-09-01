
import MyCarousel from "../Carousel/Carousel";
import LogoDisplay from "../Logo Display/logoDisplay";


export default function Display({ display }) {
  return (
    <section>
      <h2>{display.title}</h2>
      <p>{display.content}</p>
      <p>{display.content2}</p>
      {display.id === 1 ?  <section className="projects-display" >
  
    <MyCarousel/>
    </section>:null}
      {display.id === 3 ? (
 <section className="connect">
 <div>
 <p>If you would like to contact me directly please feel free to leave you details here. Alternativly click the Linked In icon to and add me as a contact. </p>
 <div>
            <a
              href="https://linkedin.com/in/glyn-knight-01605924"
              target="_blank"
              rel="noreferrer"
            >
              <img className="connect-icon" src='/linkedin.PNG' alt="linkedin" />
              
            </a>
            <a  
              href="https://github.com/GLYNKNIGHT" 
              target='_blank' 
              rel="noreferrer" >  
              <img className='link-icon' src='/github.PNG' alt="github" /></a>
          </div>
        </div> 
       
              </section>
      ) : null}
      {display.id === 2 ? (<LogoDisplay/>): null }
     
    
    </section>
  )
}

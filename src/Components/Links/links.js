
export default function Links(props){
    return <div className="links">
      <a  href="https://github.com/GLYNKNIGHT" target='_blank' rel="noreferrer" >  <img className='link-icon' src='/github.PNG' alt="github" /></a>
      <a  href="https://linkedin.com/in/glyn-knight-01605924" target='_blank' rel="noreferrer" > <img className='link-icon' src='/linkedin.png' alt="linkedin" /></a>
      <img className='link-icon' src='/email.png' alt="email" onClick = {props.onClick}/>
    </div>
}
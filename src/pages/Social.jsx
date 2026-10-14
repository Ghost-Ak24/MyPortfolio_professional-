import PageFrame from '../components/PageFrame'
import {profile} from '../data/profile'
export default function Social({navigate}){
 const links=[['01','GITHUB','CODE // PROJECTS',profile.links.github],['02','LINKEDIN','PROFESSIONAL NETWORK',profile.links.linkedin],['03','INSTAGRAM','PERSONAL // UPDATES',profile.links.instagram]]
 return <PageFrame section="COMMUNICATION CHANNELS" navigate={navigate} className="social-page"><div className="social-wrap"><div className="section-kicker">05 // NETWORK</div><h1>SOCIAL</h1><p className="section-sub">ESTABLISH A CONNECTION</p><div className="social-list">{links.map(x=><a href={x[3]} target="_blank" rel="noreferrer" key={x[1]}><small>{x[0]}</small><div><b>{x[1]}</b><span>{x[2]}</span></div><em>CONNECT ↗</em></a>)}</div></div></PageFrame>
}

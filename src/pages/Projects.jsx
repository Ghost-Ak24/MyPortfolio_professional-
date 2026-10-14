import {useState} from 'react'
import PageFrame from '../components/PageFrame'
import {projects} from '../data/projects'
export default function Projects({navigate}){
 const [active,setActive]=useState(null),p=projects.find(x=>x.id===active)
 if(p)return <PageFrame section={`MISSION ${p.id} // BRIEFING`} navigate={navigate} className="project-page"><div className="detail-wrap"><button className="mission-back" onClick={()=>setActive(null)}>◀ MISSION SELECT</button><div className="detail-label">{p.id} // PROJECT BRIEFING</div><h1>{p.title}</h1><p className="detail-lead">{p.description}</p><div className="detail-columns"><div><header>MISSION OBJECTIVES</header><ul>{p.bullets.map((b,i)=><li key={i}><span>0{i+1}</span>{b}</li>)}</ul></div><div><header>TECH LOADOUT</header><div className="detail-stack">{p.stack.map(s=><span key={s}>{s}</span>)}</div><div className="project-actions"><a href={p.github} target="_blank" rel="noreferrer">GITHUB ↗</a><a href={p.live} target="_blank" rel="noreferrer">LIVE DEMO ↗</a></div></div></div></div></PageFrame>
 return <PageFrame section="MISSION DATABASE" navigate={navigate} className="project-page"><div className="projects-wrap"><div className="section-kicker">02 // OPERATIONS DATABASE</div><h1>PROJECTS</h1><p className="section-sub">SELECT A MISSION TO OPEN ITS FULL BRIEFING</p><div className="project-list">{projects.map(p=><button key={p.id} className="project-row" onClick={()=>setActive(p.id)}><small>{p.id}</small><div><h2>{p.title}</h2><p>{p.short}</p></div><span>OPEN<br/>BRIEFING →</span></button>)}</div></div></PageFrame>
}

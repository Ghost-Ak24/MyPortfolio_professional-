import PageFrame from '../components/PageFrame'
import {skillGroups} from '../data/skills'
export default function TechArsenal({navigate}){
 return <PageFrame section="LOADOUT DATABASE" navigate={navigate} className="tech-page"><div className="tech-wrap"><div className="section-kicker">03 // EQUIPMENT</div><h1>TECH <span>ARSENAL</span></h1><p className="section-sub">CURRENTLY EQUIPPED // CONSTANTLY UPGRADING</p><div className="tech-grid">{skillGroups.map(g=><article key={g.label}><header><small>{g.icon}</small><b>{g.label}</b><span>READY</span></header>{g.items.map((s,i)=><div className="skill-line" key={s}><small>0{i+1}</small><b>{s}</b><i><em style={{width:`${72+(i%4)*6}%`}}/></i></div>)}</article>)}</div></div></PageFrame>
}

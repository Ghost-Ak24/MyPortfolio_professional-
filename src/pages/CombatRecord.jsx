import PageFrame from '../components/PageFrame'
import {profile} from '../data/profile'
export default function CombatRecord({navigate}){
 const links=[['01','LEETCODE',profile.links.leetcode,'300+ PROBLEMS'],['02','GEEKSFORGEEKS',profile.links.gfg,'DSA PRACTICE'],['03','CODEFORCES',profile.links.codeforces,'CONTESTS // PRACTICE']]
 return <PageFrame section="CODING OPERATIONS" navigate={navigate} className="record-page"><div className="record-wrap"><div className="section-kicker">04 // PERFORMANCE LOG</div><h1>COMBAT <span>RECORD</span></h1><div className="record-hero"><div><strong>300+</strong><p>DATA STRUCTURES & ALGORITHMS<br/>PROBLEMS SOLVED</p></div><div className="record-copy">STILL SOLVING<span>...</span><small>Every problem is another round of training.</small></div></div><div className="coding-platforms">{links.map(x=><a href={x[2]} target="_blank" rel="noreferrer" key={x[1]}><small>{x[0]}</small><div><b>{x[1]}</b><span>{x[3]}</span></div><em>VISIT ↗</em></a>)}</div></div></PageFrame>
}

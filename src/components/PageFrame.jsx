import BackButton from './BackButton'
export default function PageFrame({children,section,navigate,scroll=true,className=''}){
 return <section className={`page-frame ${scroll?'scroll-page':''} ${className}`}><div className="page-topline"><span>// {section}</span><span>ACCESS GRANTED</span></div>{children}<BackButton onBack={()=>navigate('home')}/></section>
}

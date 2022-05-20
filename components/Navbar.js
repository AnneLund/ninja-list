import Link from 'next/link'
import Image from 'next/image'



const Navbar = () => {
    return (
<>

        <nav className="navbar">
         <div className="logo">
                <Image src="/cat.png" width={128} height={110} alt="logo"/>
            </div>
             <ul> 
            <li><Link href="/"><a>Forside</a></Link> </li>
         <li><Link href="/about"><a>Om</a></Link> </li>
            <li> <Link href="/ninjas"><a>API Fetching</a></Link> </li>
            <li> <Link href="/database"><a>SQL database</a></Link> </li>
             </ul>
     </nav>
      </>    
    )
}



export default Navbar;
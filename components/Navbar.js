import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Image src="/logo.png" width={128} height={77} alt="logo"/>
            </div>
            <ul> 
            <li><Link href="/"><a>Forside</a></Link> </li>
            <li><Link href="/about"><a>Om</a></Link> </li>
            <li> <Link href="/ninjas"><a>Ninja Listing</a></Link> </li>
            <li> <Link href="/contact"><a>Kontakt</a></Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar;
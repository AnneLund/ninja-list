import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router'
const NotFound = () => {
const router = useRouter();
    useEffect(() => {
    setTimeout(() => {
// router.go()
router.push('/');
    }, 3000)
    }, [router])

    return(
        <div className="not-found">
            <h1>Ups!</h1>
            <h2>Siden findes ikke..</h2>
            <p>Tilbage til <Link href="/">Forsiden</Link></p>
        </div>
    )
}

export default NotFound;
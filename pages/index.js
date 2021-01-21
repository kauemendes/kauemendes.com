import Link from 'next/link';

function Home() {
    return (
        <div>
            <h3>Pagina Inicial</h3>
            <Link href="/about">
                <a>Sobre</a>
            </Link>
            <Link href="/contact">
                <a>Contatar</a>
            </Link>
        </div>
    )
}


export default Home
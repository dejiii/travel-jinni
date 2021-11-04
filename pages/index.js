import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Travel Jinni</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto py-6">
                <div className="flex justify-between items-center">
                    <div>
                        <p>Remaining Days To My Trip</p>
                        <div className="flex">
                            <div className="flex-col text-center mr-1 w-10">
                                <h2 className={styles.pFlexT}>10</h2>
                                <p className={styles.txtSpan}>Weeks</p>
                            </div>
                            <div className="flex-col text-center mx-1 w-10">
                                <h2 className={styles.pFlexT}>06</h2>
                                <p className={styles.txtSpan}>Days</p>
                            </div>
                            <div className="flex-col text-center mx-1 w-10">
                                <h2 className={styles.pFlexT}>45</h2>
                                <p className={styles.txtSpan}>Hours</p>
                            </div>
                            <div className="flex-col text-center mx-1 w-10">
                                <h2 className={styles.pFlexT}>25</h2>
                                <p className={styles.txtSpan}>Minutes</p>
                            </div>
                            <div className="flex-col text-center mx-1 w-10 text-small">
                                <h2 className={styles.pFlexT}>06</h2>
                                <p className={styles.txtSpan}>Seconds</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="px-2">My Trips</p>
                        <div className="flex">
                            <p className="px-2">|</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                            <span className="ml-2">EN (S)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-500"></div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, deserunt hic
                molestias, facere veritatis amet iusto necessitatibus reiciendis inventore quidem
                et. Corporis quia quis fugit neque eos cumque est ex.
            </p>
        </div>
    );
}

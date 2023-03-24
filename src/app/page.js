import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main>
			<div className="w-screen">
				<div className={`flex flex-col w-full ${styles.top}`}>
					<div className={`h-20 w-full  flex flex-row text-white`}>
						<div className={`flex-1 flex flex-row justify-center items-center`}>
							<div className="">arpitchandak</div>
						</div>
						<div className={`flex-1 flex flex-row items-center`}>
							<div className={styles.navTab}>HOME</div>
							<div className={styles.navTab}>ABOUT</div>
							<div className={styles.navTab}>PROJECT</div>
							<div className={styles.navTab}>RESOURCES</div>
							<div className={styles.navTab}>CONTACT ME</div>
						</div>
					</div>

					<div className={`w-full flex flex-row h-full`}>
						<div
							className={`flex-1 text-white flex flex-row justify-end items-center`}
						>
							<div className={`w-1/2`}>
								<div>Hey, I'm Arpit ;)</div>
								<div>
									A multi-disciplinary Product Designer with 3+ years of
									experience working on Fintech, Web3, Creator & eCommerce
									domain.
								</div>
								<div>QUICK INTRO</div>
								<div className={`flex flex-row`}>
									<div>&bull;</div>
									<div>
										Founding Product Designer @Kraze, building products serving
										300K customers
									</div>
								</div>
								<div className={`flex flex-row`}>
									<div>&bull;</div>
									<div>
										Freelancing for last 4+ years worked with 60+ clients on
										120+ projects
									</div>
								</div>
								<div className={`flex flex-row`}>
									<div>&bull;</div>
									<div>
										Sharing design experiences on LinkedIn and Medium. Building
										design resources for the community
									</div>
								</div>
								<div className={`mt-10 `}>
									<div className="p-2 bg-yellow-200 w-1/2 rounded-[20px]">
										<div>Shoot me a message</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className={`flex-1  flex flex-row items-center justify-center`}
						>
							<div>
								<img src="img1.webp"></img>
							</div>
						</div>
					</div>
				</div>

				<div
					className={`bg-white w-full flex flex-row justify-center ${styles.height}`}
				>
					<div className="w-2/3 flex flex-col">
						<div>
							<div
								className="w-full flex flex-col justify-center items-center my-10
						"
							>
								<div>My Works</div>
								<div>
									Curated Projects from Full-time Jobs and Freelance Gigs: See
									the Best of My Work Over the Years.
								</div>
							</div>
							<div className={'flex flex-row'}>
								<div className="flex-1">
									<img src="img2.webp" />
								</div>
								<div className="flex-1 flex flex-col py-5">
									<div>Kraze App - India’s first TV show gaming app</div>
									<div className="w-1/4 rounded-lg bg-blue-300">
										<div className="p-1 text-center">Full-Time Work</div>
									</div>
									<div>
										Improving the Low number of Trades on Kraze via UX,
										resulting in a 25% increase in successful trades
									</div>
									<div>
										Boosting the D0 wallet deposit by 11%, by gamifying the user
										journey
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className={`bg-white w-full flex flex-row justify-center ${styles.top}`}
				>
					<div className="w-2/3 flex flex-col">
						<div>
							<div
								className="w-full flex flex-col justify-center items-center my-10 text-white
						"
							>
								<div>Testimonials</div>
								<div>
									Discover the Impact of My Work Through the Words of My Clients
									& Office Colleagues.
								</div>
							</div>
							<div className={'flex flex-row items-center justify-center'}>
								<div>
									<img src="img3.webp" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

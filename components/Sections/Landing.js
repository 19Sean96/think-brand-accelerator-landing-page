import ContentWrapper from "../ContentWrapper";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = (props) => {
	return (
		<section className="landing">
			<ContentWrapper>
				<div className="landing--statement">
					<div className="landing--statement__top">
						<h2 className="landing--statement--title uppercase">
                        The Place To Go For Brands To Grow.
						</h2>
						<h5 className="landing--statement--subtitle capitalize">
                        A Program for select businesses to have the opportunity to work with a design/marketing dream team to help get your vision off the ground.
						</h5>
					</div>
					<div className="landing--statement__bottom">

						<div className="landing--cta__container">
							<Link href="/#form">
								<a
									className="landing--cta capitalize"
									id="freeDemo"
								>
									get Started
									<FontAwesomeIcon icon="chart-bar" />
								</a>
							</Link>

						</div>
					</div>
				</div>
			</ContentWrapper>
            <div className="landing--image">
                <img src="/girl-in-chair-big.jpg" alt="A girl smiling, sitting on a chair. Her chin is resting in her palm."/>
            </div>
		</section>
	);
};

export default Landing;

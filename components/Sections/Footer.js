import ContentWrapper from "../ContentWrapper";
import ThinkLogo from "../svg-components/ThinkLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = (props) => {
	return (
		<footer className="footer">
			<ContentWrapper>
				<div className="footer--content">
					<div className="footer--content--section footer__left">
						<div className="footer--logo__wrapper">
							<ThinkLogo color="#EC008C" />
						</div>
						<p>
							Think is a marketing print house & design studio
							based in Tempe, Arizona
						</p>
						<div className="footer--social__wrapper">
							<div className="footer--social__facebook footer--social">
								<FontAwesomeIcon icon={["fab", "facebook"]} />
							</div>
							<div className="footer--social__instagram footer--social">
								<FontAwesomeIcon icon={["fab", "instagram"]} />
							</div>
						</div>
						<p className="footer--copyright">
							©2021 Think Graphics and Printing Solutions
						</p>
					</div>
					<div className="footer--content--section footer__center">
						<h6 className="uppercase bold">services</h6>
						<h6 className="uppercase">
							<Link href="https://www.thinkpro.net/design-services/">
								<a>design</a>
							</Link>
						</h6>
						<h6 className="uppercase">
							<Link href="https://custom.thinkpro.net/">
								<a>apparel</a>
							</Link>
						</h6>
						<h6 className="uppercase">
							<Link href="https://www.mycustomprintshop.com/">
								<a>print</a>
							</Link>
						</h6>
						<h6 className="uppercase">
							<Link href="https://campaigns.thinkpro.net/">
								<a>campaigns</a>
							</Link>
						</h6>
						<div className="footer--logo__third-party">
							<img
								src="/local-first-arizona-logo.jpg"
								alt="Logo For Local First Arizona"
							/>
						</div>
					</div>
					<div className="footer--content--section footer__right">
						<h6 className="uppercase bold">resources</h6>
						<h6 className="uppercase">
							<Link href="https://www.thinkpro.net/campaigns/campaign-frequently-asked-questions/">
								<a>faq</a>
							</Link>
						</h6>
						<h6 className="uppercase">
							<Link href="https://www.thinkpro.net/about/">
								<a>about</a>
							</Link>
						</h6>
						<h6 className="uppercase">
							<Link href="https://www.thinkpro.net/contact-us/">
								<a>contact</a>
							</Link>
						</h6>
						<h6 className="uppercase">
							<Link href="https://www.thinkpro.net/we-are-now-hiring/">
								<a>career</a>
							</Link>
						</h6>
					</div>
				</div>
			</ContentWrapper>
			<div className="footer--intersection">
				<img src="/footer-intersection.svg" alt="Black Background Triangle With Abstract Geometry intersecting the form section"/>
			</div>

		</footer>
	);
};

export default Footer;

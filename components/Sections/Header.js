  
import { GlobalNav, LocalNav } from "./Nav";
import ThinkLogo from "../svg-components/ThinkLogo";
import ContentWrapper from '../ContentWrapper'
import Link from 'next/link';
const Header = (props) => {
	return (
		<ContentWrapper>
			<header className="header">
				<div className="header--left">
					<div className="logo__container">
						<Link href="https://www.thinkpro.net/">
							<a><ThinkLogo color="3e3e3e"/></a>
						</Link>
						<h6 className="logo--local">Brand Accelerator</h6>
					</div>
                    <GlobalNav />
				</div>
				<div className="header--right">
					<LocalNav />
				</div>
			</header>
		</ContentWrapper>
	);
};

export default Header;
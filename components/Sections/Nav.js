import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const GlobalMenu = styled.div`

//   pointer-events: ${props => props.isOpen ? 'all' : 'none'}

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.isOpen ? "100vw" : '0vw'};
    opacity: ${props => props.isOpen ? 1 : 0};
    height: 50vh;
    background-color: black;

    transition: .22s width ease-in,
                .11s opacity .11s ease-out;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: ${props => props.isOpen ? "100vw" : '0vw'};
    opacity: ${props => props.isOpen ? 1 : 0};
    height: 50vh;
    background-color: black;

    transition: .22s width ease-in,
                .11s opacity .11s ease-out;
  }
`

const GlobalNav = (props) => {
    const [isOpen, toggleOpen] = useState(false)
	return (
		<nav className="nav nav__global">
			<div className="nav__global--open">
				<button type="button" onClick={e => toggleOpen(true)}>
					<span>Services </span>
					<FontAwesomeIcon icon="th" />
				</button>
			</div>
			<GlobalMenu isOpen={isOpen} className={`nav__global--display ${isOpen ? 'inView' : ''}`}>
				<button id="navGlobalClose" onClick={e => toggleOpen(false)}>
					<FontAwesomeIcon icon="times" />
				</button>
				<ul className="nav__global--list" style={{
                    opacity: isOpen ? 1 : 0
                }}>
					<li>
						<Link href="https://www.thinkpro.net/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="https://custom.thinkpro.net/">
							<a>Apparel</a>
						</Link>
					</li>
					<li>
						<Link href="https://www.mycustomprintshop.com/">
							<a>Print</a>
						</Link>
					</li>
					<li>
						<Link href="https://campaigns.thinkpro.net/">
							<a>Campaigns</a>
						</Link>
					</li>
					<li>
						<Link href="https://www.thinkpro.net/design-services/">
							<a>Design Services</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>Brand Accelerator</a>
						</Link>
					</li>
				</ul>
			</GlobalMenu>
		</nav>
	);
};

const LocalNav = (props) => {
	return (
		<nav className="nav nav__local">
			<Link href="/#">
				<a className="nav--item capitalize filled-bg">
					free demo 
				</a>
			</Link>
			<Link href="#">
				<a className="nav--item unfilled-bg">FAQs</a>
			</Link>
		</nav>
	);
};

export { GlobalNav, LocalNav };

import ContentWrapper from "../ContentWrapper";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const VideoArea = styled.div`
	&::after {
		transition: 0.14s ease-in 0.08s all;
		opacity: ${(props) => (props.paused ? 1 : 0)};
		pointer-events: ${(props) => (props.paused ? "all" : "none")};
	}

	.summary--video--play-btn {
		transition: 0.12s ease-out all;

		opacity: ${(props) => (props.paused ? 1 : 0)};
		pointer-events: ${(props) => (props.paused ? "all" : "none")};
	}
`;

const Summary = (props) => {
	const video = useRef();
	const [paused, setPause] = useState(true);
	useEffect(() => {
		if (!paused) {
		}
	}, [paused]);
	return (
		<section className="summary">
			<ContentWrapper>
				<div className="summary--person">
					<img
						id="fullPicture"
						src="/guy-listening-to-music.jpg"
						alt=""
					/>
					<img
						id="justBoots"
						src="/guy-listening-to-music__BOOTS.png"
						alt=""
					/>
				</div>
        
				<div className="summary--content">
					<h2 className="summary--title capitalize">
						helping brands grow is our passion.
					</h2>
					<div className="summary--video__wrapper">
						<VideoArea
							className="summary--video--actual"
							paused={paused}
						>
							<button
								className="summary--video--play-btn"
								onClick={(e) => {
									video.current.play();
									setPause(false);
								}}
							>
								<FontAwesomeIcon icon="play-circle" />
							</button>
							<video
								width="100%"
								autoPlay={false}
								controls
								ref={video}
							>
								<source
									type="video/mp4"
									src="/office-b-roll.mp4"
								/>
							</video>
						</VideoArea>
						<caption className="summary--video--caption">
							Branding & Designing | Marketing Strategizing |
							Social Media Coaching | Comprehensive Web Services |
							Video & Photo Content Creation | In-depth Analytics
							| Discounted Custom Print & Apparel
						</caption>
					</div>
					<Link href="/#">
						<a className="summary--cta capitalize">
							take advantage of our full six point strategy
						</a>
					</Link>
				</div>
			</ContentWrapper>
		</section>
	);
};

export default Summary;

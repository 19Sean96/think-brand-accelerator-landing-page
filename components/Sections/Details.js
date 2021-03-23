import { useEffect, useState } from "react";
import ContentWrapper from "../ContentWrapper";
const Details = (props) => {
	return (
		<section className="details">
			<div className="details--intro">
				<img
					src="/intersection-1.svg"
					alt="A kid wearing an astronaut helmet looking surprised. He is on a pink background with a galaxy pattern overlay."
					className="details--intro__bg"
				/>
				<ContentWrapper>
                    <div className="details--intro--heading">
                    <h2 className="details--intro--title capitalize">
						growing your brand shouldn't be complicated.
					</h2>
					<h3 className="details--intro--subtitle">
						So we broke it down to <strong>six points</strong> which
						we use to help your brand reach new heights.
					</h3>
                    </div>
				</ContentWrapper>
			</div>
			<ContentWrapper>
                <div className="details--body">
                    <div className="details--body__left">

                    </div>
                    <div className="details--body__right">
                        <img id="molecule1" src="/molecule-1.svg" alt="THINK Brand: 6-point molecule SVG"/>
                        <img id="girlJumping" src="/girl-jumping.jpg" alt=""/>
                        <img id="girlJumping--arm" src="/girl-jumping-arm.png" alt=""/>
                    </div>
                </div>
            </ContentWrapper>
		</section>
	);
};
export default Details;

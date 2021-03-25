import { useEffect, useState } from "react";
import ContentWrapper from "../ContentWrapper";
import Link from 'next/link'
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
              So we broke it down to <strong>six points</strong> which we use to
              help your brand reach new heights.
            </h3>
          </div>
        </ContentWrapper>
      </div>
      <div className="details--body">
        <div className="details--body__left">
          <div className="details--body--nav">
			{/* SOCIAL MEDIA */}
			<h2 className="uppercase">your<br />brand</h2>
            <NavItem 
				src="/like-icon.svg"
				name="Social Media"
				id="socialMedia"
			/>
			{/* WEB */}
            <NavItem 
				src="/atomic-icon.svg"
				name="Web"
				id="web"
			/>
			{/* DESIGN */}
            <NavItem 
				src="/brush-icon.svg"
				name="Design"
				id="design"
			/>
			{/* ANALYTICS */}
            <NavItem 
				src="/chart-icon.svg"
				name="Analytics"
				id="analytics"
			/>
			{/* CONTENT */}
            <NavItem 
				src="/camera-icon.svg"
				name="Content"
				id="content"
			/>
			{/* MARKETING */}
            <NavItem 
				src="/eye-icon.svg"
				name="Marketing"
				id="marketing"
			/>
          </div>
		  <div className="details--body--cta">
			  <Link href="#">
				  <a className="capitalize getStarted">get started</a>
			  </Link>
		  </div>
		</div>
        <div className="details--body__right">
          <img
            id="molecule1"
            src="/molecule-1.svg"
            alt="THINK Brand: 6-point molecule SVG"
          />
          <img id="girlJumping" src="/girl-jumping.jpg" alt="" />
          <img id="girlJumping--arm" src="/girl-jumping-arm.png" alt="" />
        </div>
      </div>
    </section>
  );
};

function NavItem({src, name, id}) {
  return (
    <div className="nav-item" id={id}>
      <button className="nav-item--btn">
        <img src={src} alt="" />
      </button>
	  <p className="nav-item--name">{name}</p>
    </div>
  );
}

export default Details;

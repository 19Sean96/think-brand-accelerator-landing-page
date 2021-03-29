import { useEffect, useState } from "react";
import ContentWrapper from "../ContentWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Atomic,
  Brush,
  Camera,
  Chart,
  Eye,
  Like,
} from "../svg-components/BrandIcons";

import Link from "next/link";
import styled from "styled-components";
// import LandingIntersection from '../svg-components/LandingIntersection'
const sixPoints = [
  {
    id: "socialMedia",
    name: "Social Media",
    description:
      "It’s time to amplify your Social Media presence and increase your company’s brand awareness on all digital platforms. Our team of Social Media Specialists are looking forward to helping your business create multilayered Social Media campaigns targeted at boosting sales, initiating new leads and increasing customer engagement on digital platforms.",
    iconSrc: "/like-icon.svg",
  },
  {
    id: "web",
    name: "Web",
    description:
      "In life, first impressions matter, including your website. What does your site say about you and your business? How your website looks, what it does and doesn’t say, the response time, how easy or difficult it is to navigate are all things that make an impact on your customers and potential new customers. Our skilled design team members are ready to provide you with an e-commerce or standard website that is mobile friendly, easy to navigate, converts leads and looks beautiful.",
    iconSrc: "/atomic-icon.svg",
  },
  {
    id: "design",
    name: "Design",
    description:
      "It’s not just how your company looks. It’s how it sounds, how it feels, how it’s portrayed across every single engagement that happens between your company and your clients or future clients. Our team of technical designers are ready to help take your logo, brand colors, typography and brand identity to a whole new level.",
    iconSrc: "/brush-icon.svg",
  },
  {
    id: "analytics",
    name: "Analytics",
    description:
      "How do you know if what you're doing online is actually working? Do you feel confused trying to track digital marketing results and wish you knew what people actually did when they got to your site? Well if so, you're in the right place. Our team will efficiently track your web analytics while monitoring where in your signup or funnel users drop off so we can retarget them with paid search ads. We can show you where users spend time on the site, where they navigate, and what they click on as part of their journey. We can even track what products users from particular campaigns purchase so you can improve your profit margin calculations for paid campaigns. Remember, you can only expect to make informed decisions if you're measuring what's happening.",
    iconSrc: "/chart-icon.svg",
  },
  {
    id: "content",
    name: "Content",
    description:
      "Studies show that including videos on your website and social media improve engagement, search rankings and conversion rate. Social Media posts with video can get 48% more views and including video on your website can improve your organic search rankings by 150%! Majority of consumers would rather learn about a product or service by video and 85% of consumers want to see more video content from brands. Are you ignoring an opportunity to better establish your brand over competitors? Our team is ready to help your company create beautiful branded photography along with entertaining and educational video content so you can connect better with your audience.",
    iconSrc: "/camera-icon.svg",
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "Whether through SEO, content marketing, influencer marketing, email automation, newsletters or digital growth marketing, our team will use the branded content we created for your business to effectively market to your demographic and target audience.",
    iconSrc: "/eye-icon.svg",
  },
];

const Details = (props) => {
  const [activeNav, setActiveNav] = useState(false);
  return (
    <section className="details">
      <div className="details--intro">
        <img
          src="/intersection-1.png"
          alt="A kid wearing an astronaut helmet looking surprised. He is on a pink background with a galaxy pattern overlay."
          className="details--intro__bg"
        />
        <ContentWrapper>
          <div className="details--intro--heading">
            <h2 className="details--intro--title capitalize">
              Looking to take your brand to new heights? <br />
              We can help.
            </h2>
          </div>
        </ContentWrapper>
      </div>
      <div className="details--body">
        <div className="details--body__left">
          <div className="details--body--nav">
            {/* SOCIAL MEDIA */}
            <h2 className="uppercase">
              your
              <br />
              brand
            </h2>
            {sixPoints.map((point, i) => (
              <NavItem
                src={point.iconSrc}
                name={point.name}
                id={point.id}
                description={point.description}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              />
            ))}
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
          <img id="girlJumping" src="/girl-jumping.png" alt="" />
          <img id="girlJumping--arm" src="/girl-jumping-arm.png" alt="" />
          <img
            src="/girl-jumping-MOBILE.png"
            alt="Girl Jumping with arm showing over the pink molecule design."
            id="girlJumpingMobile"
          />
        </div>
      </div>
    </section>
  );
};

const NavBtn = styled.div`
  .nav-item--btn {
    background-image: ${(props) =>
      props.active
        ? "linear-gradient(145deg,#FD0096,#D4007E)"
        : "linear-gradient(145deg,#F2F2F2,#CBCBCB)"};
    box-shadow: ${(props) =>
      props.active
        ? "21px 21px 42px rgba(149,0,88,.24),-21px -21px 42px rgba(255,0,192,.24)"
        : "21px 21px 42px #C0C0C0,-21px -21px 42px #FFFFFF"};
  }
`;

const Description = styled.aside`
  pointer-events: ${(props) => (props.active ? "all" : "none")} !important;
  opacity: ${(props) => (props.active ? 1 : 0)} !important;

  transform: ${(props) =>
    props.active ? "translate(47vw, 300px)" : "translate(51vw, -15%)"};

  @media screen and (max-width: 1650px) {
    transform: ${(props) =>
      props.active ? "translate(51vw, 100px)" : "translate(49vw, -15%)"};
  }

  @media screen and (max-width: 1300px) {
    transform: ${(props) =>
      props.active ? "translate(48vw, 75px)" : "translate(51vw, -15%)"};
  }
  @media screen and (max-width: 950px) {
    transform: ${(props) =>
      props.active ? "translate(0vw, 600px)" : "translate(0vw, -10%)"};
  }
`;

function NavItem({ src, name, id, description, activeNav, setActiveNav }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active && id === activeNav) {
      setActive(true);
    } else if (active & (id !== activeNav)) {
      setActive(false);
    }
  }, [activeNav]);

  return (
    <>
      <NavBtn className="nav-item" id={id} active={active}>
        <button
          className="nav-item--btn"
          onClick={(e) =>
            activeNav !== id && !active ? setActiveNav(id) : setActiveNav(false)
          }
        >
          {id === "socialMedia" ? (
            <Like
              gradientStart={activeNav === "socialMedia" ? "#CBCBCB" : "#630460"}
              gradientEnd={activeNav === "socialMedia" ? "#F2F2F2" : "#EC008C"}
            />
          ) : id === "web" ? (
            <Atomic
              gradientStart={activeNav === "web" ? "#CBCBCB" : "#630460"}
              gradientEnd={activeNav === "web" ? "#F2F2F2" : "#EC008C"}
            />
          ) : id === "design" ? (
            <Brush
              gradientStart={activeNav === "design" ? "#CBCBCB" : "#630460"}
              gradientEnd={activeNav === "design" ? "#F2F2F2" : "#EC008C"}
            />
          ) : id === "analytics" ? (
            <Chart
              gradientStart={activeNav === "analytics" ? "#CBCBCB" : "#630460"}
              gradientEnd={activeNav === "analytics" ? "#F2F2F2" : "#EC008C"}
            />
          ) : id === "content" ? (
            <Camera
              gradientStart={activeNav === "content" ? "#CBCBCB" : "#630460"}
              gradientEnd={activeNav === "content" ? "#F2F2F2" : "#EC008C"}
            />
          ) : (
            <Eye
              gradientStart={activeNav === "marketing" ? "#CBCBCB" : "#630460"}
              gradientEnd={activeNav === "marketing" ? "#F2F2F2" : "#EC008C"}
            />
          )}
        </button>
        <p className="nav-item--name">{name}</p>
      </NavBtn>

      <Description
        className="nav-description"
        id={`${id}Description`}
        active={active}
      >
        <h1>{name}</h1>
        <button
          className="nav-description--close"
          onClick={(e) => setActiveNav(false)}
        >
          <FontAwesomeIcon icon="times" />
        </button>
        <p>{description}</p>
      </Description>
    </>
  );
}

export default Details;

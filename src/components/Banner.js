import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Banner.css";

const src =
  "https://a0.muscache.com/im/pictures/8b43a7f2-1808-436a-95c0-d4ed18b51097.jpg?im_q=highq&im_w=720";

const src__md =
  "https://a0.muscache.com/im/pictures/9b4919ad-8b4d-4246-ab59-aaed7b1b9d37.jpg?im_w=1200";

const src__lg =
  "https://a0.muscache.com/im/pictures/9b4919ad-8b4d-4246-ab59-aaed7b1b9d37.jpg?im_w=1440";

function Banner() {
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner__picture">
        <picture className="picture">
          <source srcSet={src__lg} media="(min-width: 1128px)"></source>
          <source srcSet={src__md} media="(min-width: 744px)"></source>
          <source srcSet={src}></source>
          <img src={src} alt="background"></img>
        </picture>
      </div>
      <div className="banner__content">
        <div className="banner__content__div">
          <span>Go Near</span>
          <Link
            target="_blank"
            to="/homes"
            className="banner__content__link"
            rel="noreferrer"
            onClick={() => history.push("/homes")}
          >
            <span className="explore">Explore nearby stays</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;

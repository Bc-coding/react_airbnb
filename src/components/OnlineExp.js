import React from "react";
import "./OnlineExp.css";

const dataExp = [
  {
    item: "item1",
    url:
      "https://a0.muscache.com/im/pictures/c5be4edc-17b7-40cd-9b88-6a94569f3095.jpg?im_q=lowq&im_w=720",
    text: "Enjoy Santa stories with a children's book author",
    href: "https://www.airbnb.co.uk/experiences/1693868",
  },
  {
    item: "item2",
    url:
      "https://a0.muscache.com/im/pictures/51c7d0fe-99fa-4e52-b576-501c60c9bf77.jpg?im_q=medq&im_w=720",
    text: "Discover spiced wines with an archaeologist",
    href: "https://www.airbnb.co.uk/experiences/1677563",
  },
  {
    item: "item3",
    url:
      "https://a0.muscache.com/im/pictures/86484ca4-1079-4ca4-9e29-f2d363ffb41b.jpg?im_q=medq&im_w=720",
    text: "Sing festive songs with a Broadway star",
    href: "https://www.airbnb.co.uk/experiences/2071540",
  },
  {
    item: "item4",
    url:
      "https://a0.muscache.com/im/pictures/51175b5f-006a-4a08-b7f6-1e5a04d02796.jpg?im_q=medq&im_w=720",
    text: "Cook pasta at home with Italian grandmas",
    href: "https://www.airbnb.co.uk/experiences/1610894",
  },
];

const Experience = ({ item, url, text, href }) => {
  return (
    <div className={item}>
      <div className="item__img">
        <img src={url} alt="exprience" />
      </div>
      <div className="item__text text">
        <a href={href} target="_blank" rel="noreferrer" className="item__link">
          <span>{text}</span>
        </a>
      </div>
    </div>
  );
};

function OnlineExp() {
  return (
    <section className="onlineExp">
      <div className="onlineExp__wrapper">
        <div className="onlineExp__header">
          <div className="onlineExp__header__text">
            <h1>Online Experiences for the festive season</h1>
            <span>
              Interactive activities we can do together, led by one-of-a-kind
              hosts.
            </span>
          </div>

          <div className="onlineExp__header__link">
            <a href="https://www.airbnb.co.uk/s/experiences?click_referer=t%3ASEE_ALL%7Csid%3A2113f7b2-8d33-4cbd-8be1-fb642fcc01c8%7Cst%3ADEFAULT_EARHART_INSERT_ITEM_SECTION&refinement_paths%5B%5D=%2Fexperiences%2FKG%2FTag%3A6951&last_search_session_id=2113f7b2-8d33-4cbd-8be1-fb642fcc01c8&search_type=unknown">
              Explore all
            </a>
          </div>
        </div>

        <div className="onlineExp__content">
          <div className="content">
            {dataExp.map((photo) => (
              <Experience
                item={photo.item}
                url={photo.url}
                text={photo.text}
                href={photo.href}
                key={photo.item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineExp;

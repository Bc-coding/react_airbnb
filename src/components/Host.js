import React from "react";
import "./Host.css";

const dataHost = [
  {
    item: "hostItem1",
    url:
      "https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=720",
    text: "Host your home",
    href: "https://www.airbnb.co.uk/host/homes",
  },
  {
    item: "hostItem2",
    url:
      "https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=720",
    text: "Host an Online Experience",
    href: "https://www.airbnb.co.uk/d/onlinehost",
  },
  {
    item: "hostItem3",
    url:
      "https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=720",
    text: "Host an Experience",
    href: "https://www.airbnb.co.uk/host/experiences",
  },
];

const HostCard = ({ item, url, text, href }) => {
  return (
    <div className={item}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="hostItem__link"
      >
        <div className="hostItem__img">
          <img src={url} alt={text} />
        </div>
        <div className="hostItem__text">
          <span>{text}</span>
        </div>
      </a>
    </div>
  );
};

function Host() {
  return (
    <section className="host">
      <div className="host__header">
        <span>Join millions of hosts on Airbnb</span>
      </div>
      <div className="host__content">
        {dataHost.map((hostItem) => (
          <HostCard
            item={hostItem.item}
            url={hostItem.url}
            text={hostItem.text}
            href={hostItem.href}
            key={hostItem.item}
          />
        ))}
      </div>
    </section>
  );
}

export default Host;

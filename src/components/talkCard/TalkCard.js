import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div
      className={
        talkDetails.isDark
          ? "talk-card talk-card-dark"
          : "talk-card talk-card-light"
      }
    >
      <div className="talk-card-body">
        <h5
          className={
            talkDetails.isDark
              ? "dark-mode talk-card-title"
              : "talk-card-title"
          }
        >
          {talkDetails.title}
        </h5>
        <p
          className={
            talkDetails.isDark
              ? "dark-mode talk-card-subtitle"
              : "talk-card-subtitle"
          }
        >
          {talkDetails.subtitle}
        </p>
      </div>
      <div className="talk-card-footer">
        <a
          href={talkDetails.slides_url}
          target="_blank"
          rel="noopener noreferrer"
          className="talk-tag"
        >
          View Paper
        </a>
      </div>
    </div>
  );
}

import React from "react";
import "./Post.css";

const Post = ({ data }) => {
  const {
    title,
    author: { name, profileImage },
    content,
    channel: { image, name: channelName },
    likeCount,
    commentCount,
  } = data;
  return (
    <section className="post-section">
      <header className="post-header">
        <img src={profileImage} alt={name} className="profile-image" />
        <div className="author-container">
          <h3>{title}</h3>
          <p>By: {name}</p>
        </div>
      </header>
      <aside>{content}</aside>

      <footer className="post-footer">
        <section className="post-footer-channel">
          <img src={image} alt={channelName} className="channel-image" />
          <p>Channel: {channelName}</p>
        </section>
        <section className="post-footer-like-comment">
          <p><button className="like-button">Likes</button>: {likeCount}</p>
          <p>Comments: {commentCount}</p>
        </section>
      </footer>
    </section>
  );
};

export default Post;

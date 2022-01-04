import React from "react";

const CommentList = ({ comments }) => {

  const renderedComments = comments.map((comment) => {
    let content;
    if(comment.status==='approved'){
      return <li key={comment.id}>{comment.content}</li>;
    }else if(comment.status==='pending'){
      return <li key={comment.id}>This comment is awating moderation</li>;
    }else{
      return <li key={comment.id}>This comment is rejected</li>;
    }
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;

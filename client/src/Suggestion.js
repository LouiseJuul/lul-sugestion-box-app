import React from 'react';
import PostSignature from "./PostSignature";


function Suggestion(props) {
  const{id, getSuggestion} = props;
  const suggestion = getSuggestion(id);

  let content = <p>loading...</p>;
  if (suggestion) {
    content = 
      <>
        <p>Title: {suggestion.title}</p>
        <p>Description: {suggestion.description}</p>

        <h3>Signatures</h3>
        <ul>
          {suggestion.signatures.map((s, index) => <li key={index}>{s.username}</li>)}
        </ul>


        <PostSignature suggestion={suggestion}
          username={props.username}
          postSignature={props.postSignature}
          ></PostSignature>



        </>
  }

  return (
    <>
      <div>
        {content}
      </div>
    </>
  )
}

export default Suggestion;


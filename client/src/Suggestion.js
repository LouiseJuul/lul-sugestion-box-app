import React from 'react';


function Suggestion(props) {
  const{id, getSuggestion} = props;
  const suggestion = getSuggestion(id);

  let content = <p>loading...</p>;
  if (suggestion) {
    content = 
      <>
        <p>Title: {suggestion.title}</p>
        <p>Description: {suggestion.description}</p>
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


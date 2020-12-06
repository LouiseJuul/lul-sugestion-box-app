import React from 'react';
import { Link } from "@reach/router";

function Suggestions(props) {
const {suggestions} = props;

//checks if there is data to begin with. If not just print out loadng on page. Not crashing before I have data.
if (!suggestions) return <p>Loading...</p>;

const list = suggestions.map(suggestion =>
  <li key={suggestion._id}>
  <Link to={"/" + suggestion._id}>{suggestion.title}</Link>, {suggestion.description}
  </li>
);

 return (
 <>
 <h2>Suggestions</h2>
 <ul>{list}</ul>
</>
)
}
export default Suggestions;

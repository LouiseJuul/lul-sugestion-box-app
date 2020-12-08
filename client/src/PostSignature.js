import React, { useState } from 'react';

function PostSignature(props) {
	const {signature} = props;
	const [input, setInput] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	function onClick(event) {
		// TODO: Add signature using callback from props
		console.log("username", props.username);
		if (props.username === input) {
			props.postSignature(props.suggestion._id, input);
			setErrorMsg("");
		} else {
			const message = `${props.username} is not the same as ${input}`;
			console.log(message);
			setErrorMsg(message);
		}
	}

	

	function onChange(event) {
		setInput(event.target.value);
	}

	return (
		<>
			<p>{errorMsg}</p>
			<input onChange={onChange} value={signature} placeholder="Signature"/>
			<button onClick={onClick} type="submit">Add signature</button>
		</>
	)
}

export default PostSignature;
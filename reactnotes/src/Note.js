import React from "react";
import propTypes from "prop-types";

const Note = (props) => {
	return (
		<tr>
			<td>{props.title}</td>
			<td>{props.category}</td>
			<td>{props.content}</td>
			<td>
				{props.date.getDate()}.{props.date.getMonth() + 1}.
				{props.date.getFullYear()}
			</td>
		</tr>
	);
};

Note.propTypes = {
	title(props, propName) {
		if (props[propName].length < 3) {
			return new Error(propName + "was too short");
		}
	},
	category: propTypes.string.isRequired,
	content: propTypes.string.isRequired,
	date: propTypes.instanceOf(Date).isRequired,
};

Note.defaultProps = {
	title: "NoteTitle",
	category: "NoteCategory",
	content: "NoteContent",
	date: new Date(),
};
export default Note;

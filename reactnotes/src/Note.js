import React from "react";
import propTypes from "prop-types";
import * as Icon from "react-bootstrap-icons";

const Note = (props) => {
	return (
		<tr>
			<td style={{ verticalAlign: "middle" }}>{props.title}</td>
			<td className='justifyView' style={{ borderBottom: "none" }}>
				{props.category}
				{props.category === "To do" ? (
					<Icon.ListCheck size={66} />
				) : (
					<Icon.Textarea size={66} />
				)}
			</td>
			<td style={{ verticalAlign: "middle" }}>{props.content}</td>
			<td>
				<div className='justifyRow'>
					<div className='justifyColumn'>
						<div>
							<Icon.List size={30} color='green' className='Item' />
							<i>Detail</i>
						</div>
						<div styl={{ display: "block" }}>
							<Icon.Bell size={30} color='999900' className='Item' />
							<i>Remind</i>
						</div>
					</div>
					<div className='justifyColumn'>
						<div>
							<Icon.Pencil size={30} color='blue' className='Item' />
							<i>Edit</i>
						</div>
						<div styl={{ display: "block" }}>
							<Icon.Trash size={30} color='black' className='Item' />
							<i>Delete</i>
						</div>
					</div>
				</div>
			</td>
			<td>
				{props.date.getDate()}.{props.date.getMonth() + 1}.
				{props.date.getFullYear()}
			</td>
		</tr>
	);
};

// Note.propTypes = {
// 	title(props, propName) {
// 		if (props[propName].length < 3) {
// 			return new Error(propName + "was too short");
// 		}
// 	},
// 	category: propTypes.string.isRequired,
// 	content: propTypes.string.isRequired,
// 	date: propTypes.instanceOf(Date).isRequired,
// };

// Note.defaultProps = {
// 	title: "NoteTitle",
// 	category: "NoteCategory",
// 	content: "NoteContent",
// 	date: new Date(),
// };
export default Note;

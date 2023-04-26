import React from "react";
import { Table } from "react-bootstrap";
import Note from "./Note";

const noteList = [
	{
		title: "Go to the gym",
		category: "Hobby",
		content: "Leg day",
		date: new Date("2023-04-25"),
	},
	{
		title: "Go to the library",
		category: "Education",
		content: "Poetry",
		date: new Date("2023-04-26"),
	},
];
function Notes() {
	const header = <h3>List of notes</h3>;
	return (
		<div>
			{header}
			<Table striped bordered>
				<thead>
					<tr>
						<th>Title</th>
						<th>Category</th>
						<th>Content</th>
						<th>Date</th>
					</tr>
					{noteList.map((note, index) => {
						return (
							<Note
								title={note.title}
								category={note.category}
								content={note.content}
								date={note.date}
								key={index}
							/>
						);
					})}
				</thead>
				<tbody></tbody>
			</Table>
		</div>
	);
}

export default Notes;

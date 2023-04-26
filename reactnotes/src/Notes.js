import React from "react";
import { Table } from "react-bootstrap";
import Note from "./Note";

class Notes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			noteList: [
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
			],
		};
	}

	render() {
		return (
			<div>
				(<h3>List of notes</h3>)
				<Table striped bordered>
					<thead>
						<tr>
							<th>Title</th>
							<th>Category</th>
							<th>Content</th>
							<th>Date</th>
						</tr>
						{this.state.noteList.map((note, index) => {
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
					<tbody>
						<tr>
							<td colspan='5' style={{ textAlign: "center" }}>
								<i>
									<b>Add new note</b>
								</i>
							</td>
						</tr>
						<tr>
							<td>
								<input
									type='text'
									placeholder='Title of note'
									id='title'
									onChange={(e) => this.onChange(e)}
								/>
							</td>
							<td>
								<input
									type='text'
									list='categorylist'
									placeholder='Category of note'
									id='category'
									onChange={(e) => this.onChange(e)}
								/>
								<datalist id='categoryList'>
									<option>To do</option>
									<option>Hobby</option>
									<option>Work</option>
									<option>Study</option>
									<option>Gym</option>
									<option>Favourites</option>
								</datalist>
							</td>
							<td>
								{this.state.content !== "" ? (
									<Button variant='primary' onClick={() => onClick()}>
										Edit content
									</Button>
								) : (
									<Button variant='succes' onClick={() => onClick()}>
										Add content
									</Button>
								)}
							</td>
							<td></td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}

// function Notes() {
// 	const header = <h3>List of notes</h3>;
// 	return (
// 		<div>
// 			{header}
// 			<Table striped bordered>
// 				<thead>
// 					<tr>
// 						<th>Title</th>
// 						<th>Category</th>
// 						<th>Content</th>
// 						<th>Date</th>
// 					</tr>
// 					{noteList.map((note, index) => {
// 						return (
// 							<Note
// 								title={note.title}
// 								category={note.category}
// 								content={note.content}
// 								date={note.date}
// 								key={index}
// 							/>
// 						);
// 					})}
// 				</thead>
// 				<tbody></tbody>
// 			</Table>
// 		</div>
// 	);
// }

export default Notes;

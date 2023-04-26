import React from "react";
import { Table, Button } from "react-bootstrap";
import Note from "./Note";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

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

	onChange(e) {
		const name = e.target.id;
		this.setState({
			[name]: e.target.value,
		});
	}

	onClick() {
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div>
						<h1>Add content to note</h1>
						<p>
							<textarea
								cols='50'
								rows='10'
								id='content'
								defaultValue={this.state.content}
								onChange={(e) => this.onChange(e)}></textarea>
						</p>
						<Button
							style={{ float: "right" }}
							variant='danger'
							onClick={onClose}></Button>
					</div>
				);
			},
		});
	}

	addNote() {
		this.setState((state) => {
			const notes = state.noteList;
			const date = state.date === undefined ? "" : new Date(state.date);
			const time = state.time === undefined ? "" : state.time;
			if (state.category === "to do") {
				notes.push({
					title: state.title,
					category: state.category,
					content: state.content,
					date: date,
					time: time,
					status: false,
				});
			} else {
				notes.push({
					title: state.title,
					category: state.category,
					content: state.content,
					date: date,
					time: time,
					status: undefined,
				});
			}
			return { noteList: notes };
		});
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
									<Button variant='primary' onClick={() => this.onClick()}>
										Edit content
									</Button>
								) : (
									<Button variant='succes' onClick={() => this.onClick()}>
										Add content
									</Button>
								)}
							</td>
							<td>
								<input
									type='date'
									id='date'
									onChange={(e) => this.onChange(e)}
								/>
								<input
									type='time'
									id='time'
									onChange={(e) => this.onChange(e)}
								/>
							</td>
							<td>
								<Button variant='secondary' onClick={() => this.addNote()}>
									Add note
								</Button>
							</td>
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

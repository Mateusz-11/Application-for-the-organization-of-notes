import React from "react";

import { Table } from "react-bootstrap";

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
				</thead>
				<tbody>body</tbody>
			</Table>
		</div>
	);
}

export default Notes;

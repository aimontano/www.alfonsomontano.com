import React from "react";
import { CardPanel } from "react-materialize";
import ReactHtmlParser from "react-html-parser";

const jobSkills = require("./../skills.json");

// function gives a table layout of skills
// meaning you can add as many skills as you want to without
// having to manually add it yourself
const layout = type => {
	let html = "";
	for (let i = 0; i < jobSkills[type].length; i++) {
		html += `<tr>`;

		if (jobSkills["front-end"][i] === undefined) {
			html += "<td></td>";
		} else {
			html += `<td>${jobSkills["front-end"][i]}</td>`;
		}

		if (jobSkills["back-end"][i] === undefined) {
			html += "<td></td>";
		} else {
			html += `<td>${jobSkills["back-end"][i]}</td>`;
		}

		if (jobSkills["other"][i] === undefined) {
			html += "<td></td>";
		} else {
			html += `<td>${jobSkills["other"][i]}</td>`;
		}
		html += `</tr>`;
	}
	return html;
};

// this function checks which skillset has the most skills
// then calls layout function to loop through all of the skills and
// not miss any.
const displaySkills = () => {
	if (
		jobSkills["front-end"].length > jobSkills["back-end"].length &&
		jobSkills["front-end"].length > jobSkills["other"].length
	) {
		return layout("front-end");
	} else if (
		jobSkills["back-end"].length > jobSkills["front-end"].length &&
		jobSkills["back-end"].length > jobSkills["other"].length
	) {
		return layout("back-end");
	} else {
		return layout("other");
	}
};

const Skills = () => {
	return (
		<CardPanel>
			<h4>Skills</h4>
			<table className="responsive-table">
				<thead>
					<tr>
						<th>Front-End</th>
						<th>Back-End</th>
						<th>Other</th>
					</tr>
				</thead>
				<tbody>{ReactHtmlParser(displaySkills())}</tbody>
			</table>
		</CardPanel>
	);
};

export default Skills;

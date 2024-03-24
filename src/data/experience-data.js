const work_history_list = [
	{
		key: 0,
		position: "Props and Painting Assistant",
		company: "Emory University, Theatre Emory",
		date: "August 2022 - May 2023",
	},
	{
		key: 1,
		position: "Part-time Store Associate",
		company: "Khols",
		date: "June 2023 - July 2023",
	},
	{
		key: 2,
		position: "IT and Salesforce CRM Assistant",
		company: "Higher Education Resource Services (HERS)",
		date: "September 2023 - Present",
	},
	{
		key: 3,
		position: "Digital Marketing and Design Assistant",
		company: "University of Denver, School of Art and Art History",
		date: "September 2023 - Present",
	},
];

// copy the list, cut it to the first four entries, and reverse it
const most_recent_positions = work_history_list.slice(0, 4).reverse();

export default most_recent_positions;
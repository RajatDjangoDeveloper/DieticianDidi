/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Projects.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 20/04/2024
*/

import Works from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";

const Projects = () => {
	return (
		<div className="w-full flex justify-center" id="projects">
			<div className="w-full xl:w-[70%] flex flex-col pb-16">
				<div className="w-full ">
					<SectionTitle title="YUMMY OPTION.." subtitle="Personalised Diet Ke " />
				</div>
				<Works/>
			</div>
		</div>
	);
};

export default Projects;
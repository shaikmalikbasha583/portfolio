import React, { Component } from 'react';
import PROJECTS from '../../../data/projects';

const Project = props => {
	return (
		<div className='col col-md-3' style={{ marginTop: 2 }}>
			<div className='card'>
				<div className='card-header'>
					<h4 style={{ textAlign: 'center' }}>{props.projectDetails.title}</h4>
				</div>
				<div className='card-body'>
					<img
						src={props.projectDetails.image}
						alt='Project'
						width='100%'
						height='100'
					/>
				</div>
				<div className='card-footer'>
					<p>{props.projectDetails.description}</p>
					<a className='link' href={props.projectDetails.link}>
						Link
					</a>
				</div>
			</div>
		</div>
	);
};

class Projects extends Component {
	render() {
		const projectsWrapper = PROJECTS.map(project => (
			<Project key={project.id} projectDetails={project} />
		));
		return (
			<React.Fragment>
				<div className='row'>
					<div className='col-md-12'>
						<h3 style={{ textAlign: 'center' }}>Projects</h3>
					</div>
				</div>
				<div className='row' style={{ margin: 2 }}>
					{projectsWrapper}
				</div>
			</React.Fragment>
		);
	}
}

export default Projects;

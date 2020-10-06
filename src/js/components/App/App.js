import React, { Component } from 'react';
import Avatar from '../../../assets/photo.jpg';
import Projects from '../Projects/Projects';
import Profiles from '../Profiles/Profiles';
import { Link } from 'react-router';
import Header from '../Header/Header';

class App extends Component {
	state = {
		displayBio: false,
		toggleText: 'Read More.',
		toggleClassName: 'btn btn-success'
	};

	toggleBioData = () => {
		this.setState({
			displayBio: !this.state.displayBio,
			toggleText: this.state.displayBio ? 'Read More.' : 'Read Less',
			toggleClassName: this.state.displayBio
				? 'btn btn-success'
				: 'btn btn-primary'
		});
	};

	render() {
		const toggleButton = (
			<button
				onClick={this.toggleBioData}
				className={this.state.toggleClassName}>
				{this.state.toggleText}
			</button>
		);

		const bioData = (
			<div className='card' style={{ margin: 5 }}>
				<div className='card-body'>
					<p>
						My native place is Kurnool. I did certification for courses like
						JAVA, JAVASCRIPT, SQL, PHP, MYSQL, MONGODB, SPRING BOOT, NODE JS,
						FLASK, REACT JS.
					</p>
					{!this.state.toggleBioData ? toggleButton : null}
				</div>
			</div>
		);

		return (
			<div className='container'>
				<Header />
				<div style={{ textAlign: 'center' }}>
					<h1 className='text text-primary'>SHAIK MALIK BASHA</h1>
				</div>
				<div className='row justify-row-content'>
					<div className='col col-md-3' align='center'>
						<img
							src={Avatar}
							alt='Avatar'
							height='500'
							width='400'
							className='Avatar img img-thumbnail'
						/>
					</div>
					<div className='col col-md-9'>
						<div className='card'>
							<div className='card-body'>
								<p>
									Hi! I am <b>SHAIK MALIK BASHA</b> from Bangalore. I am working
									for&nbsp;
									<span className='office-name'>
										CoStrategix Technologies
									</span>{' '}
									as a Software Developer since Sep, 2019.
								</p>
								{!this.state.displayBio ? toggleButton : null}
							</div>
						</div>
					</div>
				</div>
				<div className='row justify-row-content'>
					<div className='col-md-12'>
						{this.state.displayBio ? bioData : null}
					</div>
				</div>
				<hr />
				<div className='projects-wrapper'>
					<Projects />
				</div>
				<hr />
				<div className='social-profile-wrapper'>
					<Profiles />
				</div>
			</div>
		);
	}
}

export default App;

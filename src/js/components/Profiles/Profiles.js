import React, { Component } from 'react';
import PROFILES from '../../../data/socialProfiles';

const Profile = props => {
	return (
		<span style={{ margin: 10 }}>
			<a href={props.profileDetails.link}>
				<img
					src={props.profileDetails.image}
					height='50'
					width='50'
					alt='Social Icon'
				/>
			</a>
		</span>
	);
};

class Profiles extends Component {
	render() {
		const profilesWrapper = PROFILES.map(profile => (
			<Profile key={profile.id} profileDetails={profile} />
		));
		return (
			<div className='row justify-row-content'>
				<div className='col-md-12' align='center'>
					<h3>Connect Me!</h3>
				</div>
				<div className='col-md-6 offset-md-3' align='center'>
					{profilesWrapper}
				</div>
			</div>
		);
	}
}

export default Profiles;

import React, { Component } from 'react';

const Joke = ({ joke }) => {
	const { setup, punchline } = joke;
	return (
		<p>
			{setup} <em>{punchline}</em>
		</p>
	);
};

class Jokes extends Component {
	state = { joke: '', jokes: '' };

	getRandomJoke = () => {
		let ONE_JOKE_URL = 'https://official-joke-api.appspot.com/random_joke';
		fetch(ONE_JOKE_URL)
			.then(res => res.json())
			.then(joke => {
				this.setState({ joke: joke });
			});
	};

	getTenJokes = () => {
		let URL = 'https://official-joke-api.appspot.com/random_ten';
		fetch(URL)
			.then(res => res.json())
			.then(jokes => {
				this.setState({ jokes: jokes });
			});
	};

	componentDidMount() {
		this.getRandomJoke();
	}

	render() {
		return (
			<div className='row justify-row-content'>
				<div className='col-md-8 offset-md-2' align='center'>
					<h3>Highlighted Joke</h3>
					{typeof this.state.joke === 'object' ? (
						<Joke joke={this.state.joke} />
					) : null}

					<button className='btn btn-info' onClick={this.getTenJokes}>
						Read 10 more jokes ?
					</button>
					{this.state.jokes.length > 0
						? this.state.jokes.map(joke => <Joke key={joke.id} joke={joke} />)
						: null}
				</div>
			</div>
		);
	}
}

export default Jokes;

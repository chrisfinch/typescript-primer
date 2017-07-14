/*
	Task:

	Create DeveloperPerson component that takes an additional string prop devSkill and prints out the extra line 'My developer skill is xxx'

	Add some developerPeople to the People component and display them

 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IPerson {
	firstName: string,
	lastName: string,
	age?: number
}

interface IPersonState {
	happy?: boolean
}

class Person extends React.Component<IPerson, IPersonState> {

	constructor (props: IPerson) {
		super(props);

		this.state = {
			happy: false
		}
	}

	_changeMood (event: React.SyntheticEvent<HTMLButtonElement>) {
		event.preventDefault();
		this.setState({
			happy: !this.state.happy
		});
	}

	render () {
		return (
			<div className="person">
				<p>My name is { this.props.firstName } { this.props.lastName }.</p>
				<p>I am { this.props.age ? this.props.age : 'unknown' } years old</p>
				<p>I am { this.state.happy ? 'happy' : 'sad' }</p>
				<button className="btn" onClick={ this._changeMood.bind(this) }>Change my mood</button>
				<hr/>
			</div>
		);
	}
}

interface IPeopleProps {
	people: Array<IPerson>
}

class People extends React.Component<IPeopleProps, null> {
	render () {
		return (
			<div className="people">

				<Person
				 	firstName="Chris"
					lastName="Finch"
					age={ 31 } />
				<hr/>

				{ this.props.people.map(person => (
					<Person {...person} />
				)) }
			</div>
		);
	}
}

const myPeople: Array<IPerson> = [{
	firstName: 'Andy',
	lastName: 'Gout'
},{
	firstName: 'Kirsten',
	lastName: 'Jones'
},
{
	firstName: 'Max',
	lastName: 'Mockett'
}]

ReactDOM.render(
	<People people={ myPeople } />
, document.querySelector('#mount'));

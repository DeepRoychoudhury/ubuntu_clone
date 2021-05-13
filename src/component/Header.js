import React,{Component} from 'react';
import './Header.css';

class Header extends Component {
	constructor(){
		super();
		this.state = {
			currentDateTime: Date().toLocaleString()
		}
	}

	render(){
		
		return(
				<div class="header">
					<p class="activities">Activities</p>
					<p class="datetime">{this.state.currentDateTime}</p>
				</div>
			)
	}
}

export default Header;
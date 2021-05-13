import React, {Component} from 'react';
import './Leftfooter.css';
import terminal from '../images/terminal.png';
import options from '../images/options.JPG';
import mozilla from '../images/mozilla.jpg';
import libreofficewriter from '../images/LibreOfficeWriter.JPG';
import folder from '../images/folder.JPG';

class Leftfooter extends Component {
	handleHover(x){
		console.log("mouseover");
	}

	exitHover(){
		console.log("mouseout");
	}

	render(){
		return(
				<div class="leftfoot">
						<a href="blank" onMouseEnter={this.handleHover(this)} onMouseLeave={this.exitHover}>
							<img src={terminal} alt="terminal"/>
						</a>
						<a href="blank">
							<img src={mozilla} alt="terminal"/>
						</a>
						<a href="blank">
							<img src={folder} alt="terminal"/>
						</a>
						<a href="blank">
							<img src={libreofficewriter} alt="terminal"/>
						</a>
						<a href="blank" class="options">
							<img src={options} alt="terminal"/>
						</a>
				</div>
			)
	}
}

export default Leftfooter;
import React, {Component} from 'react';
import './Leftfooter.css';
import terminal from '../images/terminal.png';
import options from '../images/options.JPG';
import mozilla from '../images/mozilla.jpg';
import libreofficewriter from '../images/LibreOfficeWriter.JPG';
import folder from '../images/folder.JPG';

class Leftfooter extends Component {
	render(){
		return(
				<div class="leftfoot">
						<a href="blank" class="terminal">
							<img src={terminal} alt="terminal"/>
						</a>
						<a href="blank" class="mozilla">
							<img src={mozilla} alt="mozilla"/>
						</a>
						<a href="blank" class="folder">
							<img src={folder} alt="folder"/>
						</a>
						<a href="blank" class="libreofficewriter">
							<img src={libreofficewriter} alt="libreofficewriter"/>
						</a>
						<a href="blank" class="options">
							<img src={options} alt="options"/>
						</a>
				</div>
			)
	}
}

export default Leftfooter;
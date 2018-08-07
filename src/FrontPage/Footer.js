import React, {Component} from 'react';

const footer = {
    background: "#000000",
    maxWidth: "100%",
    height: "20vh",
    textAlign: "center"
};

class Footer extends Component {
    render(){
	return(
		<div style={footer}>
		<br />
		<div id="socials" style={{display: "inline-block"}}>

	    	<div style={{padding: "15px", width: "30px", float: "left"}}>
		<a href="mailto:info@turninggreen.org">
		<img src="http://1dr23q1tgf6x1t225i3op1pf.wpengine.netdna-cdn.com/wp-content/themes/TurningGreen/images/Mail-icon.svg" alt="Email"/>
		</a>
		</div>
	    
		<div style={{padding: "15px", width: "30px", float: "left"}}>
		<a href="https://twitter.com/turninggreenorg">
		<img src="http://1dr23q1tgf6x1t225i3op1pf.wpengine.netdna-cdn.com/wp-content/themes/TurningGreen/images/Twitter-icon.svg" alt="twitter"/> </a>
		</div>
		
		<div style={{float: "left", padding: "15px", width: "30px"}}>
		<a href="https://www.instagram.com/turninggreenorg/">
		<img src="http://1dr23q1tgf6x1t225i3op1pf.wpengine.netdna-cdn.com/wp-content/themes/TurningGreen/images/Instagram-icon.svg" alt="Instagram"/> </a>
		</div>

	    	<div style={{float: "left", padding: "15px", width: "30px"}}>
		<a href="https://www.facebook.com/TGreenOrg/">
		<img src="http://1dr23q1tgf6x1t225i3op1pf.wpengine.netdna-cdn.com/wp-content/themes/TurningGreen/images/FB-icon.svg" alt="Facebook"/>
		</a>
		</div>
	    
	    	<div style={{float: "left", padding: "15px", width: "30px"}}>
		<a href="https://www.pinterest.com/teensturngreen/">
		<img src="http://1dr23q1tgf6x1t225i3op1pf.wpengine.netdna-cdn.com/wp-content/themes/TurningGreen/images/Pinterest-icon.svg" alt="Pinterest"/>
		</a>
		</div>

	    	<div style={{float: "left", padding: "15px", width: "30px"}}>
		<a href="https://www.youtube.com/user/TeensTurningGreen">
		<img src="http://1dr23q1tgf6x1t225i3op1pf.wpengine.netdna-cdn.com/wp-content/themes/TurningGreen/images/YouTube-icon.svg" alt="YouTube"/>
		</a>
		</div>

		</div>
		</div>
	);
    }
}

export default Footer;

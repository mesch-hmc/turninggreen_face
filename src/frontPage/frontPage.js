import React, { Component } from 'react';
import {Dashboard, About, Welcome, MenuBar, Interested} from './components/components.js';
import styles from './components/style.css';
class FrontPage extends Component {
  render() {
    return (
      <div>
      <MenuBar />
      <Welcome/>
      <span id="aboutAnchor" className={styles.pageAnchor}></span>
      <About />
      <span id="dashboardAnchor" className={styles.pageAnchor}></span>
      <Dashboard />
      <span id="interestedAnchor" className={styles.pageAnchor}></span>
      <Interested />
      </div>
    );
  }
}

export default FrontPage;

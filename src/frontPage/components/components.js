import React, { Component } from 'react';
import styles from './style.css';
import testimg from './../images/plant.jpeg';
import classNames from 'classnames';


/*
  Helper componets. Basically anything that repeats itself.
*/
class DashboardPanel extends Component {
  render() {
    return (
      <div className={classNames(styles.panel, styles.fade)} id={this.props.id}>
        <div className={styles.panelImg}>
          <img src={testimg} />
        </div>
        <div className={styles.panelText}>
          <h3>{this.props.title}</h3>
          <p>
            Lorem ipsum dolor sit amet, quod vocent definiebas mei in,
             melius maiorum salutandi nec in. Sea nulla neglegentur eu,
             nostrud.
          </p>
        </div>
      </div>
    );
  }
}

/*
  Screens as I call them, or sections.
*/
// The welcome jumbotron. Not much now, but we can add more
class Welcome extends Component {
  render() {
    return (
      <div id={styles.welcomeScreen} className={styles.fullScreen}>
        <div className={styles.screenWrapper}>
          <div className={styles.screenContent}>
            <h1>Project Green Challenge</h1>
            <p>
              Lorem ipsum dolor sit amet, sed cu brute soleat, laoreet platonem et
              nam. At his eleifend constituto, et verear hendrerit scripserit vis.
            </p>
            <a className={styles.actionButton}>Get Started</a>
          </div>
        </div>
      </div>
    );
  }
}


class MenuBar extends Component {

  render() {
    return (
      <div id={styles.navbar}>
        <ul className={styles.navbarList}>
        <li><a href="#welcomeScreen">My Footprint</a></li>
        <li><a href="#aboutAnchor">About</a></li>
        <li><a href="#dashboardAnchor">What/How</a></li>
        <li><a href="#interestedAnchor">Contact Us</a></li>
        <li><a href="#">Login/Register</a></li>
        </ul>
      </div>
    );
  }
}

// About screen. Has image in left column, text in right
class About extends Component {
  render() {
    return (
      <div id={styles.aboutScreen} className={styles.fullScreen}>
        <div className={styles.screenWrapper}>
          <div className={styles.screenContent} id={styles.aboutContent}>
            <div id={styles.aboutImageCont}>
              <img id={styles.aboutImage} src={testimg} />
            </div>
            <div id={styles.aboutTextCont}>
              <h3 id={styles.aboutTitle}>About</h3>
              <p>
                Lorem ipsum dolor sit amet, sed cu brute soleat, laoreet platonem et
                 nam. At his eleifend constituto, et verear hendrerit scripserit vis.
                  Et illud adolescens sea, sit at sanctus volutpat aliquando.
                  At aperiri appellantur disputationi pri, in cum graeci audire,
                   ei eos rebum laudem eligendi. Eos no dicat volumus fabellas.
              </p>
              <p>
                Alia diceret id eam, per eros timeam an. Nulla antiopam mea ad,
                sit cu reque platonem. No utinam offendit nec, in augue nihil qui,
                 quo nibh vivendum scripserit ne. Amet falli elitr eu vis.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// Dashboard carousel. Uses DashboardPanels to populate
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: null,
      panels: null,
      dots: null
      // titles: Array(4).fill(null),
      // classes: Array(4).fill(null)
    };
  }

  setIndex(n) {
    this.setState(
      {slideIndex : n},
      () => {
        this.showSlides();
    });
  }
  navigate(n) {
    this.setIndex(this.state.slideIndex + n);
  }

  currentSlide(n) {
    this.setIndex(n);
  }

  renderDashboard(i) {
    return (
      <DashboardPanel
            title={this.state.titles[i]}
            style={this.state.displays[i]}
            class={this.state.classes[i]} />
    );
  }
  showSlides() {

      if (this.state.panels === null || this.state.panels.length === 0) {
        return;
      }
      if (this.state.slideIndex > this.state.panels.length) {
        this.setIndex(1);
        return;
      }
      if (this.state.slideIndex < 1)  {
        this.setIndex(4);
        return;
      }
      for (var i=0; i < 4; i++) {
        this.state.panels[i].style.display = "none";
      }
      for (var i=0; i < 4; i++) {
        this.state.dots[i].classList.remove(styles.active);
      }
      this.state.panels[this.state.slideIndex-1].style.display = "flex";
      this.state.dots[this.state.slideIndex -1].classList.add(styles.active);
  }

  componentDidMount() {
    var ids = ["dash","theme","challenge","reward"];
    var panelTemps = [];
    for (var i=0;i<ids.length;i++) {
      panelTemps.push(document.getElementById(ids[i]));
    }
    this.setState(
          {
            slideIndex : 1,
            panels: panelTemps,
            dots:   document.querySelectorAll("span")
          },
          () => {
            this.showSlides(1);
    });

  }
  render() {

    return (
      <div id={styles.dashboardScreen} className={styles.fullScreen}>
        <div className={styles.screenWrapper}>
          <div className={styles.screenContent}>
            <div className={styles.carouselDiv}>
              <DashboardPanel title="Dashboard" id="dash"/>
              <DashboardPanel title="Themes" id="theme"/>
              <DashboardPanel title="Challenges" id="challenge"/>
              <DashboardPanel title="Reward" id="reward"/>
              <a className={styles.prev} onClick={() => this.navigate(-1)}>&#10094;</a>
              <a className={styles.next} onClick={() => this.navigate(1)}>&#10095;</a>
            </div>
            <br/>
            <div className={styles.carouselDots}>
              <span className={styles.dot} onClick={() => this.currentSlide(1)}></span>
              <span className={styles.dot} onClick={() => this.currentSlide(2)}></span>
              <span className={styles.dot} onClick={() => this.currentSlide(3)}></span>
              <span className={styles.dot} onClick={() => this.currentSlide(4)}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Interested extends Component {
  render() {
    return (
      <div id={styles.interestedScreen} className={styles.fullScreen}>
        <div className={styles.screenWrapper}>
          <div className={styles.screenContent}>
          <h3>Interested in out Mission?</h3>

          <a class={styles.actionButton} href="#" id={styles.signUpButton}>Sign Up</a>
          <br/>
          <a href="#" id={styles.returningUser}>Already have an account? Sign in here.</a>
          </div>
        </div>
      </div>
    );
  }

}
// export default Dashboard;
module.exports = {
  MenuBar: MenuBar,
  Welcome: Welcome,
  About: About,
  Dashboard: Dashboard,
  Interested: Interested
}

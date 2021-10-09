import React, {useState} from 'react';
import {BrowserRouter as Router, Link } from "react-router-dom";

import {Navbar, Container, Nav, } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import classNames from "classnames";

import '../styles/App.scss';

const App = () => {
  const [counter, setcount] = useState(3999);
  const [numberActive, setNumberActive] = useState(1);

  // const myRef = useRef(null);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     setOffset(window.pageYOffset);
  //     let offsetTop  = myRef.current.offsetTop;
  //     setOffsetR(offsetTop);
  //     if( offset > offsetR){
  //       console.log('should focus');
  //       setFocus(true);
  //       handleClick();
  //
  //     }
  //   }
  // }, [offset, handleClick]);
  // const handleClick = () => {
  //   myRef.current.focus();
  // }

  const reduceCounter = () => {
    setcount((counter)=> counter - 1);
  }

  const setActiveRoadMap = (id) => {
    setNumberActive((numberActive)=> id);
  }

  return (
      <Router>
        <div className="app-titanz">
          {/*Header*/}
          <Navbar className="app-header sticky-header fixed-top px-4 ">
            <Container>
              <div className="header-content">
                <Navbar.Brand href="/">
                  <img src='/assets/images/logo.svg'/>
                </Navbar.Brand>
                {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                <Navbar.Collapse className="right-menu" id="basic-navbar-nav">
                  <Nav className="center-menu">
                    <Nav.Link href="#roadmap">RoadMap</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                  <div className="power-by">
                    <span>Powered By </span>
                    <img src='/assets/images/logo-s.svg'/>
                  </div>
                </Navbar.Collapse>
              </div>
            </Container>
            <div className="header-ribbon">
              Minting one each for 2 solana : <span> {counter} </span>Remaing Hurry up !
            </div>
          </Navbar>
          {/*Hero*/}
          <section className="hero-section">
            <Container>
              <div className="hero-left">
                <div>
                  <h2 className="hero-title">
                    {counter} randomly
                    generative
                    art minting at 3 solana
                  </h2>
                  <div className="hero-cta">
                    <button className="btn btn-titanz" onClick={() => reduceCounter()}>Mint for 2 Sol</button>
                  </div>
                  <p className="hero-description">
                    Reload your browser when you first
                    connect your wallet
                  </p>
                </div>

              </div>
              <div className="hero-right">
                <img src='/assets/images/hero-1.jpg' className="hero-img"/>
                <div className="hero-label">
                  <p className="hero-brand">
                    Titanz
                  </p>
                  <p className="series">
                    <span>Series 2 Presale</span>
                    <span> : 08 OCT 2021</span>
                  </p>
                </div>
              </div>
            </Container>
          </section>
          {/*Exchange Section*/}
          <section className="exchange-section">
            <Container>
              <div className="exchange-section__content">
                <div className="exchange-section__label">
                  <p className="ex-label">
                    Exchange here
                  </p>
                  <h3>
                    You can list your mints at this exchanges
                  </h3>
                </div>
                <div className="exchange-section__logo">
                  <Link to="/" className="logo-item">
                    <img src='/assets/images/fantom-logo.svg'/>
                  </Link>
                  <Link to="/" className="logo-item">
                    <img src='/assets/images/csu.svg'/>
                  </Link>
                  <Link to="/" className="logo-item">
                    <img src='/assets/images/fantom-logo.svg'/>
                  </Link>
                  <Link to="/" className="logo-item">
                    <img src='/assets/images/csu.svg'/>
                  </Link>
                </div>
              </div>
            </Container>
          </section>
          {/*Road map Section*/}
          <section autoFocus className={classNames(`roadmap-section`)} id="roadmap">
            <Container>
              <h3 className="roadmap-section__title">
                2021 Road Map
              </h3>
              <div className="roadmap-section__content">
                <div className="roadmap-section__in">
                  <div className="roadmap-id">
                      <div className="roadmap-ct">
                        <ul className="ul ul-roadmap">
                          <li className={classNames(`roadmap-item ${numberActive === 1 ? "active" : ""}`)}  onClick={() => setNumberActive(1)}>
                            Phase 1
                          </li>
                          <li className={classNames(`roadmap-item ${numberActive === 2 ? "active" : ""}`)}  onClick={() => setNumberActive(2)}>
                            Phase 2
                          </li>
                          <li className={classNames(`roadmap-item ${numberActive === 3 ? "active" : ""}`)}  onClick={() => setNumberActive(3)}>
                            Phase 3
                          </li>
                          <li className={classNames(`roadmap-item ${numberActive === 4 ? "active" : ""}`)}  onClick={() => setNumberActive(4)}>
                            Phase 4
                          </li>
                          <li className={classNames(`roadmap-item ${numberActive === 5 ? "active" : ""}`)}  onClick={() => setNumberActive(5)}>
                            Phase 5
                          </li>
                          <li className={classNames(`roadmap-item ${numberActive === 6 ? "active" : ""}`)}  onClick={() => setNumberActive(6)}>
                            Phase 6
                          </li>
                          <li className={classNames(`roadmap-item ${numberActive === 7 ? "active" : ""}`)}  onClick={() => setNumberActive(7)}>
                            Phase 7
                          </li>
                          <li className={classNames(`roadmap-item ${numberActive === 8 ? "active" : ""}`)}  onClick={() => setNumberActive(8)}>
                            Phase 8
                          </li>
                        </ul>
                      </div>
                  </div>
                  <div className="roadmap-detail">
                    <div className="roadmap-ct">
                      <ul className="ul ul-roadmap-detail">
                        <li className={classNames(`roadmap-detail-item ${numberActive === 1 ? "active" : ""}`)}>
                          <p className='rm-lbl'>Announce Series Metrics</p>
                          <p>Genesis - 4,444. Series 2.0 - 2,222. Series 3.0 - 1,111. Series 4.0 - 420. To access Series 2.0 private sale you must own a Genesis. To access Series 3.0 private sale you must own Genesis & 2.0. To access Series 4.0 you must own Genesis, 2.0 and 3.0.</p>
                        </li>
                        <li className={classNames(`roadmap-detail-item ${numberActive === 2 ? "active" : ""}`)}>
                          <p className='rm-lbl'>Announce Series Metrics 2</p>
                          <p>Genesis - 4,444. Series 2.0 - 2,222. Series 3.0 - 1,111. Series 4.0 - 420. To access Series 2.0 private sale you must own a Genesis. To access Series 3.0 private sale you must own Genesis & 2.0. To access Series 4.0 you must own Genesis, 2.0 and 3.0.</p>
                        </li>
                        <li className={classNames(`roadmap-detail-item ${numberActive === 3 ? "active" : ""}`)}>
                          <p className='rm-lbl'>Announce Series Metrics 3</p>
                          <p>Genesis - 4,444. Series 2.0 - 2,222. Series 3.0 - 1,111. Series 4.0 - 420. To access Series 2.0 private sale you must own a Genesis. To access Series 3.0 private sale you must own Genesis & 2.0. To access Series 4.0 you must own Genesis, 2.0 and 3.0.</p>
                        </li>
                        <li className={classNames(`roadmap-detail-item ${numberActive === 4 ? "active" : ""}`)}>
                          <p className='rm-lbl'>Announce Series Metrics 4</p>
                          <p>Genesis - 4,444. Series 2.0 - 2,222. Series 3.0 - 1,111. Series 4.0 - 420. To access Series 2.0 private sale you must own a Genesis. To access Series 3.0 private sale you must own Genesis & 2.0. To access Series 4.0 you must own Genesis, 2.0 and 3.0.</p>
                        </li>
                        <li className={classNames(`roadmap-detail-item ${numberActive === 5 ? "active" : ""}`)}>
                          <p className='rm-lbl'>Announce Series Metrics 5</p>
                          <p>Genesis - 4,444. Series 2.0 - 2,222. Series 3.0 - 1,111. Series 4.0 - 420. To access Series 2.0 private sale you must own a Genesis. To access Series 3.0 private sale you must own Genesis & 2.0. To access Series 4.0 you must own Genesis, 2.0 and 3.0.</p>
                        </li>
                        <li className={classNames(`roadmap-detail-item ${numberActive === 6 ? "active" : ""}`)}>
                          <p className='rm-lbl'>Announce Series Metrics 6</p>
                          <p>Genesis - 4,444. Series 2.0 - 2,222. Series 3.0 - 1,111. Series 4.0 - 420. To access Series 2.0 private sale you must own a Genesis. To access Series 3.0 private sale you must own Genesis & 2.0. To access Series 4.0 you must own Genesis, 2.0 and 3.0.</p>
                        </li>
                        <li className={classNames(`roadmap-detail-item ${numberActive === 7 ? "active" : ""}`)}>
                          <p className='rm-lbl'>Announce Series Metrics 7</p>
                          <p>Genesis - 4,444. Series 2.0 - 2,222. Series 3.0 - 1,111. Series 4.0 - 420. To access Series 2.0 private sale you must own a Genesis. To access Series 3.0 private sale you must own Genesis & 2.0. To access Series 4.0 you must own Genesis, 2.0 and 3.0.</p>
                        </li>
                        <li className={classNames(`roadmap-detail-item ${numberActive === 8 ? "active" : ""}`)}>
                          <p className='rm-lbl'>Announce Series Metrics 8</p>
                          <p>Genesis - 4,444. Series 2.0 - 2,222. Series 3.0 - 1,111. Series 4.0 - 420. To access Series 2.0 private sale you must own a Genesis. To access Series 3.0 private sale you must own Genesis & 2.0. To access Series 4.0 you must own Genesis, 2.0 and 3.0.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          {/* Follow  Section*/}
          <section className="social-section">
            <Container>
              <h3 className="social-section__title">
                Follow us on twitter
              </h3>
              <div className="social-section__content">
                <div className="social-section__in">
                  <div className="social-section__item">
                    <img src='/assets/images/api.jpg' className="social-name"/>
                  </div>
                  <div className="social-section__item">
                    <img src='/assets/images/api.jpg' className="social-name"/>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          {/*FAQ Section*/}
          <section className="faq-section" id="faq">
            <Container>
              <div className="faq-section__content">
                <div className="faq-section__label">
                  <p className="ex-label">
                    Exchange here
                  </p>
                  <h3>
                    Frequently asked questions
                  </h3>
                </div>
                <div className="faq-section__faq">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>How many titans will be released</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Is Every Titan Unique</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>What is the Minting cost</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Add more</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Container>
          </section>
          <div className="app-footer">
            <Container>
              <span>Powered by Solana and Metaplex</span>
              <div className="footer-social">
                <Link to='/'>
                  <img src='/assets/images/social-1.svg'/>
                </Link>
                <Link to='/'>
                  <img src='/assets/images/social-2.svg'/>
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </Router>

  );
};

export default App;

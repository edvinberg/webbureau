import React, {Component} from 'react';
import logo from './logotype.png';
import aboutus from './about-us.jpeg';
import inico from './inico.png';
import './App.css';
import Scroll from 'react-scroll-to-element';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="container header" id="header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className="App-intro-container">
                            <div className="App-title">turdweb.</div>
                            {/*<div className="App-subtitle">STOCKHOLM|UPPSALA</div>*/}
                            <p >Hemsidor åt små företag och privatpersoner</p>
                        </div>
                        <Scroll type="class" element="full" offset={0} timeout={0}>
                            <a>
                                <div className="arrow"></div>
                            </a>
                        </Scroll>
                    </div>
                </header>
                <div className="full container" id="full">
                    <div className="info-box">
                        <div className="info-box--title">Vad</div>
                        <p>Att skapa en hemsida behöver varken vara dyrt eller krångligt,
                            vi har en dialog som alla begriper. <br />
                            Har du en egen idé eller skiss på en hemsida?
                            Vi kan hjälpa dig att
                            bygga den.<br />
                            Allt går att fixa!
                            Vi arbetar tillsammans tills NI är nöjda.<br /><br />
                            <hr />
                            Ingen fara om ni inte själva har bilden klar för er hur ni vill att er sida ska se ut, vi hjälper givetvis till med all vår kunskap och erfarenhet!
                            <hr />
                            <br />
                            <strong>Exempel på tidigare samarbeten</strong>
                            <a href="http://www.sticksparet.se">
                                <div className="App-subtitle">www.sticksparet.se</div>
                            </a>
                            <a href="http://www.sticksparetdesignbutik.se">
                                <div className="App-subtitle">www.sticksparetdesignbutik.se</div>
                            </a>
                            <a href="http://www.vinterdagen.se">
                                <div className="App-subtitle">www.vinterdagen.se</div>
                            </a>
                            <a href="http://www.dagghätta.se">
                                <div className="App-subtitle">www.dagghätta.se</div>
                            </a>

                            <a href="http://www.vespr.se">
                                <div className="App-subtitle">www.vespr.se</div>
                            </a>
                            <a href="https://www.cigbuster.com">
                                <div className="App-subtitle">www.cigbuster.com</div>
                            </a>
                        </p>


                    </div>
                    <Scroll type="class" element="pricing" offset={0} timeout={0}>
                        <a>
                            <div className="arrow"></div>
                        </a>
                    </Scroll>
                </div>
                <div className="pricing container" id="pricing">
                    <div className="speech-bubble">
                        <div className="info-box--title">Pris</div>

                        <p>
                            <strong>Startkostnad</strong> Från 3000kr exkl.moms (registrering och uppbyggnad
                            av er hemsida)<br/>
                            <strong>Därefter</strong> 300kr exkl.moms i månaden för drift och support
                            inkl allt som krävs för att hålla igång din webbplats<br /><br />
                            <div className="App-subtitle"> <strong>* Arbete</strong> utöver vanlig drift och underhåll faktureras enligt överenskommelse</div>

                        </p>
                    </div>
                    <Scroll type="class" element="about" offset={0} timeout={0}>
                        <a>
                            <div className="arrow"></div>
                        </a>
                    </Scroll>

                </div>

                <div className="about container" id="about">
                    <div className="info-box">
                        <div className="info-box--title">Vilka är vi</div>
                        <p>
                            <strong>David Berg </strong>
                            <a href="https://se.linkedin.com/in/dabersign" target="_blank" rel="noopener noreferrer"><img className="small-ico" alt="linkedIn" src={inico}  /></a>
                            <br />Jag är en löparnörd som har ett öga för design och innovation. Har en drivkraft att utveckla idéer och presentera förslag från ett annat perspektiv

                            <br/>
                            <strong>Edvin Berg </strong>
                            <a href="https://www.linkedin.com/in/edvin-berg-8319b0ab/"  target="_blank" rel="noopener noreferrer"><img className="small-ico" alt="linkedIn" src={inico}  /></a>
                            <br />Jag är en systemutvecklare som alltid vill skapa värde och möjligheter genom digitala lösningar
                            <br /><br />
                            <img src={aboutus} className="img-about" alt="about-img" />
                        </p>
                    </div>
                    <Scroll type="class" element="footer" offset={0} timeout={0}>
                        <a>
                            <div className="arrow"></div>
                        </a>
                    </Scroll>
                </div>
                <footer>
                    <div className="footer container" id="footer">
                        <div className="App-intro-container">
                            <div className="App-title">kontakt</div>
                            {/*<div className="App-subtitle">STOCKHOLM|UPPSALA</div>*/}
                            <p className="App-subtitle">STOCKHOLM|UPPSALA </p>
                            <p className="App-subtitle"><strong>E-POST </strong> info@turdweb.se</p>
                            <p className="App-subtitle"><strong>TEL </strong> 076-340 32 38</p>
                        </div>
                        <Scroll type="class" element="header" offset={0} timeout={0}>
                            <a>
                                <div className="reversed-arrow"></div>
                            </a>
                        </Scroll>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
import React from 'react';
import Scroll from "react-scroll-to-element";
// import logo from '../logotype.png';
import logo from '../xturd.png';
import logo2 from '../turdlog2.png';
import aboutus from '../about-us.jpeg';
import inico from '../inico.png';
import '../App.css';

const Start = (props) => {

    return (
        <div>
            <header className="App-header">
                <div className="container header" id="header">

                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="App-intro-container">
                        <img src={logo2} className="App-logo-title" alt="logo"/>
                        {/*<div className="App-title">*/}
                            {/*/!*<img src={tl} alt="logo" style={{ width: '140px' margin-bottom:'-25px'}}/>*!/*/}
                            {/*<div className="App-title">turdweb.</div>*/}
                        {/*</div>*/}
                        {/*<div className="App-subtitle">STOCKHOLM|UPPSALA</div>*/}
                        <p>Hemsidor åt företag och privatpersoner</p>
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
                    <div className="info-box--title">Vad gör turdweb?</div>
                    <p>Att skapa en hemsida behöver varken vara dyrt eller krångligt,
                        vi har en dialog som alla begriper. <br/><br/>
                        Har du en egen idé eller skiss på en hemsida?<br/>
                        Vi kan hjälpa dig att
                        bygga den, allt går att fixa!
                        Vi arbetar tillsammans tills ni är nöjda.<br/><br/>

                        Hör av er om ni vill veta vad vi kan göra för just dig eller ditt företag! <br/>
                        <span className="App-subtitle"><strong>E-POST </strong> info@turdweb.se</span>
                    </p>
                        <hr/>
                    <p>
                        <br/>
                        <strong>Exempel på tidigare samarbeten</strong><br/><br/>
                        <a className="animated--link" href="http://www.dagghätta.se">
                            <span className="App-subtitle">www.dagghätta.se</span><br />
                        </a><br />
                        <a className="animated--link" href="http://www.uppsalacity.se">
                            <span className="App-subtitle">www.uppsalacity.se</span><br />
                        </a><br />
                        <a className="animated--link" href="http://www.vinterdagen.se">
                            <span className="App-subtitle">www.vinterdagen.se</span><br />
                        </a><br />
                        <a className="animated--link" href="http://www.sticksparet.se">
                            <span className="App-subtitle">www.sticksparet.se</span><br />
                        </a><br />
                        <a className="animated--link" href="http://www.vespr.se">
                            <span className="App-subtitle">www.vespr.se</span><br />
                        </a><br />
                        <a className="animated--link" href="https://www.cigbuster.com">
                            <span className="App-subtitle">www.cigbuster.com</span><br />
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
                    <div className="info-box--title">Ny hemsida</div>

                    <p>
                        <strong>Startkostnad</strong> Från 10.000kr exkl.moms (registrering och uppbyggnad
                        av er hemsida).<br/><br/>
                        <strong>Därefter</strong> 400kr exkl.moms i månaden för drift och support
                        inkl allt som krävs för att hålla igång din webbplats.<br/><br/>
                        Eventuella omtag på design debiteras per timme.<br/><br/>
                        <span className="App-subtitle"><strong>* Arbete</strong> utöver vanlig drift och underhåll
                            faktureras enligt överenskommelse.
                        </span>

                    </p>
                </div>
                <Scroll type="class" element="pricing-1" offset={0} timeout={0}>
                    <a>
                        <div className="arrow"></div>
                    </a>
                </Scroll>
            </div>

            <div className="pricing-1 container" id="pricing-1">
                <div className="speech-bubble-simple">
                    <div className="info-box--title">Enkel hemsida</div>
                    <div className="App-subtitle"><strong><p>* Vårat populäraste paket!</p></strong>
                    </div>
                    <p>
                        Vi utgår från en färdig design och sätter upp en enkel hemsida.
                        Passar er som vill ha en hemsida med kontaktuppgifter, öppettider, digitalt cv för jobbsök,
                        information om bröllopet etc.
                        <br/><br/> <strong>Hemsidan</strong> sätts upp så ni enkelt kan arbeta vidare på den och själva
                        uppdatera innehållet.<br/><br/>
                        <strong>Totalkostnad</strong> 4.000kr exkl.moms (registrering och uppbyggnad
                        av er hemsida).<br/><br/>
                        <strong>Därefter</strong> 300kr exkl.moms i månaden för drift och support
                        inkl allt som krävs för att hålla igång din webbplats.<br/>


                    </p>
                </div>
                <Scroll type="class" element="pricing-2" offset={0} timeout={0}>
                    <a>
                        <div className="arrow"></div>
                    </a>
                </Scroll>
            </div>
            <div className="pricing-2 container" id="pricing-2">
                <div className="speech-bubble-service">
                    <div className="info-box--title">Uppdateringar och underhåll</div>

                    <p>Vi hjälper er att komma igång, uppdatera, designa om eller byta innehåll på er nuvarande
                        webbplats.

                        <br/><br/>
                        <strong>Inte nöjd med nuvarande lösning?</strong> Vi flyttar er webbplats och tar över ansvaret
                        för drift och underhåll.
                        <br/><br/>
                        <span className="App-subtitle"><strong>Timpris</strong> 500kr exkl.moms
                            <br/>
                            <strong>Därefter</strong> 400kr exkl.moms i månaden
                        </span>

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
                        <a href="https://se.linkedin.com/in/dabersign" target="_blank" rel="noopener noreferrer"><img
                            className="small-ico" alt="linkedIn" src={inico}/></a>
                        <br/>Jag är en löparnörd som har ett öga för design och innovation

                        <br/>
                        <br/>
                        <strong>Edvin Berg </strong>
                        <a href="https://www.linkedin.com/in/edvin-berg-8319b0ab/" target="_blank"
                           rel="noopener noreferrer"><img className="small-ico" alt="linkedIn" src={inico}/></a>
                        <br/>Jag är en systemutvecklare som alltid vill skapa värde och möjligheter genom digitala
                        lösningar
                        <br/><br/>
                        <img src={aboutus} className="img-about" alt="about-img"/>
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
    )
};


export default Start;
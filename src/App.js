import React, {Component} from 'react';
import logo from './logotype.png';
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
                            Vi arbetar tillsammans tills NI är nöjda.
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
                            <div className="App-subtitle"> <strong>* Arbete</strong> utöver vanlig drift och underhåll faktureras enligt överenskomelse</div>

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
                        <p> </p>
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
                            <p className="App-subtitle"><strong>TEL </strong> 070707070707</p>
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
{/*<p>Från 20.000 kr (samt månadskostnad för drift och support)*/}
{/*Mallbaserad design som webbdesigner anpassar efter önskemål.*/}
{/*Webbdesigner skapar ett fast antal sidor (ofta runt 10 st) samt lägger in dina texter och*/}
{/*bilder.*/}
{/*Lite mer avancerade funktioner.*/}
{/*Valfri ledig .se-domän (www.dittforetag.se).*/}
{/*Ett antal e-postkonton till de anställda (info@dittforetag.se, simon@dittforetag.se etc.).*/}
{/*Fri support via e-post och eventuellt telefon.*/}
{/*Enklare sökmotoroptimering av webbdesigner.*/}
{/*Vad kostar en hemsida?*/}

{/*Från 50.000 (samt månadskostnad)*/}
{/*Unik design skapad från scratch.*/}
{/*Webbdesigner skapar det antalet sidor du behöver samt lägger in innehåll.*/}
{/*Någon skriver ett antal texter samt eventuellt tar bilder.*/}
{/*Avancerade funktioner och eventuellt skräddarsydd programmering av webbutvecklare.*/}
{/*Valfri domän samt e-postkonton.*/}
{/*Fri support via e-post och telefon.*/}
{/*Mer avancerad sökmotoroptimering (upprepad sökmotoroptimering ger högre månadskostnad).*/}
{/*</p>*/}
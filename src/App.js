import './App.css';

import Twemoji from 'react-twemoji';
import Icon from './component/Icon';
import Container from "./component/Container";
import ChildDiv from "./component/ChildDiv";

import discord from './assets/discord.png';
import telegram from './assets/telegram.png';
import github from './assets/github.png';

function App() {
    function calculateAge() {
        const birthday = new Date(2005, 6, 16);
        const difference = Date.now() - birthday.getTime();
        const years = difference / (1000 * 60 * 60 * 24 * 365);
        return Math.floor(years);
    }

    return (
        <Container>
            <ChildDiv>
                <Twemoji options={{className: 'twemoji'}}>
                    <h1 className="no-space"><span className="primary">danny</span><span className="transparent">.ink</span> 🎨</h1>
                    <p>
                        i'm a {calculateAge()} year old who loves computers & art 😼
                    </p>
                </Twemoji>
                <hr/>

                <Icon src={discord} alt="discord" link="https://discord.com/users/142709738721902592"/>
                <Icon src={telegram} alt="telegram" link="https://t.me/dannymxmx"/>
                <Icon src={github} alt="github" link="https://github.com/mxmmxx"/>
            </ChildDiv>

            <ChildDiv>
                <h1>notable projects</h1>
                <p>these are some of my public, better works</p>
                <hr/>
                <Twemoji options={{className: 'twemoji'}}>
                    <p>
                        <strong>📁 <a href="https://foob.cc/" rel="noreferrer" target="_blank">foob.cc</a></strong>
                        <br/>
                        custom <a href="https://getsharex.com/" rel="noreferrer" target="_blank">sharex</a> file host
                        <br/>
                        <span className="mini">node.js / mongodb / express</span>
                    </p>
                    <hr className="mini-hr"/>
                    <p>
                        <strong>📈 <a href="https://github.com/mxmmxx/quaid" rel="noreferrer" target="_blank">quaid</a></strong>
                        <br/>
                        advanced roblox trade bot
                        <br/>
                        <span className="mini">node.js / sequelize</span>
                    </p>
                </Twemoji>
            </ChildDiv>

            {/*<ChildDiv>
                <h1>commissions</h1>
                <Twemoji options={{className: 'twemoji'}}>
                    <p>
                        i'm always looking for programming commissions 😁
                        <br/>
                        please contact me on telegram.
                    </p>
                </Twemoji>
            </ChildDiv>*/}
        </Container>
    );
}

export default App;

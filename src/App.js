import './App.css';

import Twemoji from 'react-twemoji';
import Icon from './component/Icon';
import Container from "./component/Container";
import ChildDiv from "./component/ChildDiv";

import discord from './assets/discord.png';
import telegram from './assets/telegram.png';
import github from './assets/github.png';
import Link from "./component/Link";

function App() {
    return (
        <Container>
            <ChildDiv>
                <Twemoji options={{className: 'twemoji'}}>
                    <h1 className="no-space shadow"><span className="primary">danny</span><span
                        className="transparent">.ink</span> 🎨</h1>
                    <p className="shadow">
                        i'm an 18 year old who loves computers & art 😼
                    </p>
                </Twemoji>
                <hr/>

                <Icon src={discord} alt="discord" link="https://discord.com/users/142709738721902592"/>
                <Icon src={telegram} alt="telegram" link="https://t.me/dannydotink"/>
                <Icon src={github} alt="github" link="https://github.com/mxmmxx"/>
            </ChildDiv>

            <ChildDiv>
                <h1 className="primary shadow">about me</h1>
                <hr/>
                <Twemoji options={{className: 'twemoji'}}>
                    <p className="shadow">
                        i've been programming for about 8 years
                        <br/>
                        i'm very proficient in html/css/js/node.js
                        <br/>
                        i'm also decent at java and python
                        <br/>
                        <br/>
                        contact me on <Link href="https://t.me/dannydotink">telegram</Link> regarding commissions
                    </p>
                </Twemoji>
            </ChildDiv>

            <ChildDiv>
                <h1 className="primary shadow">notable projects</h1>
                <p className="shadow">these are some of my public, better works</p>
                <hr/>
                <Twemoji options={{className: 'twemoji'}}>
                    <p className="shadow">
                        <strong>📁 <Link href="https://foob.cc/">foob.cc</Link></strong>
                        <br/>
                        custom <Link href="https://getsharex.com/">sharex</Link> file host
                        <br/>
                        <span className="mini">node.js / mongodb / express</span>
                    </p>
                    <hr className="mini-hr"/>
                    <p className="shadow">
                        <strong>📈 <Link href="https://github.com/mxmmxx/quaid">quaid</Link></strong>
                        <br/>
                        advanced roblox trade bot
                        <br/>
                        <span className="mini">node.js / sequelize</span>
                    </p>
                </Twemoji>
            </ChildDiv>
        </Container>
    );
}

export default App;

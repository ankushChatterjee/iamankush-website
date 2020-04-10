import React from 'react';
import AboutCard from '../components/about-card';

export default function MoreBanner({ transform }) {
    return (
        <div className="more-banner" css={{
            width: '90%',
            margin:'auto',
            display: 'flex',
            boxShadow:'0px 0px 11px 0px #444',
            alignItems: 'center',
            flexDirection:'column',
            color: '#222',
            background:'#fff',
            fontSize: '2em',
            lineHeight: '1.5em'
        }}>
                <AboutCard color="#ff6348" textColor="#e9e9e9" title="Currently 🏢">
                    <span style={{color:'#fff', fontWeight:'bold'}}>Software Engg. Intern @ <a href="https://www.informatica.com/">Informatica</a></span>
                </AboutCard>
                <AboutCard color="#05c46b" textColor="#e9e9e9" title="Education 📚">
                    <span style={{color:'#fff', fontWeight:'bold'}}>B Tech. in Information Technology</span>
                </AboutCard>
                <AboutCard color="#34495e" textColor="#e9e9e9" title="Programming Languages 👩‍💻">
                    <span style={{color:'#fff', fontWeight:'bold'}}>Java, JavaScript, C/C++, Python</span>
                </AboutCard>
                <AboutCard color="#574b90" textColor="#e9e9e9" title="Skills 🤹‍♀️">
                    <span style={{color:'#fff', fontWeight:'bold'}}>Full Stack Web Development,
                                                            Data Structures and Algorithms, Core Computer Scienc</span>
                </AboutCard>

                <div style={{
                    textAlign:'center',
                    color:'#485460', 
                    marginTop:'0.5em'
                }}>I love solving problems and build fast software experiences</div>

                <div className="resume-mail" style={{
                    display:'flex',
                    width : '100%',
                    padding:'2em',
                    justifyContent:'space-evenly'
                }}>
                    <a className="resume" style={{ color: '#ff5e57' }} 
                    href="https://drive.google.com/open?id=10BwzLptSiRBIGw58BJKVn_KEiiFQWba_">Click here for my Resume</a><br />
                    <a className="mail" style={{
                        color: '#0fb9b1'
                    }} href="mailto:hello@iamankush.me">✉ hello@iamankush.me</a>

                </div>

                

        </div>
    )
}

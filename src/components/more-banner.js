import React from 'react'
import ColoredText from './colored-text';

export default function MoreBanner({ transform }) {
    return (
        <div css={{
            height: '80vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#f1f2f6',
            transform: `translateY(${transform})`,
            transition: 'transform 1.5s',
        }}>


            <div css={{
                fontSize: '2em',
                lineHeight: '1.5em',
                padding: '0.5em',
                '@media screen and (max-width: 450px)': {
                    fontSize: '1em',
                    marginBottom: '20%'
                }
            }}>
                <ColoredText color="#ff6348">Education:</ColoredText> B Tech in Information Technology <br />
                <ColoredText color="#ff6348">Programming Languages:</ColoredText> Java,JavaScript,C/C++,Python<br />
                <ColoredText color="#ff6348">Skills:</ColoredText> Full Stack Web Development, Android Development,
                                                            Data Structures and Algorithms, Core Computer Science<br />
                <ColoredText color="#1e90ff">I love solving problems and build fast software experiences</ColoredText><br />
                <a style={{ color: '#fff' }} href="https://www.visualcv.com/ankush-chatterjee/pdf">Click here for my Resume</a><br />
                <a style={{
                    color: '#fff'
                }} href="mailto:ac.ankush15@gmail.com">EMail Me @ ac.ankush15@gmail.com</a>
            </div>


        </div>
    )
}

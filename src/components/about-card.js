import React, { Component, Children } from 'react'

const AboutCard = ({children,title,color,textColor}) => {
    const capsTitle = title.toUpperCase();
    return (
        <div className="about-card" style={{
            background:`${color}`,
            padding:'1em',
            borderRadius:'7px',
            width:'80%',
            marginTop:'1em',
            marginBottom:'0.5em'
        }}>
            <div style={{color:`${textColor}`, fontSize:'0.7em',fontWeight:'bold'}}>{capsTitle}</div>
            <div>{children}</div>
        </div>
    );
} 

export default AboutCard;
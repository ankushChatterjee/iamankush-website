import React from 'react'

export default function ThoughtBox({ title, date, post }) {
    console.log(title,date,post);
    return (
        <div css={{
            background: '#fff',
            borderRadius: '9px',
            padding: '0.5em',
            width:'40%',
            marginBottom:'1em',
            '@media (max-width: 450px)': {
                width:'90%'
            }
        }}>
            <div style={{
                fontSize: '2em',
                color: '#444',
                lineHeight:'1em'
            }}>{title}</div>
            <small style={{
                fontStyle: 'italics'
            }}>{ date }</small>

            <div style={{
                padding: '10px'
            }}>
                { post }
            </div>

        </div>
    )
}

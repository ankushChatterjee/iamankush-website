import React from 'react'
import Header from '../components/header';
import { graphql } from 'gatsby';
import ThoughtBox from '../components/thought-box';
import { Link } from 'gatsby'


class RandomThoughtsPage extends React.Component {
  constructor(props){
    super();
    console.log(props);
    this.data = props.data;

  }

  componentDidMount() {
    document.querySelector('body').style.overflow = 'auto';
  }

  render() {
    let data = this.data;
    return (
      <div>
        <Header />
        <div css={{
          fontSize: '4em',
          color: '#ff6348',
          margin: '1em',
          '@media (max-width: 450px)': {
            fontSize: '1.5em'
          }

        }}> <Link css={{
          color: '#fff',
        }} to="/">{'(<--)'}</Link> randomThoughts()</div>
        <div className="though-list" style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'column',
        }}>
          {data.allMarkdownRemark.edges.map(thought => (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }} key={thought.node.id}>
              <ThoughtBox title={thought.node.frontmatter.title} date={thought.node.frontmatter.date} post={thought.node.excerpt} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}


export const pageQuery = graphql`
query ThoughtQuery{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          date
        }
        excerpt
      }
    }
  }
}
`;

export default RandomThoughtsPage

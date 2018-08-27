import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withData from '../lib/apollo';

function About({ data: { loading, pages } }) {
  if (loading) {
    return <div>Loading</div>;
  } else {
    return <div>{console.log(pages)}</div>;
  }
}

export default withData(
  graphql(gql`
    query AllPages {
      pages {
        edges {
          node {
            link
          }
        }
      }
    }
  `)(About)
);

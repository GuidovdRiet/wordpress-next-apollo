import Layout from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import withData from '../lib/apollo'

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    {/* <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul> */}
  </Layout>
);

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   return {
//     shows: data,
//   };
// };

export default Index;

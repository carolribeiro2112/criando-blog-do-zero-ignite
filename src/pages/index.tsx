// import { GetStaticProps } from 'next';

// import { getPrismicClient } from '../services/prismic';

import { FiCalendar, FiUser } from 'react-icons/fi';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

// interface Post {
//   uid?: string;
//   first_publication_date: string | null;
//   data: {
//     title: string;
//     subtitle: string;
//     author: string;
//   };
// }

// interface PostPagination {
//   next_page: string;
//   results: Post[];
// }

// interface HomeProps {
//   postsPagination: PostPagination;
// }

export default function Home(): JSX.Element {
  return (
    <>
      {/* <Head>
        <title>ínicio | spacetraveling</title>
      </Head> */}

      <main className={commonStyles.container}>
        <div className={styles.posts}>
          <a>
            <strong>Como utilizar hooks</strong>
            <p>pensando em sincronização e ciclos de vida</p>
            <ul>
              <li>
                <FiCalendar />
                <span>15 Mar 2021</span>
              </li>
              <li>
                <FiUser />
                <span>Joseph Oliveira</span>
              </li>
            </ul>
          </a>

          <a>
            <strong>Como utilizar hooks</strong>
            <p>pensando em sincronização e ciclos de vida</p>
            <ul>
              <li>
                <FiCalendar />
                <span>15 Mar 2021</span>
              </li>
              <li>
                <FiUser />
                <span>Joseph Oliveira</span>
              </li>
            </ul>
          </a>

          <a>
            <strong>Como utilizar hooks</strong>
            <p>pensando em sincronização e ciclos de vida</p>
            <ul>
              <li>
                <FiCalendar />
                <span>15 Mar 2021</span>
              </li>
              <li>
                <FiUser />
                <span>Joseph Oliveira</span>
              </li>
            </ul>
          </a>
        </div>

        <button type="button" className={styles.loadingButton}>
          Carregar mais posts
        </button>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };

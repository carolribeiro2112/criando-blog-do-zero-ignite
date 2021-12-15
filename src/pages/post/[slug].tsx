/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { GetStaticPaths, GetStaticProps } from 'next';

import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post() {
  return (
    <>
      <img src="/banner.png" alt="banner" className={styles.postBanner} />
      <main className={commonStyles.container}>
        <div className={styles.postHeader}>
          <h1>Criando um app CRA do zero</h1>
          <ul>
            <li>
              <FiCalendar size={15} />
              <span>15 Mar 2021</span>
            </li>
            <li>
              <FiUser size={15} />
              <span>Joseph Oliveira</span>
            </li>
            <li>
              <FiClock size={15} />
              <span>4 min</span>
            </li>
          </ul>
        </div>

        <article className={styles.postArticle}>
          <section>
            <h2>Proin et varius</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              nihil doloribus inventore aperiam veniam voluptatibus eligendi
              necessitatibus porro nobis libero quae non? Obcaecati, eum
              laboriosam quod rerum illo vel doloribus.
            </p>
          </section>

          <section>
            <h2>Cras laoreet mi</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              nihil doloribus inventore aperiam veniam voluptatibus eligendi
              necessitatibus porro nobis libero quae non? Obcaecati, eum
              laboriosam quod rerum illo vel doloribus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Deleniti, nihil doloribus
              inventore aperiam veniam voluptatibus eligendi necessitatibus
              porro nobis libero quae non? Obcaecati, eum laboriosam quod rerum
              illo vel doloribus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti, nihil doloribus inventore aperiam
              veniam voluptatibus eligendi necessitatibus porro nobis libero
              quae non? Obcaecati, eum laboriosam quod rerum illo vel doloribus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              nihil doloribus inventore aperiam veniam voluptatibus eligendi
              necessitatibus porro nobis libero quae non? Obcaecati, eum
              laboriosam quod rerum illo vel doloribus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Deleniti, nihil doloribus
              inventore aperiam veniam voluptatibus eligendi necessitatibus
              porro nobis libero quae non? Obcaecati, eum laboriosam quod rerum
              illo vel doloribus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti, nihil doloribus inventore aperiam
              veniam voluptatibus eligendi necessitatibus porro nobis libero
              quae non? Obcaecati, eum laboriosam quod rerum illo vel doloribus.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };

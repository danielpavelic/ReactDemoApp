import delay from './delay';

const articles = [
  {
    id: "article-id-1",
    title: "Article title 1",
    watchHref: "http://example.com/article-title-1",
    authorId: "User-id-1",
    length: "5:08",
    category: "NodeJS"
  },
  {
    id: "article-id-2",
    title: "Article title 2",
    watchHref: "http://example.com/article-title-2",
    authorId: "User-id-2",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "article-id-3",
    title: "Article title 3",
    watchHref: "http://example.com/article-title-3",
    authorId: "User-id-3",
    length: "5:08",
    category: "Python"
  },
  {
    id: "article-id-4",
    title: "Article title 4",
    watchHref: "http://example.com/article-title-4",
    authorId: "User-id-4",
    length: "5:08",
    category: "CSS"
  },
  {
    id: "article-id-5",
    title: "Article title 5",
    watchHref: "http://example.com/article-title-5",
    authorId: "User-id-5",
    length: "5:08",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (article) => {
  return replaceAll(article.title, ' ', '-');
};

class ArticleApi {
  static getAllArticles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], articles));
      }, delay);
    });
  }

  static saveArticle(article) {
    article = Object.assign({}, article);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minArticleTitleLength = 1;
        if (article.title.length < minArticleTitleLength) {
          reject(`Title must be at least ${minArticleTitleLength} characters.`);
        }

        if (article.id) {
          const existingArticleIndex = articles.findIndex(a => a.id == article.id);
          articles.splice(existingArticleIndex, 1, article);
        } else {
          article.id = generateId(article);
          article.watchHref = `http://example.com/article/${article.id}`;
          articles.push(article);
        }

        resolve(article);
      }, delay);
    });
  }

  static deleteArticle(articleId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfArticleToDelete = articles.findIndex(article => {
          article.id == articleId;
        });
        articles.splice(indexOfArticleToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ArticleApi;
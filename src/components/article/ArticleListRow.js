import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ArticleListRow = ({article}) => {
  return(
  <li>
    <a href={article.watchHref}>Link</a>
    <Link to={'/article/' + article.id}>{article.title}</Link>
    <span>{article.authorId}</span>
    <span>{article.category}</span>
    <span>{article.length}</span>
  </li>
  );
};

ArticleListRow.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleListRow;
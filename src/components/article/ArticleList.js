import React, {PropTypes} from 'react';
import ArticleListRow from './ArticleListRow';

const ArticleList = ({articles}) => {
  return(
    <div>
      <ul>
        {articles.map(article =>
          <ArticleListRow key={article.id} article={article}/>
        )}
      </ul>
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default ArticleList;
'use strict';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as articleActions from '../../actions/articleActions';
import {bindActionCreators} from 'redux';
import ArticleList from './ArticleList';

class ArticlePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  articleRow(article, index) {
    return <li key={index}>{article.title}</li>;
  }

  render() {
    const {articles} = this.props;

    return(
      <div>
        <h1>Article Page</h1>
        <ul>
          <ArticleList articles={articles}/>
        </ul>
      </div>
    );
  }
}

ArticlePage.propTypes = {
  articles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

'use strict';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as articleActions from '../../actions/articleActions';
import {bindActionCreators} from 'redux';

class ArticlePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      article: {title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const article = this.state.article;
    article.title = event.target.value;
    this.setState({article: article});
  }

  onClickSave() {
    this.props.actions.createArticle(this.state.article);
  }

  articleRow(article, index) {
    return <li key={index}>{article.title}</li>;
  }

  render() {
    return(
      <div>
        <h1>Article Page</h1>
        <ul>
          {this.props.articles.map(this.articleRow)}
        </ul>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.article.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
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

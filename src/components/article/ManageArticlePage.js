import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as articleActions from '../../actions/articleActions';
import ArticleForm from './ArticleForm';

// ToDo: Create Author Actions

class ManageArticlePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      article: Object.assign({}, this.props.article),
      errors: {}
    };
  }

  render() {
    return (
        <ArticleForm
          allAuthors={[]}
          article={this.state.article}
          errors={this.state.errors} />
    );
  }
}

ManageArticlePage.propTypes = {
  article: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  let article = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };

  return {
    article: article
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageArticlePage);
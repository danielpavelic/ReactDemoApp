'use strict';
import React, {PropTypes} from 'react';

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

  onClickSave(){
    alert(`Saving ${this.state.article.title}`);
  }

  render() {
    return(
      <div>
        <h1>Article Page</h1>
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
export default ArticlePage;

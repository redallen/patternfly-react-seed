import React from 'react';
import { PageSection, TextInput } from '@patternfly/react-core';

export class SimpleTextInput extends React.Component {
  state = {
    value: ''
  };

  handleTextInputChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <PageSection>
        <TextInput value={this.state.value} type="text" onChange={this.handleTextInputChange} aria-label="text input example" />
        Value: {this.state.value}
      </PageSection>
    );
  }
}
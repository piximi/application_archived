import * as React from 'react';
import { Portal } from 'react-portal';

class FileReader extends React.PureComponent {
  inputRef = React.createRef();

  onClick = e => {
    e.preventDefault();
    const inputRef = this.inputRef.current;
    if (inputRef) inputRef.click();
  };

  onChange = e => {
    const { onChange } = this.props;
    onChange(e.target.files, e);
  };

  render() {
    const { children } = this.props;

    const { inputRef, onClick, onChange } = this;

    return (
      <React.Fragment>
        <div
          onClick={onClick}
          onKeyPress={onClick}
          role="button"
          tabIndex="0"
          style={{ display: 'inline-block' }}
        >
          {children}
        </div>

        <Portal>
          <input
            ref={inputRef}
            type="file"
            accept={'image/*'}
            onChange={onChange}
            style={{ display: 'none' }}
            multiple
          />
        </Portal>
      </React.Fragment>
    );
  }
}

export default FileReader;

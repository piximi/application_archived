import * as React from 'react';
import { Portal } from 'react-portal';

const FileReader = props => {
  const { children, onChange } = props;

  const inputEl = React.useRef();

  const onClick = e => {
    e.preventDefault();

    inputEl.current.click();
  };

  const onInputChange = e => {
    onChange(e.target.files, e);
  };

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
          ref={inputEl}
          type="file"
          accept={'image/*'}
          onChange={onInputChange}
          style={{ display: 'none' }}
          multiple
        />
      </Portal>
    </React.Fragment>
  );
};

export default FileReader;

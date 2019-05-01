import * as React from 'react';
import { Portal } from 'react-portal';
import hash from 'string-hash';

const FileInput = props => {
  const { children, onChange } = props;

  const inputEl = React.useRef();

  const onClick = event => {
    event.preventDefault();

    inputEl.current.click();
  };

  const onInputChange = event => {
    const files = event.target.files;

    for (const file of files) {
      const reader = new FileReader();

      reader.onload = () => {
        const data = reader.result;

        const checksum = String(hash(data));

        onChange({ checksum, data }, event);
      };

      reader.readAsDataURL(file);
    }
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

export default FileInput;

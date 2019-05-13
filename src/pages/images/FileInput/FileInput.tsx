import * as React from 'react';
import { Portal } from 'react-portal';
import hash from 'string-hash';

const FileInput = (props: any) => {
  const { children, onChange } = props;

  const inputEl = React.useRef<HTMLInputElement>(null);

  const onClick = (event: any) => {
    event.preventDefault();

    if (inputEl.current) {
      inputEl.current.click();
    }
  };

  const onInputChange = (event: any) => {
    const files = event.target.files;

    for (const file of files) {
      const reader: FileReader = new FileReader();

      reader.onload = () => {
        const data = reader.result;

        const checksum = String(hash(data as string));

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
        tabIndex={0}
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

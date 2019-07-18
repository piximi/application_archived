import * as React from 'react';
import { Portal } from 'react-portal';
import hash from 'string-hash';

export const FileInput = (props: any) => {
  const { children, createImages } = props;

  const inputEl = React.useRef<HTMLInputElement>(null);

  type imageProps = {
    checksum: string;
    data: string;
  };

  const onClick = (event: any) => {
    event.preventDefault();

    if (inputEl.current) {
      inputEl.current.click();
    }
  };

  const onInputChange = (event: any) => {
    const files = event.target.files;
    const imageProps: imageProps[] = [];
    let counter = 0;

    const onLoad = (reader: any) => {
      const data = reader.result as string;

      const checksum = String(hash(data as string));

      imageProps.push({ checksum, data });
      counter += 1;

      if (counter === files.length) {
        createImages(imageProps);
      }
    };

    for (const file of files) {
      const reader: FileReader = new FileReader();

      reader.onload = onLoad;

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

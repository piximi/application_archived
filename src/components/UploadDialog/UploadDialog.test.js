import { UploadDialog } from './UploadDialog';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<UploadDialog />).toJSON();
  expect(tree).toMatchSnapshot();
});

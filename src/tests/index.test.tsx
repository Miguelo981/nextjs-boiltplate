import Home from '../pages/index';
import { render } from '@testing-library/react';

describe('App', () => {
  test('looks for gift ideas', async () => {
    render(<Home />);
  });
});

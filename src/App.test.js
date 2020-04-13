import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders ianburrett ~ strava app header', () => {
  const { getByText } = render(<App />);
  const headerText = getByText('ianburrett ~ strava app');
  expect(headerText).toBeInTheDocument();
});

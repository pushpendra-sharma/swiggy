import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Question from '../Question';

const props = {
  id: '006',
  title: 'Terms of Use',
  description:
    'These terms of use (the "Terms of Use") govern your use of our website www.swiggy.in (the "Website") and our "Swiggy" application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Services"). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.',
  isOpen: false,
  callback: () => {},
};

const props2 = {
  id: '006',
  title: 'Terms of Use',
  description:
    'These terms of use (the "Terms of Use") govern your use of our website www.swiggy.in (the "Website") and our "Swiggy" application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Services"). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.',
  isOpen: true,
  callback: () => {},
};

test('should initially display only question title', () => {
  const question = render(<Question {...props} />);
  const title = question.getByTestId('question-title');
  expect(title).toBeInTheDocument();
});

test('should display question title and description when open', () => {
  const question = render(<Question {...props2} />);
  const description = question.getByTestId('question-description');
  expect(description).toBeInTheDocument();
});

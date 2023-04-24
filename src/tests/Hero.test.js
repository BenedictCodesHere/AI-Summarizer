import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero.jsx';

describe('Hero component', () => {
  test('renders logo image', () => {
    const Hero = render(<Hero />);
    const logoImage = screen.getByAltText(/sumz_logo/i);
    expect(logoImage).toBeInTheDocument();
  });

  test('renders "GitHub" button', () => {
    render(<Hero />);
    const githubButton = screen.getByRole('button', { name: /GitHub/i });
    expect(githubButton).toBeInTheDocument();
  });

  test('renders headline text', () => {
    render(<Hero />);
    const headlineText = screen.getByText(/Summarize Articles with/i);
    expect(headlineText).toBeInTheDocument();
  });

  test('renders gradient text', () => {
    render(<Hero />);
    const gradientText = screen.getByText(/OpenAI GPT-4/i);
    expect(gradientText).toBeInTheDocument();
    expect(gradientText).toHaveClass('orange_gradient');
  });

  test('renders description text', () => {
    render(<Hero />);
    const descriptionText = screen.getByText(
      /Simplify your reading with Summize/i
    );
    expect(descriptionText).toBeInTheDocument();
  });
});

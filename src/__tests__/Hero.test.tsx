import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';
import '@testing-library/jest-dom';

describe('Hero Component', () => {
  test('renders the main title', () => {
    render(<Hero />);
    const titleElement = screen.getByText(/Building Scalable/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders CTA buttons', () => {
    render(<Hero />);
    const projectsButton = screen.getByText(/View Projects/i);
    const resumeButton = screen.getByText(/Download Resume/i);
    expect(projectsButton).toBeInTheDocument();
    expect(resumeButton).toBeInTheDocument();
  });
});

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '@/components/Contact';

describe('Contact Component', () => {
  test('renders contact form fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  test('shows success message on form submission', async () => {
    render(<Contact />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello' } });
    
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    expect(screen.getByText(/sending/i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});

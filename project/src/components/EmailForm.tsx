import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface EmailFormProps {
  onSubmit: (email: string) => Promise<void>;
}

const EmailForm: React.FC<EmailFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await onSubmit(email);
      setStatus('success');
      setMessage('Thank you for your interest! We\'ll notify you when we launch.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Submitting...' : 'Get Early Access'}
        </button>
      </form>

      {status === 'success' && (
        <div className="mt-4 flex items-center gap-2 text-green-600">
          <CheckCircle className="w-5 h-5" />
          <p>{message}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 text-red-600">
          <XCircle className="w-5 h-5" />
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // For GitHub Pages, you'll need to use an external service
    // Options: Mailchimp, ConvertKit, Formspree, or a serverless function
    
    // Example: Using Formspree (free tier available)
    // Replace with your Formspree form ID or your email service endpoint
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';
    
    if (formspreeEndpoint) {
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        
        if (response.ok) {
          setStatus('success');
          setEmail('');
        } else {
          setStatus('error');
        }
      } catch (error) {
        setStatus('error');
      }
    } else {
      // Fallback: Store in localStorage (for demo purposes)
      // In production, use a proper email service
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
      }
      setStatus('success');
      setEmail('');
      console.log('Newsletter subscription (stored locally):', email);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#87a96b] to-[#a8c088] rounded-lg p-8 text-white">
      <h3 className="text-2xl font-bold mb-2">Weekly Insights</h3>
      <p className="mb-6 text-white/90">
        Get evidence-based articles on Ayurveda, metabolic health, and visceral fat reduction delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-[#d4a574] hover:bg-[#b88d5a] rounded-lg font-semibold transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-3 text-sm">Thank you for subscribing! Check your email to confirm.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}


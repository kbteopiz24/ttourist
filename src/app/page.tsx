'use client';

import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <main className="main-container">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Nature Assistant</h1>
          <p className="page-subtitle">
            Discover the wonders of nature with AI-powered insights
          </p>
        </div>
        <ChatInterface />
      </div>
    </main>
  );
}

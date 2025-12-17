'use client';

import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <main className="main-container">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">T-Tourist</h1>
          <p className="page-subtitle">
            Your AI travel companion powered by Flowise
          </p>
        </div>
        <ChatInterface />
      </div>
    </main>
  );
}

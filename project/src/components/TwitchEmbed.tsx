import React from 'react';

interface TwitchEmbedProps {
  channel: string;
}

const TwitchEmbed: React.FC<TwitchEmbedProps> = ({ channel }) => {
  return (
    <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
      <iframe
        src={`https://player.twitch.tv/?channel=${channel}&parent=${window.location.hostname}`}
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        height="100%"
        width="100%"
        title="Twitch Stream"
      />
    </div>
  );
};

export default TwitchEmbed;
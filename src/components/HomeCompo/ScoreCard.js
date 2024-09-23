// src/components/ScoreCard.js
import React from 'react';

export default function ScoreCard({
  homeTeam,
  awayTeam,
  homeScore,
  homeWickets,
  awayScore,
  awayWickets,
  overs,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h3 className="text-xl font-bold mb-4">{homeTeam} vs {awayTeam}</h3>
      <div className="flex justify-between mb-4">
        <div>
          <h4 className="font-bold">{homeTeam}</h4>
          <p>Score: {homeScore} / {homeWickets}</p>
        </div>
        <div>
          <h4 className="font-bold">{awayTeam}</h4>
          <p>Score: {awayScore} / {awayWickets}</p>
        </div>
      </div>
      <div className="text-center">
        <p>Overs: {overs}</p>
      </div>
    </div>
  );
}

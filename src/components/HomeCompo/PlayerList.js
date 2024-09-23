import React from 'react';

export default function PlayerList({ players, title, isBowler }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className={`grid ${isBowler ? 'grid-cols-5' : 'grid-cols-6'} gap-2 mb-2`}>
        <div className="font-semibold text-xs text-center">Name</div>
        {isBowler ? (
          <>
            <div className="font-semibold text-xs text-center">Overs</div>
            <div className="font-semibold text-xs text-center">Maiden</div>
            <div className="font-semibold text-xs text-center">Runs Given</div>
            <div className="font-semibold text-xs text-center">Wickets</div>
          </>
        ) : (
          <>
            <div className="font-semibold text-xs text-center">Runs</div>
            <div className="font-semibold text-xs text-center">Balls</div>
            <div className="font-semibold text-xs text-center">Fours</div>
            <div className="font-semibold text-xs text-center">Sixes</div>
          </>
        )}
      </div>
      {players.map((player, index) => (
        <div key={index} className="mb-4 grid grid-cols-5 gap-2">
          <div className="text-center text-sm">{player.name}</div>
          {isBowler ? (
            <>
              <div className="text-center text-sm">{player.overs}</div>
              <div className="text-center text-sm">{player.maiden}</div>
              <div className="text-center text-sm">{player.runsGiven}</div>
              <div className="text-center text-sm">{player.wickets}</div>
            </>
          ) : (
            <>
              <div className="text-center text-sm">{player.runs}</div>
              <div className="text-center text-sm">{player.balls}</div>
              <div className="text-center text-sm">{player.fours}</div>
              <div className="text-center text-sm">{player.sixes}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

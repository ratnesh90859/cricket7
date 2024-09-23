//import { h2 } from 'framer-motion/client';
import React from 'react';

const batsmanDataRedDragons = [
  { name: 'Alex', runs: 45, balls: 67, minutes: 120, fours: 5, sixes: 2, strikeRate: 67.16 },
  { name: 'John (c)', runs: 21, balls: 32, minutes: 45, fours: 2, sixes: 1, strikeRate: 65.62 },
  { name: 'Liam', runs: 78, balls: 89, minutes: 130, fours: 8, sixes: 3, strikeRate: 87.64 },
  { name: 'Noah', runs: 50, balls: 74, minutes: 110, fours: 4, sixes: 2, strikeRate: 67.56 },
  { name: 'Ethan †', runs: 34, balls: 40, minutes: 60, fours: 3, sixes: 0, strikeRate: 85.00 },
  { name: 'Jacob', runs: 19, balls: 25, minutes: 38, fours: 2, sixes: 1, strikeRate: 76.00 },
  { name: 'Mason', runs: 64, balls: 98, minutes: 150, fours: 6, sixes: 1, strikeRate: 65.30 },
  { name: 'Logan', runs: 11, balls: 20, minutes: 25, fours: 1, sixes: 0, strikeRate: 55.00 },
  { name: 'Henry', runs: 7, balls: 12, minutes: 18, fours: 0, sixes: 1, strikeRate: 58.33 },
  { name: 'Owen', runs: 2, balls: 8, minutes: 14, fours: 0, sixes: 0, strikeRate: 25.00 },
  { name: 'Lucas', runs: 0, balls: 3, minutes: 5, fours: 0, sixes: 0, strikeRate: 0.00 }
];

const bowlerDataRedDragons = [
  { name: 'Logan', overs: 10, maidens: 1, runsGiven: 25, wickets: 2, econ: 2.50, wides: 0, noBalls: 0 },
  { name: 'Henry', overs: 8, maidens: 0, runsGiven: 33, wickets: 1, econ: 4.12, wides: 1, noBalls: 0 },
  { name: 'Owen', overs: 5, maidens: 0, runsGiven: 20, wickets: 0, econ: 4.00, wides: 0, noBalls: 1 },
  { name: 'Alex', overs: 12, maidens: 3, runsGiven: 42, wickets: 4, econ: 3.50, wides: 0, noBalls: 0 },
  { name: 'Mason', overs: 10.3, maidens: 2, runsGiven: 60, wickets: 2, econ: 5.71, wides: 0, noBalls: 2 }
];

const batsmanDataBlueTigers = [
  { name: 'William', runs: 52, balls: 75, minutes: 90, fours: 6, sixes: 2, strikeRate: 69.33 },
  { name: 'James', runs: 44, balls: 68, minutes: 100, fours: 5, sixes: 1, strikeRate: 64.70 },
  { name: 'Elijah (c)', runs: 30, balls: 40, minutes: 60, fours: 4, sixes: 0, strikeRate: 75.00 },
  { name: 'Sebastian', runs: 18, balls: 25, minutes: 30, fours: 2, sixes: 0, strikeRate: 72.00 },
  { name: 'Carter', runs: 10, balls: 15, minutes: 20, fours: 1, sixes: 0, strikeRate: 66.66 },
  { name: 'Wyatt', runs: 5, balls: 12, minutes: 14, fours: 0, sixes: 0, strikeRate: 41.66 },
  { name: 'Jayden', runs: 2, balls: 5, minutes: 7, fours: 0, sixes: 0, strikeRate: 40.00 },
  { name: 'Levi', runs: 15, balls: 20, minutes: 28, fours: 2, sixes: 0, strikeRate: 75.00 },
  { name: 'Dylan', runs: 22, balls: 30, minutes: 40, fours: 3, sixes: 1, strikeRate: 73.33 },
  { name: 'Oliver', runs: 0, balls: 4, minutes: 5, fours: 0, sixes: 0, strikeRate: 0.00 }
];

const bowlerDataBlueTigers = [
  { name: 'Evan', overs: 20, maidens: 3, runsGiven: 40, wickets: 3, econ: 2.00, wides: 0, noBalls: 1 },
  { name: 'Ryan', overs: 18.2, maidens: 2, runsGiven: 70, wickets: 5, econ: 3.81, wides: 1, noBalls: 0 },
  { name: 'Isaac', overs: 22, maidens: 4, runsGiven: 85, wickets: 2, econ: 3.86, wides: 0, noBalls: 0 },
  { name: 'Connor', overs: 15, maidens: 1, runsGiven: 65, wickets: 1, econ: 4.33, wides: 2, noBalls: 1 },
  { name: 'Nathan', overs: 6, maidens: 0, runsGiven: 36, wickets: 0, econ: 6.00, wides: 0, noBalls: 0 }
];

export default function ClientPanel1() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-sm">
      <h1 className="text-2xl font-bold mb-8"> ODI Cricket Live Score</h1>

      <div className="max-w-4xl mx-auto">
        {/* Red Dragons 1st Innings */}
        <h2 className="font-bold text-lg mb-4">Green Eagles - Batting(331/10)</h2>
        <table className="table-auto w-full mb-8 text-xs">
          <thead>
            <tr className="bg-green-100">
              <th className="px-4 py-2">Batter</th>
              <th className="px-4 py-2">R</th>
              <th className="px-4 py-2">B</th>
              <th className="px-4 py-2">M</th>
              <th className="px-4 py-2">4s</th>
              <th className="px-4 py-2">6s</th>
              <th className="px-4 py-2">SR</th>
            </tr>
          </thead>
          <tbody>
            {batsmanDataRedDragons.map((batsman, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{batsman.name}</td>
                <td className="px-4 py-2">{batsman.runs}</td>
                <td className="px-4 py-2">{batsman.balls}</td>
                <td className="px-4 py-2">{batsman.minutes}</td>
                <td className="px-4 py-2">{batsman.fours}</td>
                <td className="px-4 py-2">{batsman.sixes}</td>
                <td className="px-4 py-2">{batsman.strikeRate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="font-bold text-lg mb-4">Green Eagles - Bowling</h2>
        <table className="table-auto w-full mb-8 text-xs">
          <thead>
            <tr className="bg-green-100">
              <th className="px-4 py-2">Bowler</th>
              <th className="px-4 py-2">O</th>
              <th className="px-4 py-2">M</th>
              <th className="px-4 py-2">R</th>
              <th className="px-4 py-2">W</th>
              <th className="px-4 py-2">Econ</th>
              <th className="px-4 py-2">Wd</th>
              <th className="px-4 py-2">Nb</th>
            </tr>
          </thead>
          <tbody>
            {bowlerDataRedDragons.map((bowler, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{bowler.name}</td>
                <td className="px-4 py-2">{bowler.overs}</td>
                <td className="px-4 py-2">{bowler.maidens}</td>
                <td className="px-4 py-2">{bowler.runsGiven}</td>
                <td className="px-4 py-2">{bowler.wickets}</td>
                <td className="px-4 py-2">{bowler.econ}</td>
                <td className="px-4 py-2">{bowler.wides}</td>
                <td className="px-4 py-2">{bowler.noBalls}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Blue Tigers 1st Innings */}
        <h2 className="font-bold text-lg mb-4">Yellow Lions
        - Batting(198/10)</h2>
        <table className="table-auto w-full mb-8 text-xs">
          <thead>
            <tr className="bg-yellow-100">
              <th className="px-4 py-2">Batter</th>
              <th className="px-4 py-2">R</th>
              <th className="px-4 py-2">B</th>
              <th className="px-4 py-2">M</th>
              <th className="px-4 py-2">4s</th>
              <th className="px-4 py-2">6s</th>
              <th className="px-4 py-2">SR</th>
            </tr>
          </thead>
          <tbody>
            {batsmanDataBlueTigers.map((batsman, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{batsman.name}</td>
                <td className="px-4 py-2">{batsman.runs}</td>
                <td className="px-4 py-2">{batsman.balls}</td>
                <td className="px-4 py-2">{batsman.minutes}</td>
                <td className="px-4 py-2">{batsman.fours}</td>
                <td className="px-4 py-2">{batsman.sixes}</td>
                <td className="px-4 py-2">{batsman.strikeRate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="font-bold text-lg mb-4">Yellow Lions
        - Bowling</h2>
        <table className="table-auto w-full mb-8 text-xs">
          <thead>
            <tr className="bg-yellow-100">
              <th className="px-4 py-2">Bowler</th>
              <th className="px-4 py-2">O</th>
              <th className="px-4 py-2">M</th>
              <th className="px-4 py-2">R</th>
              <th className="px-4 py-2">W</th>
              <th className="px-4 py-2">Econ</th>
              <th className="px-4 py-2">Wd</th>
              <th className="px-4 py-2">Nb</th>
            </tr>
          </thead>
          <tbody>
            {bowlerDataBlueTigers.map((bowler, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{bowler.name}</td>
                <td className="px-4 py-2">{bowler.overs}</td>
                <td className="px-4 py-2">{bowler.maidens}</td>
                <td className="px-4 py-2">{bowler.runsGiven}</td>
                <td className="px-4 py-2">{bowler.wickets}</td>
                <td className="px-4 py-2">{bowler.econ}</td>
                <td className="px-4 py-2">{bowler.wides}</td>
                <td className="px-4 py-2">{bowler.noBalls}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className='font-bold'>Green Eagles won by 133 Runs</h2>
      </div>
    </div>
  );
  
}


import React, { useState } from 'react';
import { ranks, divisions } from '../data/ranks';

interface ServiceCalculatorProps {
  serviceType: string;
}

const ServiceCalculator: React.FC<ServiceCalculatorProps> = ({ serviceType }) => {
  const [currentRank, setCurrentRank] = useState('silver');
  const [targetRank, setTargetRank] = useState('gold');
  const [currentDivision, setCurrentDivision] = useState(4);
  const [targetDivision, setTargetDivision] = useState(4);

  const calculatePrice = () => {
    const basePrice = {
      elojob: 50,
      duoboost: 75,
      md5: 100,
      coaching: 120
    }[serviceType];

    const rankDiff = ranks.indexOf(targetRank) - ranks.indexOf(currentRank);
    const divisionDiff = currentDivision - targetDivision;
    
    return basePrice * (1 + (rankDiff * 0.5)) * (1 + (Math.abs(divisionDiff) * 0.1));
  };

  return (
    <div className="mt-12 bg-slate-700 rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6">Calculadora de Preço</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg mb-4">Elo Atual</h4>
          <select
            value={currentRank}
            onChange={(e) => setCurrentRank(e.target.value)}
            className="w-full bg-slate-600 rounded p-2 mb-4"
          >
            {ranks.map(rank => (
              <option key={rank} value={rank}>{rank.toUpperCase()}</option>
            ))}
          </select>
          
          <select
            value={currentDivision}
            onChange={(e) => setCurrentDivision(Number(e.target.value))}
            className="w-full bg-slate-600 rounded p-2"
          >
            {divisions.map(div => (
              <option key={div} value={div}>Division {div}</option>
            ))}
          </select>
        </div>

        <div>
          <h4 className="text-lg mb-4">Elo Desejado</h4>
          <select
            value={targetRank}
            onChange={(e) => setTargetRank(e.target.value)}
            className="w-full bg-slate-600 rounded p-2 mb-4"
          >
            {ranks.map(rank => (
              <option key={rank} value={rank}>{rank.toUpperCase()}</option>
            ))}
          </select>
          
          <select
            value={targetDivision}
            onChange={(e) => setTargetDivision(Number(e.target.value))}
            className="w-full bg-slate-600 rounded p-2"
          >
            {divisions.map(div => (
              <option key={div} value={div}>Division {div}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-3xl font-bold text-purple-400">
          R$ {calculatePrice().toFixed(2)}
        </p>
        <button className="mt-4 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors">
          Contratar Serviço
        </button>
      </div>
    </div>
  );
}

export default ServiceCalculator;
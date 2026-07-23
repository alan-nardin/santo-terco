import { useState } from 'react';

export function PrayerDeck({ mysteryIndex }: { mysteryIndex: number }) {
  const [activeBeads, setActiveBeads] = useState<number[]>([]);

  const toggleBead = (index: number) => {
    setActiveBeads((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <div className="prayer-counter-deck">
      <div className="deck-label">Guia da Dezena {mysteryIndex + 1}</div>
      {Array.from({ length: 12 }).map((_, index) => {
        const label = index === 0 ? 'Pai Nosso' : index === 11 ? 'Glória' : index;
        return (
          <button
            key={`${mysteryIndex}-${index}`}
            type="button"
            className={`prayer-bead ${activeBeads.includes(index) ? 'active' : ''}`}
            onClick={() => toggleBead(index)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

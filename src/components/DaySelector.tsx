import { dayNamesShort } from '../data';

export function DaySelector({ selectedDay, onSelect }: { selectedDay: number; onSelect: (index: number) => void }) {
  return (
    <section>
      <div id="day-selector" className="day-selector">
        {dayNamesShort.map((name, index) => (
          <button
            key={name}
            type="button"
            className={selectedDay === index ? 'active' : ''}
            onClick={() => onSelect(index)}
          >
            {name}
          </button>
        ))}
      </div>
    </section>
  );
}

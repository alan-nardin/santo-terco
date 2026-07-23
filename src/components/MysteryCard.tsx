import { type MysteryItem } from '../data';
import { PrayerDeck } from './PrayerDeck';

export function MysteryCard({ item, index }: { item: MysteryItem; index: number }) {
  return (
    <li>
      <img
        src={item.imageUrl}
        alt={`Ícone do Mistério: ${item.title}`}
        className="mystery-image"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src = 'https://placehold.co/100x100/7B0000/ffffff?text=Erro';
        }}
      />
      <div className="mystery-content">
        <div className="mystery-header">
          <h4 className="mystery-title">{index + 1}º - {item.title.replace(/^(\d+º - )/, '')}</h4>
        </div>
        {/* <p className="meditation-text">{item.meditation}</p> */}
        <PrayerDeck mysteryIndex={index} />
      </div>
    </li>
  );
}

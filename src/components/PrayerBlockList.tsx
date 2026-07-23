import { OPENING_PRAYER_BLOCKS } from '../data';
import { PrayerTextBlock } from './PrayerTextBlock';

export function PrayerBlockList() {
  return (
    <div className="prayer-content">
      {OPENING_PRAYER_BLOCKS.map((block) => (
        <PrayerTextBlock key={block.title} title={block.title} content={block.content} />
      ))}
      <div className="font-zoom">As 3 primeiras Ave Marias reza-se em honra a:</div>
      <ol className="font-zoom">
        <li>Deus Pai que nos criou</li>
        <li>Deus Filho que nos remiu</li>
        <li>Espírito Santo que nos guia e nos santifica</li>
      </ol>
    </div>
  );
}

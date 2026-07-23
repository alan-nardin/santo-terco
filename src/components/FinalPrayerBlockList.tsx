import { FINAL_PRAYER_BLOCKS } from '../data';
import { PrayerTextBlock } from './PrayerTextBlock';

export function FinalPrayerBlockList() {
  return (
    <div className="prayer-content footer-prayer-content">
      {FINAL_PRAYER_BLOCKS.map((block) => (
        <PrayerTextBlock key={block.title} title={block.title} content={block.content} />
      ))}
    </div>
  );
}

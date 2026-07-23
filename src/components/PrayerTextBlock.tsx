export function PrayerTextBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="prayer-content-block">
      <h3>{title}</h3>
      <div className="font-zoom">{content}</div>
    </div>
  );
}

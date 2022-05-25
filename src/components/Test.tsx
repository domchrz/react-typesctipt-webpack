export default function Test({ title, summary }: { title: string; summary: string }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  );
}

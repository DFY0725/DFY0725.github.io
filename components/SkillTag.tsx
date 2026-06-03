export default function SkillTag({ name }: { name: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-mono text-accent bg-blue-50 border border-blue-100 rounded-md">
      {name}
    </span>
  );
}

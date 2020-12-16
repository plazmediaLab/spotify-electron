export default function AvatarName({ name }) {
  const avatar = () => {
    return name
    .split(' ')
    .map((item) => item.charAt(0))
    .slice(0, 2)
    .join('');
  };

  return (
    <div className="w-8 h-8 rounded-full bg-brand-200 text-brand-500 grid place-items-center text-sm">
      <h1 className="mt-small font-medium">{avatar()}</h1>
    </div>
  );
}

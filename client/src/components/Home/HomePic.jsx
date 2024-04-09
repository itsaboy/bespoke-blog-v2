export default function HomePic({ src }) {
  return (
    <div className="relative hover:scale-105 ease-in-out duration-300 hover:-skew-y-2 hover:rotate-2 transform-gpu transition-transform rounded-xl shadow-neon shadow-sky-800/60">
      <img
        src={src}
        alt=""
        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-40 rounded-xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-20" />
    </div>
  );
}

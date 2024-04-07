export default function AboutPic7x5({ src, alt }) {
  return (
    <div className="grid place-items-center hover:scale-105 ease-in-out duration-300 hover:-skew-y-2 hover:rotate-2 transform-gpu transition-transform rounded-xl shadow-neon shadow-sky-800/60">
      <img
        src={src}
        alt={alt}
        className="aspect-[7/5] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-900/5  object-cover"
      />
    </div>
  );
}

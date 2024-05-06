export default function HomeContent({ title, body }) {
  return (
    <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
      <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-sky-300 to-sky-500 py-4 sm:text-6xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-400 sm:max-w-md lg:max-w-none">
        {body}
      </p>
    </div>
  );
}

export default function GalleryText({ title, body }) {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="p-2 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-pink-300 to-pink-500 sm:text-4xl">
        {title}
      </h2>
      <p className="p-2 mt-6 text-lg leading-8 text-rose-300">{body}</p>
    </div>
  );
}

export default function BlogText({ title, body }) {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-sky-300 to-sky-500 py-4 sm:text-4xl">
        {title}
      </h2>
      <p className="p-2 mt-6 text-lg leading-8 text-gray-300">{body}</p>
    </div>
  );
}

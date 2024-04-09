export default function AboutContent({ title, body, subBody }) {
  return (
    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-6 text-xl leading-8 text-gray-400">{body}</p>
      <p className="mt-6 text-base leading-7 text-gray-300">{subBody}</p>
    </div>
  );
}

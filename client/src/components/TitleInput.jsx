export default function TitleInput({ title, setTitle }) {
  return (
    <div className="col-span-full">
      <label
        htmlFor="title"
        className="block text-sm font-medium leading-6 text-gray-400"
      >
        Title
      </label>
      <div className="mt-2">
        <textarea
          id="title"
          name="title"
          rows={1}
          className="block w-full rounded-md px-2 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 shadow-neon shadow-sky-800/40"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <p className="mt-2 text-sm text-sky-200" id="title-description">
        A title should be short and sweet
      </p>
    </div>
  );
}

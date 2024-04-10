export default function BodyInput({
  body,
  setBody,
  toolTip,
}) {
  return (
    <div className="col-span-full">
      <label
        htmlFor="body"
        className="block text-sm font-medium leading-6 text-sky-400"
      >
        Body
      </label>
      <div className="mt-2">
        <textarea
          id="body"
          name="body"
          rows={12}
          className="block w-full rounded-md px-2 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 shadow-neon shadow-sky-800/40"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          required={true}
        />
      </div>
      <p className="mt-2 text-sm text-sky-200" id="body-description">
        {toolTip}
      </p>
    </div>
  );
}

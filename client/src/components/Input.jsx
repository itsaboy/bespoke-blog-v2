export default function Input({
  htmlFor,
  label,
  id,
  name,
  type,
  required,
  value,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium leading-6 text-sky-400"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={name}
          required={required}
          className="px-2 block w-full rounded-md py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6 shadow-neon shadow-sky-800/60"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}

export default function HomePic() {
  return (
    <div className="relative hover:scale-105 ease-in-out duration-300 hover:-skew-y-2 hover:rotate-2 transform-gpu transition-transform rounded-xl shadow-neon shadow-sky-800/60">
      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
        alt=""
        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-40 rounded-xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-20" />
    </div>
  );
}

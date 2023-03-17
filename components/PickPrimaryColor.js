export default function PickPrimaryColor({ color, setColor }) {
  return (
    <div>
      <label
        htmlFor="color"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        1. Pick a color
      </label>
      <div className="mt-2">
        <input
          type="text"
          name="color"
          id="color"
          className="block h-10 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </div>
  );
}

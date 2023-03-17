import Color from 'color';

export default function Badges({ colors }) {
  return (
    <div className="my-10 mx-auto flex gap-x-5">
      {colors.map((color, i) => (
        <span
          key={i}
          className="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800"
          style={{
            color: Color(color).isDark()
              ? Color(color).lighten(0.8)
              : Color(color).darken(0.8),
            backgroundColor: color,
          }}
        >
          <svg
            className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
            fill="currentColor"
            viewBox="0 0 8 8"
            style={{ color: Color(color).darken(0.5) }}
          >
            <circle cx={4} cy={4} r={3} />
          </svg>
          Badge
        </span>
      ))}
    </div>
  );
}

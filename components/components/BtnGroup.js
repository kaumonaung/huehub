import Color from 'color';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function BtnGroup({ colors }) {
  return (
    <div className="my-10 mx-auto w-full overflow-hidden rounded-lg bg-white shadow">
      <div
        className={classNames(
          colors.length > 1 && 'grid-cols-2',
          'grid h-full items-center justify-center gap-5 px-4 py-5 sm:p-6'
        )}
      >
        {colors.map((color, i) => (
          <button
            key={i}
            type="button"
            className="rounded-md px-3.5 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline"
            style={{
              color: Color(color).isDark()
                ? Color(color).lighten(0.8)
                : Color(color).darken(0.8),
              backgroundColor: color,
            }}
          >
            Button {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

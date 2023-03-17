function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ColorPaletteGroup(props) {
  const { colors, copied, copyIndex, copyToClipboard } = props;

  return (
    <div className="mx-auto max-w-xl">
      <span className="mt-5 flex sm:mx-auto">
        {colors &&
          colors.map((_, i) => (
            <div className="flex flex-1 flex-col" key={i}>
              <button
                type="button"
                className={classNames(
                  i === 0 && 'rounded-l-md',
                  i === colors.length - 1 && 'rounded-r-md',
                  'flex-1 px-4 py-5 text-sm hover:brightness-90 sm:p-6'
                )}
                style={{ backgroundColor: colors[i] }}
                onClick={() => copyToClipboard(colors[i], i)}
              />

              <button
                type="button"
                className="mt-2 text-center text-sm hover:text-gray-600 focus:outline-none"
                onClick={() => copyToClipboard(colors[i], i)}
              >
                {copied && copyIndex === i ? 'Copied!' : colors[i]}
              </button>
            </div>
          ))}
      </span>
    </div>
  );
}

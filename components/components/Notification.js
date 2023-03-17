import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import Color from 'color';

export default function Notification({ colors }) {
  return (
    <div
      className="my-3 rounded-md p-4"
      style={{
        backgroundColor: Color(colors[0]).lighten(0.8),
      }}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-5 w-5"
            aria-hidden="true"
            style={{
              color: colors[0],
            }}
          />
        </div>
        <div className="ml-3">
          <h3
            className="text-sm font-medium"
            style={{
              color: colors[0],
            }}
          >
            Attention needed
          </h3>
          <div
            className="mt-2 text-sm"
            style={{
              color: Color(colors[0]).opaquer(0.2),
            }}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

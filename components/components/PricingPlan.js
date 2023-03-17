import { CheckIcon } from '@heroicons/react/20/solid';
import Color from 'color';

const tiers = [
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$30', annually: '$288' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
];

export default function PricingPlan({ colors }) {
  return (
    <div
      className="mx-auto flex max-w-md items-center justify-center rounded-3xl border-2 bg-white"
      style={{ borderColor: colors[0] }}
    >
      {tiers.map((tier) => (
        <div key={tier.id} className="p-8 xl:p-10">
          <div className="flex h-full items-center justify-between gap-x-4">
            <h3
              id={tier.id}
              className="text-lg font-semibold leading-8"
              style={{ color: colors[0] }}
            >
              {tier.name}
            </h3>
            {tier.mostPopular ? (
              <p
                className="rounded-full bg-indigo-600/10 py-1 px-2.5 text-xs font-semibold leading-5"
                style={{
                  color: Color(colors[1]).isDark()
                    ? Color(colors[1]).lighten(0.8)
                    : Color(colors[1]).darken(0.8),
                  backgroundColor: colors[1],
                }}
              >
                Most popular
              </p>
            ) : null}
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            {tier.description}
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              $30
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600">
              /month
            </span>
          </p>
          <a
            href={tier.href}
            aria-describedby={tier.id}
            className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline"
            style={{
              color: Color(colors[0]).isDark()
                ? Color(colors[0]).lighten(0.8)
                : Color(colors[0]).darken(0.8),
              backgroundColor: colors[0],
            }}
          >
            Buy plan
          </a>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
          >
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none"
                  aria-hidden="true"
                  style={{ color: colors[1] }}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

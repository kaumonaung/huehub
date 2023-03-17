import { StarIcon } from '@heroicons/react/20/solid';

export default function Testimonial({ colors }) {
  return (
    <section className="my-10 bg-white px-8 py-10">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1" style={{ color: colors[0] }}>
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        </div>
        <blockquote className="mt-5 text-lg font-semibold leading-8 tracking-tight text-gray-900">
          <p>
            “Qui dolor enim consectetur do et non ex amet culpa sint in ea non
            dolore. Enim minim magna anim id minim eu cillum sunt dolore
            aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa
            amet officia exercitation. Eu non aute velit id velit Lorem elit
            anim pariatur.”
          </p>
        </blockquote>
      </figure>
    </section>
  );
}

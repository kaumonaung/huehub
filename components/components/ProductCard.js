import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';

import Color from 'color';

const product = {
  name: 'Basic Tee',
  price: '$35',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    {
      name: 'Heather Grey',
      bgColor: 'bg-gray-400',
      selectedColor: 'ring-gray-400',
    },
  ],
  images: [
    {
      id: 1,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: false },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductCard({ colors }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-3xl bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <img
          key={product.images[2].id}
          src={product.images[2].imageSrc}
          alt={product.images[2].imageAlt}
          className={classNames(
            product.images[2].primary
              ? 'lg:col-span-2 lg:row-span-2'
              : 'hidden lg:block',
            'h-44 w-full rounded-lg object-contain object-top'
          )}
        />
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">
                {product.name}
              </h1>
              <p className="text-xl font-medium text-gray-900">
                {product.price}
              </p>
            </div>
            {/* Reviews */}
            <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  {product.rating}
                  <span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className="h-5 w-5 flex-shrink-0 text-gray-200"
                      aria-hidden="true"
                      style={{
                        color: product.rating > rating && colors[1],
                      }}
                    />
                  ))}
                </div>
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                  ·
                </div>
                <div className="ml-4 flex">
                  <a
                    href="#"
                    className="text-sm font-medium"
                    style={{ color: colors[1] }}
                  >
                    See all {product.reviewCount} reviews
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:col-span-5">
            <form>
              {/* Color picker */}
              <div>
                <h2 className="text-sm font-medium text-gray-900">Color</h2>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    {' '}
                    Choose a color{' '}
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {' '}
                          {color.name}{' '}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Size picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="mb-2 text-sm font-medium text-gray-900">
                    Size
                  </h2>
                  <a
                    href="#"
                    className="mb-2 text-sm font-medium"
                    style={{ color: colors[0] }}
                  >
                    See sizing chart
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  <div className="flex items-center justify-center rounded-md border border-gray-200 bg-white py-3 px-3 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 sm:flex-1">
                    XXS
                  </div>

                  <div className="flex items-center justify-center rounded-md border border-gray-200 bg-white py-3 px-3 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 sm:flex-1">
                    XS
                  </div>

                  <div className="flex items-center justify-center rounded-md border border-gray-200 bg-white py-3 px-3 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 sm:flex-1">
                    S
                  </div>

                  <div
                    className="flex items-center justify-center rounded-md py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                    style={{
                      color: Color(colors[0]).isDark()
                        ? Color(colors[0]).lighten(0.8)
                        : Color(colors[0]).darken(0.8),
                      backgroundColor: colors[0],
                    }}
                  >
                    M
                  </div>

                  <div className="flex items-center justify-center rounded-md border border-gray-200 bg-white py-3 px-3 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 sm:flex-1">
                    L
                  </div>

                  <div className="flex items-center justify-center rounded-md border border-gray-200 bg-white py-3 px-3 text-sm font-medium uppercase text-gray-900 opacity-30 hover:bg-gray-50 sm:flex-1">
                    XL
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent  py-3 px-8 text-base font-medium text-white focus:outline-none"
                style={{
                  color: Color(colors[0]).isDark()
                    ? Color(colors[0]).lighten(0.8)
                    : Color(colors[0]).darken(0.8),
                  backgroundColor: colors[0],
                }}
              >
                Add to cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import Stats from './Stats';
import Badges from './Badges';
import Toggles from './Toggles';
import Notification from './Notification';
import ProgressPanels from './ProgressPanels';
import BtnGroup from './BtnGroup';
import Testimonial from './Testimonial';
import ProductCard from './ProductCard';
import PricingPlan from './PricingPlan';

export default function Components({ colors }) {
  return (
    <div className="mx-5 mb-28 max-w-7xl rounded-2xl bg-gray-50 py-24 shadow-md sm:mx-auto sm:px-6 lg:px-8">
      <h2
        className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl"
        style={{ color: colors[0] }}
      >
        Color Palette Preview
      </h2>

      <Stats colors={colors} />

      <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-3">
        <Badges colors={colors} />
        <Toggles colors={colors} />
        <Notification colors={colors} />
      </div>

      <ProgressPanels colors={colors} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <BtnGroup colors={colors} />
        <Testimonial colors={colors} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProductCard colors={colors} />
        <PricingPlan colors={colors} />
      </div>
    </div>
  );
}

import { Carousel, OfferCard } from "../../ui-components";
import { OfferCardProps } from "../../ui-components/offer-card/types";
const pricingInfo: OfferCardProps[] = [
  {
    destination: "Lisbon, Portugal",
    image:
      "https://totuldespremame.ro/wp-content/uploads/2020/11/city-break-in-Portugalia-1.jpg",
    reviews: 5,
    price: "$500",
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
  },
  {
    destination: "Lisbon, Portugal",
    image:
      "https://totuldespremame.ro/wp-content/uploads/2020/11/city-break-in-Portugalia-1.jpg",
    reviews: 5,
    price: "$500",
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
  },
  {
    destination: "Lisbon, Portugal",
    image:
      "https://totuldespremame.ro/wp-content/uploads/2020/11/city-break-in-Portugalia-1.jpg",
    reviews: 5,
    price: "$500",
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
  },
  {
    destination: "Lisbon, Portugal",
    image:
      "https://totuldespremame.ro/wp-content/uploads/2020/11/city-break-in-Portugalia-1.jpg",
    reviews: 5,
    price: "$500",
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
  },
  {
    destination: "Lisbon, Portugal",
    image:
      "https://totuldespremame.ro/wp-content/uploads/2020/11/city-break-in-Portugalia-1.jpg",
    reviews: 5,
    price: "$500",
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
  },
  {
    destination: "Lisbon, Portugal",
    image:
      "https://totuldespremame.ro/wp-content/uploads/2020/11/city-break-in-Portugalia-1.jpg",
    reviews: 5,
    price: "$500",
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
  },
];
export function Pricing() {
  return (
    <div className="py-16 md:py-36" id="pricing">
      <Carousel
        title="Special Offer"
        subtitle="Check out our special offer and discounts"
        data={pricingInfo}
        itemsToShow={4}
        renderItem={(props, i) => <OfferCard {...props} key={i} />}
      />
    </div>
  );
}

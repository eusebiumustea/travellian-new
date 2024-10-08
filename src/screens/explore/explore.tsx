import { Carousel, DestinationCard } from "../../ui-components";

export function Explore() {
  return (
    <div id="explore" className="pt-16 md:pt-36">
      <Carousel
        itemsToShow={4}
        title="Popular Destinations"
        subtitle="Most popular destinations around the world, from historical places to natural wonders."
        data={[
          {
            image:
              "https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg",
            destination: "Berlin, Germany",
            locationName: "Monument of Berlin",
          },
          {
            image:
              "https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg",
            destination: "Berlin, Germany",
            locationName: "Monument of Berlin",
          },
          {
            image:
              "https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg",
            destination: "Berlin, Germany",
            locationName: "Monument of Berlin",
          },
          {
            image:
              "https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg",
            destination: "Berlin, Germany",
            locationName: "Monument of Berlin",
          },
          {
            image:
              "https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg",
            destination: "Berlin, Germany",
            locationName: "Monument of Berlin",
          },
          {
            image:
              "https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg",
            destination: "Berlin, Germany",
            locationName: "Monument of Berlin",
          },
          {
            image:
              "https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg",
            destination: "Berlin, Germany",
            locationName: "Monument of Berlin",
          },
          {
            image:
              "https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg",
            destination: "Berlin, Germany",
            locationName: "Monument of Berlin",
          },
          {
            image:
              "https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg",
            destination: "Berlin, Germany",
            locationName: "Monument of Berlin",
          },
          {
            image:
              "https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg",
            destination: "Berlin, Germany",
            locationName: "Monument of Berlin",
          },
        ]}
        renderItem={(props, index) => (
          <DestinationCard key={index} {...props} />
        )}
      />
    </div>
  );
}

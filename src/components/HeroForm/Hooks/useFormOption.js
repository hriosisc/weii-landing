import FormDelivery from "../FormDelivery";
import FormDeliveryPerson from "../FormDeliveryPerson";

export const useFormOption = ({
  activeOption,
  deliveryTrack,
  handleOrigin,
  handleDestination
}) => {

  const form = activeOption === 0
    ? <FormDelivery
      deliveryTrack={deliveryTrack}
      handleOrigin={handleOrigin}
      handleDestination={handleDestination}
    />
    : <FormDeliveryPerson
      deliveryTrack={deliveryTrack}
      handleOrigin={handleOrigin}
      handleDestination={handleDestination} />

  return {
    form
  }
}

export default useFormOption;
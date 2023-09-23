import { Disclosure } from "@headlessui/react";
import FilterDisclosureBody from "./filter-disclosure-body";
import FilterDisclosureTitle from "./filter-disclosure-title";
import { useRef } from "react";

const FilterDisclosure = ({ name, children }) => {
  const ref = useRef(`ref-${name}`);
  return (
    <Disclosure
      ref={ref}
      as="div"
      className="border-t border-gray-200 px-4 py-6"
    >
      {({ open }) => (
        <>
          <FilterDisclosureTitle title={name} open={open} />
          <FilterDisclosureBody children={children} />
        </>
      )}
    </Disclosure>
  );
};
export default FilterDisclosure;

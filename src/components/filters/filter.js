import { Disclosure } from "@headlessui/react";
import FilterBody from "./filter-body";
import FilterTitle from "./filter-title";
import { useRef } from "react";

const Filter = ({ name, children }) => {
  const ref = useRef(`ref-${name}`);
  return (
    <Disclosure
      ref={ref}
      as="div"
      className="border-t border-gray-200 px-4 py-6"
    >
      {({ open }) => (
        <>
          <FilterTitle title={name} open={open} />
          <FilterBody children={children} />
        </>
      )}
    </Disclosure>
  );
};
export default Filter;

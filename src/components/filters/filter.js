import { Disclosure } from "@headlessui/react";
import FilterBody from "./filter-body";
import FilterTitle from "./filter-title";

const Filter = ({ name, children }) => {
  return (
    <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
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

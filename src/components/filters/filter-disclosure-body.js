import { Disclosure } from "@headlessui/react";

const FilterDisclosureBody = ({ children }) => {
  return (
    <Disclosure.Panel className="pt-6">
      <div className="space-y-4">
        {children}
      </div>
    </Disclosure.Panel>
  );
};

export default FilterDisclosureBody;

import { Disclosure } from "@headlessui/react";

const FilterBody = ({ children }) => {
  return (
    <Disclosure.Panel className="pt-6">
      <div className="space-y-4">
        aaaa{children}
      </div>
    </Disclosure.Panel>
  );
};

export default FilterBody;

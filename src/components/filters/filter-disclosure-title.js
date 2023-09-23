import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const FilterDisclosureTitle = ({ title, open }) => {
  return (
    <h3 className="-my-3 flow-root">
      <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-text hover:text-gray-500">
        <span className={`font-medium text-3xl ${open && "text-gray-900"}`}>
          {title}
        </span>
        <span className="ml-6 flex items-center">
          {open ? (
            <MinusIcon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <PlusIcon className="h-5 w-5" aria-hidden="true" />
          )}
        </span>
      </Disclosure.Button>
    </h3>
  );
};

export default FilterDisclosureTitle;

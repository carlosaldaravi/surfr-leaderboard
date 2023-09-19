import { Fragment } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import Input from "./UI/input";
import Filter from "./filter";
import FilterLocation from "./filter-location";
import FilterPeriod from "./filter-period";

const LeaderboardFiltersMobile = ({
  mobileFiltersOpen,
  onCloseMobileFilters,
  countryValue,
  spotValue,
  onChangePeriod,
  onChangeCountryValue,
  onChangeSpotValue,
}) => {
  return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onCloseMobileFilters}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-5xl font-bold text-text">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-secondary"
                  onClick={() => onCloseMobileFilters(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                {/* <FilterLocation
                  countryValue={countryValue}
                  spotValue={spotValue}
                  onSetCountryValue={(value) => onChangeCountryValue(value)}
                  onSetSpotValue={(value) => onChangeSpotValue(value)}
                /> */}
                <FilterPeriod
                  onChangePeriod={(period) => onChangePeriod(period)}
                />
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LeaderboardFiltersMobile;

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FilterPeriod from "./period/filter-period";
import FilterGender from "./gender/filter-gender";

const FiltersMobile = ({
  mobileFiltersOpen,
  onCloseMobileFilters,
  filtersState,
  onChangePeriod,
  onChangeGender,
  onChangeLocation,
}) => {
  const onChangePeriodHandler = (period) => {
    onChangePeriod(period);
    onCloseMobileFilters(false);
  };
  const onChangeGenderHandler = (gender) => {
    onChangeGender(gender);
    onCloseMobileFilters(false);
  };
  const onChangeLocationHandler = (location) => {
    onChangeGender(location);
    onCloseMobileFilters(false);
  };
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
                  filtersState={filtersState}
                  onChangeLocation={(location) => onChangeLocationHandler(location)}
                /> */}
                <FilterPeriod
                  filtersState={filtersState}
                  onChangePeriod={(period) => onChangePeriodHandler(period)}
                />
                <FilterGender
                  filtersState={filtersState}
                  onChangeGender={(gender) => onChangeGenderHandler(gender)}
                />
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default FiltersMobile;

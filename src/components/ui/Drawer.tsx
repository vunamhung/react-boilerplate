import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type Props = { visible: any; toggle: any; children: ReactNode };
export const Drawer: FC<Props> = ({ visible, toggle, children }) => {
  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-hidden" onClose={toggle}>
        <div className="min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="-left-64"
            enterTo="left-0"
            leave="ease-in duration-200"
            leaveFrom="left-0"
            leaveTo="-left-64"
          >
            <div className="inline-block h-screen w-64 transform overflow-y-scroll bg-white p-3 text-left shadow-xl transition-all lg:p-6">
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

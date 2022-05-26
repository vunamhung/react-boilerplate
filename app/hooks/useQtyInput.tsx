import { useState } from 'react';
import { useDebounce } from 'ahooks';
import { useImmerReducer } from 'use-immer';

export function useQtyInput(defaultValue: number) {
  const [quantity, dispatch] = useImmerReducer((draft: number, type: 'increment' | 'decrement' | 'reset') => {
    if (type === 'reset') {
      return defaultValue;
    } else if (type === 'increment') {
      return draft + 1;
    } else if (type === 'decrement') {
      return draft - 1;
    }
  }, defaultValue);

  const [updateQuantity, setUpdateQuantity] = useState(false);

  const dec = () => {
    if (quantity > 1) {
      dispatch('decrement');
      setUpdateQuantity(true);
    }
  };

  const icr = () => {
    dispatch('increment');
    setUpdateQuantity(true);
  };

  const dQuantity = useDebounce(quantity, { wait: 400 });

  const QtyInput = ({ className, label }: { className?: string; label?: string }) => (
    <div className={className}>
      {label && <p className="mb-2">{label}</p>}
      <div className="flex">
        <button type="button" className="form-field form-input w-8 p-0 text-center lg:w-10 lg:py-1 lg:px-2" onClick={dec}>
          <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
          </svg>
        </button>
        <input className="form-field form-input -mx-px w-8 p-0 text-center text-center lg:w-10 lg:py-1 lg:px-2" value={quantity} readOnly />
        <button type="button" className="form-field form-input w-8 p-0 text-center lg:w-10 lg:py-1 lg:px-2" onClick={icr}>
          <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
    </div>
  );

  return { quantity, dQuantity, updateQuantity, QtyInput };
}

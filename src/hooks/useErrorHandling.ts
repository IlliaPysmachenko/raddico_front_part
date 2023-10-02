import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMessage } from '@/src/redux/loading/loading';

const useErrorHandling = (isError: boolean) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isError) {
      const timeout = setTimeout(() => {
        dispatch(closeMessage());
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isError]);
};

export default useErrorHandling;

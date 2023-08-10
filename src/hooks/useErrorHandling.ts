import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeError } from '@/src/redux/loading/loading';

const useErrorHandling = (isError: boolean) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            const timeout = setTimeout(() => {
                dispatch(closeError());
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [isError]);
};

export default useErrorHandling;
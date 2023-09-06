import React from 'react';
import Header from '@/src/layout/header/Header';
import { useAppSelector } from '@/src/redux/hooks';
import Preloader from '@/src/components/preloader/Preloader';
import PopupComponent from '@/src/components/error/PopupComponent';
// import useErrorHandling from '@/src/hooks/useErrorHandling';

function Layout({ children }: any): React.JSX.Element {
  const isLoading = useAppSelector((state) => state.loading.isLoading);
  const serverMessage = useAppSelector((state) => state.loading.serverMessage);

  // useErrorHandling(isError);

  return (
    <>
      {isLoading && <Preloader />}
      <div className="container">
        <Header />
        <main>
          {children}
        </main>

      </div>
      {serverMessage.isShoved && <PopupComponent serverMessage={serverMessage} />}
    </>
  );
}

export default Layout;

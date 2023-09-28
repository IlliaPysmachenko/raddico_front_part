import React, { useEffect } from 'react';
import Header from '@/src/layout/header/Header';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import Preloader from '@/src/components/preloader/Preloader';
import PopupComponent from '@/src/components/error/PopupComponent';
import { getOptions } from '@/src/screens/home/searchPanelBlock/slice/thunkCreators';
import { getAeTitles } from '@/src/screens/configurationPage/aeTitlesTab/slice/thunkCreators';
import { signIn, useSession } from 'next-auth/react';

function Layout({ children }: any): React.JSX.Element {
  const isLoading = useAppSelector((state) => state.loading.isLoading);
  const serverMessage = useAppSelector((state) => state.loading.serverMessage);
  const dispatch = useAppDispatch();
  const { data: session, status } = useSession();

  useEffect(() => {
    dispatch(getOptions());
    dispatch(getAeTitles());
  }, []);

  useEffect(() => {
    if (status === 'unauthenticated') {
      // Если нет сессии, перенаправляем на страницу входа Keycloak
      signIn('keycloak');
    }
  }, [status]);

  return (
    <>
      {isLoading && <Preloader />}
      <div className="container">
        {(status === 'unauthenticated') ? <div>You are not authorized</div> : (
          <>
            <Header />
            <main>
              {children}
            </main>
          </>
        )}

      </div>
      {
        // @ts-ignore
        serverMessage.isShoved && <PopupComponent serverMessage={serverMessage} />
      }
    </>
  );
}

export default Layout;

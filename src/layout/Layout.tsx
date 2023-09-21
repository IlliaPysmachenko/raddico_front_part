import React, { useEffect } from 'react';
import Header from '@/src/layout/header/Header';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import Preloader from '@/src/components/preloader/Preloader';
import PopupComponent from '@/src/components/error/PopupComponent';
import { getOptions } from '@/src/screens/home/searchPanelBlock/slice/thunkCreators';
import { getAeTitles } from '@/src/screens/configurationPage/aeTitlesTab/slice/thunkCreators';
import AuthStatus from '@/src/components/authStatus';
import SessionProviderWrapper from '@/utils/sessionPoviderWrapper';


function Layout({ children }: any): React.JSX.Element {
  const isLoading = useAppSelector((state) => state.loading.isLoading);
  const serverMessage = useAppSelector((state) => state.loading.serverMessage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOptions());
    dispatch(getAeTitles());
  }, []);

  return (
    <SessionProviderWrapper>
      {isLoading && <Preloader />}
      <div className="container">
        <Header />
        <AuthStatus />
        <main>
          {children}
        </main>

      </div>
      {
        // @ts-ignore
        serverMessage.isShoved && <PopupComponent serverMessage={serverMessage} />
      }
    </SessionProviderWrapper>
  );
}

export default Layout;

// Client example
// import { signIn, useSession } from "next-auth/client";
// import { useEffect } from "react";
//
// const HomePage() {
//   const [session] = useSession();
//
//   useEffect(() => {
//     if (session?.error === "RefreshAccessTokenError") {
//       signIn('keycloak', {
//         callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/application`,
//       }); // Force sign in to hopefully resolve error
//     }
//   }, [session]);
//
//   return (...)
// }

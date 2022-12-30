import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const FormScreen = lazy(() => import('../pages/FormScreen'));
const ContactScreen = lazy(() => import('../pages/ContactScreen'));
const SharedLayout = lazy(() => import('./SharedLayout'));

export const App = () => {
  return (
    <Provider store={store}>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="form" element={<FormScreen />} />
            <Route path="contacts" element={<ContactScreen />} />
            <Route path="*" element={<FormScreen />} />
          </Route>
        </Routes>
      </Suspense>
    </Provider>
  );
};

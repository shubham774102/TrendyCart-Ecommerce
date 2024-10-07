import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);

  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: 'include',
      });

      if (!dataResponse.ok) {
        throw new Error('Failed to fetch user details');
      }

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data));
      } else {
        console.error('Error fetching user details:', dataApi.message);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const fetchUserAddToCart = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
        method: SummaryApi.addToCartProductCount.method,
        credentials: 'include',
      });

      if (!dataResponse.ok) {
        throw new Error('Failed to fetch cart product count');
      }

      const dataApi = await dataResponse.json();

      setCartProductCount(dataApi?.data?.count || 0);
    } catch (error) {
      console.error('Error fetching cart product count:', error);
    }
  };

  useEffect(() => {
    Promise.all([fetchUserDetails(), fetchUserAddToCart()])
      .catch((error) => {
        console.error('Error during fetching data:', error);
      });
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, // user detail fetch
          cartProductCount, // current user add to cart product count
          fetchUserAddToCart,
        }}
      >
        <ToastContainer position='top-center' />
        <Header />
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;

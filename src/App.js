import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/home/index.screen';
import FrontPage from './routes/frontpage/index.route';
import ShopScreen from './screens/shop/shop';
import ContactScreen from './screens/contact/contact';
import AboutScreen from './screens/about/about';
import LoginScreen from './screens/login/index.screen';
import NotFoundScreen from './screens/not-found/not-found';
import SinglePostScreen from './screens/single-post-screen/single-post-screen';
import ErrorBoundary from './utils/error-boundary';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<FrontPage />} >
        <Route index element={<HomeScreen />} />
        <Route path="shop" element={<ShopScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path='login' element={<LoginScreen />} />
        <Route path="posts/:slug" element={
          <ErrorBoundary>
            <SinglePostScreen />
          </ErrorBoundary>
        } />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default App;

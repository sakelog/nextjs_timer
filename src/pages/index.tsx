import { Provider } from 'react-redux';
import store from '../redux/store';

import AppWrapper from '../app/AppWrapper';

const TopPage = () => {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};

export default TopPage;

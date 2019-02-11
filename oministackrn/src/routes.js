import { createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/Login';

const Routes = createAppContainer( //function wrapper all routes of our application
    createSwitchNavigator({
         Login,
    })
); 

export default Routes;
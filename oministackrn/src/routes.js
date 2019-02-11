import { createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/Login';
import Timeline from './pages/Timeline';

const Routes = createAppContainer( //function wrapper all routes of our application
    createSwitchNavigator({
         Login,
         Timeline,
    })
); 

export default Routes;
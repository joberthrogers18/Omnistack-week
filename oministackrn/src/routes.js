import { createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

const Routes = createAppContainer( //function wrapper all routes of our application / no visual efect
    createSwitchNavigator({
         Login,
         App: createStackNavigator({ // navigation with events, and back to page before
            Timeline,
            New
         })
    })
); 

export default Routes;
import { createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/Login';
import Timeline from './pages/Timeline';

const Routes = createAppContainer( //function wrapper all routes of our application / no visual efect
    createSwitchNavigator({
         Login,
         App: createStackNavigator({
            Timeline
         })
    })
); 

export default Routes;
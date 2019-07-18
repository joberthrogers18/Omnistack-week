import { createAppContainer, createStackNavigator } from 'react-navigation';

import Feed from './pages/Feed';
import New from './pages/New';

// Necessário para definir as rotas da aplicação
export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    })
);
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

// Switch me garante que apenas uma das rotas vai se chamada
// exact quer dizer que para chamar essa rota é necessário ser apenas o contexto em si ("/")
// como é o caso do /new que tem / também em comum com a rota principal

function Routes (){
    return(
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    );
}

export default Routes;
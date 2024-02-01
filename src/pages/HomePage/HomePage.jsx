import React from 'react';
import Introduction from '../../components/Introduction/Introduction';
import Welcome from '../../components/Welcome/Welcome';
import Choose from '../../components/Choose/Choose';

function HomePage(){
    return (
        <>
        <Welcome />
        <Introduction />
        <Choose />
        </>
    )
}
export default HomePage;
import React from 'react';
import Card from '../Components/Card';
import HomeCardContainer from '../Components/HomeCardContainer';
import IntroductionContainer from '../Components/IntroductionContainer';

export default class Home extends React.Component {
    render() {
        return <div>
            <div className='h-screen backdrop-blur-sm bg-slate-600'>
                <IntroductionContainer/>
                <HomeCardContainer />
            </div>
        </div>;
    }
}
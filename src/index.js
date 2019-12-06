import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Tabs from './content/widgets/Tab';
import HomeContent from './content/pages/home/Home';
import DashBoard from './content/pages/dashboard/DashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
    render () {
        return (
            <div>
                <Tabs />
                <HomeContent />
                <DashBoard />
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

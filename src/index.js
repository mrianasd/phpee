import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Tabs from './content/widgets/Tab';
import HomeContent from './content/pages/home/Home';
import DashBoard from './content/pages/dashboard/DashBoard';
import Settings from './content/pages/settings/Settings';
import ContactList from './content/pages/contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
    render () {
        return (
            <div>
                <Tabs />
                <HomeContent />
                <DashBoard />
                <Settings />
                <ContactList />
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

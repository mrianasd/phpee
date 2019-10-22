import React from 'react';

class TabLink extends React.Component {
    render() {
        return (
            <button 
                className="tablinks" 
                onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
            
        );
    }
}

class Tabs extends React.Component {

    handleTabClick(id) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(id).style.display = "block";
        for (i = 0; i < tablinks.length; i++) {
            if (tablinks[i].textContent === id) {
                tablinks[i].className += " active";
                break;
            }             
        }
    }

    renderTab(i) {
        return <TabLink 
                value={i}
                onClick={() => this.handleTabClick(i)} />
    }

    render() {
        return (
            <div>
                <div className="tab">
                    {this.renderTab("Home")}
                    {this.renderTab("DashBoard")}
                    {this.renderTab("Settings")}
                    {this.renderTab("Contacts")}
                </div>
            </div>
        );
    }
}

export default Tabs;
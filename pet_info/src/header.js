/* Header component, where it's formed by 2 children, one for displaying the name and img of the user (.player); and the other one for further information (.other_info) */

import './header.css';

const Header = () => {
    return (
        <div className="header">
    
            <div className="player">
                <p>Player</p>
            </div>

            <div className="other_info">
                <p>Age</p>
                <p>Postcode</p>
                <p>City</p>
                <p>Country</p>
            </div>

        </div>
    );
};

export default Header;
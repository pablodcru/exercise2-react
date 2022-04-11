/* Card component. Each card will be divided in 2 main parts. Img and full name will formed the left side; and age, postcode, city and country will compound the right side */

import './infoCard.css';

const InfoCard = ({ userData }) => {
    return (
        
        <div className="user">
            <div className="left_side">
                <div className="user_image"><img src={userData.picture.thumbnail} />
                </div>

                <div className="user_full_name">
                    <p>{userData.name.title}</p>
                    <div className="user_name">
                        <p>{userData.name.first}</p>
                        <p>&nbsp;{userData.name.last}</p> 
                    </div>
                </div>
            </div>

            <div className="right_side"> 
                <p>{userData.dob.age}</p> 
                <p>&nbsp;{userData.location.postcode}</p> 
                <p>&nbsp;{userData.location.city}</p> 
                <p>&nbsp;{userData.location.country}</p> 
            </div>

        </div>
                
        
    )
};

export default InfoCard;
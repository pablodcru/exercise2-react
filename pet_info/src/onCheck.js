/* In this component is invoqued when clicking on the cards. It was supposed to open a new link and display the data from the clicked card, but I could not make it... When I redirected the page after clicking it, the information disappeared and there was nothing to display. I have read that this is possible with redux but I could not implemented it on time... So I just let display the title and last name on the console */

const OnCheck = (user) => {
    return  (
        console.log(user.name.title, user.name.last)
    )
};

export default OnCheck;
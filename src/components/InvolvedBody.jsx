import React from 'react';
import InvolvedCard from './InvolvedCard';
import SectionBreak from './SectionBreak';

const InvolvedBody = (props) => {
    return (
        <div className='container'>
            <InvolvedCard className={"row row-content"} 
                title={"Volunteer"}
                contentOne={"We provide thousands of services to healthcare workers and it could not be done without you. We are always looking for volunteers to help us out. If you are interested in volunteering, please contact us."}
                contentTwo={"To learn more about the volunteer process, please click the button below."}
                imageSrc={"assets/images/vol-barber.jpg"}
                imageName={"volunteer image"}
                modalHeaderText={"Volunteer"}
                modalBodyText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae explicabo nam necessitatibus enim, asperiores, exercitationem neque suscipit accusantium quas architecto dolorem ipsa reprehenderit quo eius aspernatur numquam ut nulla hic consequatur perspiciatis nihil illo. Inventore illum excepturi dolor placeat repellat quisquam, facilis asperiores tempore consequatur hic exercitationem debitis officiis."}
                value={"Go"}
                to={"/volunteer"}
            />
            <SectionBreak />

            <InvolvedCard className={"row row-content flex-lg-row-reverse"}
                title={"Sponsor Us"}
                contentOne={"Host A Healthcare Hero is a non-profit organization.We are funded 100% by the generosity of our Mission Sponsors"}
                contentTwo={"If your organization would like to become a Mission Sponsor, just click the button below. contact us"}
                imageSrc={"assets/images/sponsor.jpeg"}
                imageName={"sponsor image"}
                modalHeaderText={"Sponsor Us"}
                modalBodyText={"This is a test"}
                value={"Go"}
                to={"/contact"}
            />
            <SectionBreak />

            <InvolvedCard className={"row row-content "}
                title={"Donations"}
                contentOne={"We have several ways you can donate."}
                contentTwo={"You or your organization can donate items or become a designated drop-off."}
                contentThree={"Or you can donate directly to the local food pantry."}
                imageSrc={"assets/images/food-donate.jpg"}
                imageName={"donations image"}
                modalHeaderText={"Donate"}
                modalBodyText={"This is a test"}
                value={"Go"}
                to={"/contact"}
            /> 
        </div>
    );
}

export default InvolvedBody;
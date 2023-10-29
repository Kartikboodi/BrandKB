import Layout from "../../components/Layout";
import ProfileImage from "./components/ProfileImage/ProfileImage";
import ProfileName from "./components/ProfileName/ProfileName";
import ProfileSummary from "./components/ProfileSummary/ProfileSummary";

import "./Profile.css";

const Profile = () => {
  return (
    <Layout>
      <div className="ProfilePage">
        <ProfileImage />
        <ProfileName />
      </div>
      <hr />
      <ProfileSummary delay={30} />
    </Layout>
  );
};

export default Profile;

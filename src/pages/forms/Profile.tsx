import { Page } from "@/components/layouts/Page";

const Profile = () => {
  return (
    <Page>
      <Page.Navbar title="Profile" />
      <Page.Breadcrumb className="px-4" />
      <Page.Content>Profile</Page.Content>
    </Page>
  );
};

export default Profile;


import LandingPage from "views/Components/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import EditProfilePage from "views/ProfilePage/EditProfile.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";
import Home from "views/Home/Home.jsx";
import CreateStory from "views/Story/CreateStory.jsx";
import UploadCover from "views/Story/UploadCover.jsx";
import CreateChapter from "views/Story/CreateChapter.jsx";
import ChapterInfo from "views/Story/ChapterInfo.jsx";
import ReadStory from "views/Story/ReadStory.jsx";


var indexRoutes = [
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/edit-profile-page", name: "EditProfilePage", component: EditProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/register-page", name: "RegisterPage", component: RegisterPage },
  { path: "/home", name: "Home", component: Home},
  { path: "/create-new-story", name: "Create New Story", component: CreateStory},
  { path: "/upload-cover-story", name: "Upload Cover Story", component: UploadCover},
  { path: "/create-chapter", name: "Create New Chapter", component: CreateChapter},
  { path: "/chapter-info", name: "Chapter Information", component: ChapterInfo},
  { path: "/read-story", name: "Read Story", component: ReadStory},
  { path: "/", name: "LandingPage", component: LandingPage  }

];

export default indexRoutes;

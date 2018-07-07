import LandingPage from "views/Components/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";
import Home from "views/Home/Home.jsx";
import CreateStory from "views/Story/CreateStory.jsx";


var indexRoutes = [
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/register-page", name: "RegisterPage", component: RegisterPage},
  { path: "/home", name: "Home", component: Home},
  { path: "/create-new-story", name: "Create New Story", component: CreateStory},
  { path: "/", name: "LandingPage", component: LandingPage  }

];

export default indexRoutes;

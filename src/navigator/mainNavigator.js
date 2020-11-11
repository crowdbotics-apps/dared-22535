import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn2171591Navigator from '../features/SignIn2171591/navigator';
import Settings171589Navigator from '../features/Settings171589/navigator';
import UserProfile171582Navigator from '../features/UserProfile171582/navigator';
import Settings171581Navigator from '../features/Settings171581/navigator';
import Settings171579Navigator from '../features/Settings171579/navigator';
import SignIn2171577Navigator from '../features/SignIn2171577/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn2171591: { screen: SignIn2171591Navigator },
Settings171589: { screen: Settings171589Navigator },
UserProfile171582: { screen: UserProfile171582Navigator },
Settings171581: { screen: Settings171581Navigator },
Settings171579: { screen: Settings171579Navigator },
SignIn2171577: { screen: SignIn2171577Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

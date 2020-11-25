import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings178743Navigator from '../features/Settings178743/navigator';
import Settings178728Navigator from '../features/Settings178728/navigator';
import NotificationList178727Navigator from '../features/NotificationList178727/navigator';
import Maps178726Navigator from '../features/Maps178726/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings178743: { screen: Settings178743Navigator },
Settings178728: { screen: Settings178728Navigator },
NotificationList178727: { screen: NotificationList178727Navigator },
Maps178726: { screen: Maps178726Navigator },

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

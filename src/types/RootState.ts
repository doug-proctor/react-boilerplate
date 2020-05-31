import { AuthState } from 'auth/types';
import { ThemeState } from 'styles/theme/types';
import { ThingsPageState } from 'app/containers/ThingsPage/types';
import { ThingPageState } from 'app/containers/ThingPage/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  auth?: AuthState;
  theme?: ThemeState;
  thingPage?: ThingPageState;
  thingsPage?: ThingsPageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}

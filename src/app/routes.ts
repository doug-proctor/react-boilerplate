import { Routes } from 'types/Routes';

export const routes: Routes = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  THING: '/things/:thingName',
  THINGS: '/things',
};

const route = (name: string, params?: {}): string => {
  const raw = routes[name];
  let segments = raw.split('/');
  segments = segments.splice(1, segments.length);
  const processedSegments: string[] = [];

  // For each, replace any elements starting with : with the same name from the params
  segments.forEach(bit => {
    if (bit.charAt(0) === ':') {
      const param = bit.slice(1);
      if (params) {
        const value = params[param];
        processedSegments.push(value);
      }
    } else {
      processedSegments.push(bit);
    }
  });

  return `/${processedSegments.join('/')}`;
};

export default route;

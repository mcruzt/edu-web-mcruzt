// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyBGN5H8mLSmkw94No0ABxepGAuF6Kc5LEM',
    authDomain: 'edu-web-mcruzt.firebaseapp.com',
    databaseURL: 'https://edu-web-mcruzt.firebaseio.com',
    projectId: 'edu-web-mcruzt',
    storageBucket: 'edu-web-mcruzt.appspot.com',
    messagingSenderId: '701139239892',
    appId: '1:701139239892:web:6fffbde234072fd3c44c41'
  },
  apiUrl: 'https://rickandmortyapi.com/api/',
  routeHome: '/home'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

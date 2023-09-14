// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
    production: false,
    firebase: {
      apiKey: "AIzaSyB6ecbkcaVRHjx5PcXHIQf_UqvEim423s8",
      authDomain: "church-manager-6ed4a.firebaseapp.com",
      databaseURL: "https://church-manager-6ed4a-default-rtdb.firebaseio.com",
      projectId: "church-manager-6ed4a",
      storageBucket: "church-manager-6ed4a.appspot.com",
      messagingSenderId: "335382472662",
      appId: "1:335382472662:web:408dfbe48642cd9ad0e677",
      measurementId: "G-7LYWJBWYVL"
    }
  };


// Initialize Firebase
//const app = initializeApp(environment.firebase);
//const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

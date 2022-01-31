# blessthismess
Family organizing mobile/webapp. Whether the mess is your house or your life, I aim to help.

Blessthismess allows you to organize trackable elements such as groceries,
kids' schedules, etc. into distinct **Dashboards** that can contain any tracking elements that you require. These can be calendars, reminder lists, normal lists, and even 
images.
<p float='left'>
  <img width="232" alt="Screen Shot 2022-01-10 at 6 30 21 PM" src="https://user-images.githubusercontent.com/20570509/151584056-ac43aa5b-1233-4bca-a345-cb27f3b86490.png">
<img width="232" alt="Screen Shot 2022-01-10 at 6 30 28 PM" src="https://user-images.githubusercontent.com/20570509/151584060-b9de9401-36e8-4bb3-816f-effdf3885fe5.png">
<img width="232" alt="Screen Shot 2022-01-10 at 6 30 31 PM" src="https://user-images.githubusercontent.com/20570509/151584061-d61504f8-6777-47c8-b952-2f34746bddba.png">
</p>

The app does not require an account to be registered, you can use it entirely offline if you choose. However, you will need an account 
to share dashboards and contribute to households with other users.

###### Some Notes - *As of January 2022*
- The app is not yet fully functional, the lastest build only uses predefined user data for demo and testing purposes
- Account creation and management is also nonfunctional at the moment
- I am in the process of properly defining the data model, so data points may change over time

###### How to Build
- Run `npm install --legacy-peer-deps` inside the root directory `/blessthismess`
- Run `npm start` (or `expo start`) inside same directory to initialize the expo developer tools in browser and start the bundler.
- If you are running the app on a mobile platform, you will need to have the Expo Go app installed on the target device. This can be found on the iOS App Store and Google Play Store 
- From the bundler, you can choose what platform to run the app on. Note, my primary platform of interest is iOS, so some things may not work quite as intended on android/web browsers. That is not to say that I am not working on them at all, just that they aren't my hightest priority at the moment.
- Note: If for whatever reason the app fails to build/bundle, try deleting /node_modules and package-lock.json and running npm install --legacy-peer-deps

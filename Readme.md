# Email Password Authentication Firebase In React Native Expo

This is a very basic project with only two screens

* Login/Singup Screen
* Home Screen

## Login/Singup Screen

This is a one screen with functionality for both login and signup.

![](readmeImages/1.png) ![](readmeImages/1.png) 



## Home Screen
On this screen we are displaying the login user details with a logout button


## Steps For Authentication
First add the firebase package in your react natice expo project
```
expo install firebase
```

If you only want to use the Email/Password Firebase Authentication in your project. Then you only have to add the **Web App**  in firebase project.

![](readmeImages/3.png)
![](readmeImages/4.png)

Then make a file named **firebase.js** in the root directory of your project and add the following highlighted code in that file

![](readmeImages/5.png)

We **DO NOT** have to do the following command
```
npm install firebase
```
As we are using expo and we have already installed the firebase package using expo



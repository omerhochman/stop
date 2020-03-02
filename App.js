import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginButton, AccessToken, LoginManager} from "react-native-fbsdk"

// ...
for (idx in links) {
  const link = links[idx];
  if (link.href.indexOf("https://www.facebook.com/") > -1 &&
      link.href.indexOf("https://www.facebook.com/pages") === -1) {

    console.log(link.href)
  }
}
// Attempt a login using the Facebook login dialog asking for default permissions.
LoginManager.logInWithPermissions(["public_profile"]).then(
    function(result) {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log(
            "Login success with permissions: " +
            result.grantedPermissions.toString()
        );
      }
    },
    function(error) {
      console.log("Login fail with error: " + error);
    }
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hi</Text>
      <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      console.log(data.accessToken.toString())
                    }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

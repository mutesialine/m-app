// import * as React from "react";
// import { View } from "react-native";
// import { BottomNavigation, Text } from "react-native-paper";

// const MusicRoute = () => <Text className="text-blue-600 py-3">Music</Text>;

// const AlbumsRoute = () => <Text className="text-blue-600 py-3">Albums</Text>;

// const RecentsRoute = () => <Text className="text-blue-600 py-3">Recents</Text>;

// const NotificationsRoute = () => (
//   <Text className="text-blue-600 py-3">Notifications</Text>
// );

// export default function FooterNavigation() {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {
//       key: "music",
//       title: "Favorites",
//       focusedIcon: "heart",
//       unfocusedIcon: "heart-outline",
//     },
//     { key: "albums", title: "Albums", focusedIcon: "album" },
//     { key: "recents", title: "Recents", focusedIcon: "history" },
//     {
//       key: "notifications",
//       title: "Notifications",
//       focusedIcon: "bell",
//       unfocusedIcon: "bell-outline",
//     },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     music: MusicRoute,
//     albums: AlbumsRoute,
//     recents: RecentsRoute,
//     notifications: NotificationsRoute,
//   });

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//     />
//   );
// }

import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

 export default function FooterNavigation  () {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "music", title: "Music", icon: "queue-music" },
    { key: "albums", title: "Albums", icon: "album" },
    { key: "recents", title: "Recents", icon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
  }

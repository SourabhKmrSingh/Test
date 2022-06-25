// import "dotenv/config";
export default {
  expo: {
    name: "Zenquip",
    slug: "Zenquip",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/Splash.png",
      resizeMode: "cover",
      
    },
    updates: {
      
      fallbackToCacheTimeout: 300000,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
       
      },
      "package": "com.zenquip.NewReactNative",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
};

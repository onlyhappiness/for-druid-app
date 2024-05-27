import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <WebView
          source={{uri: 'https://druid-diary.vercel.app/'}}
          javaScriptEnabled={true}
          domStorageEnabled={true} // storage 허용
          allowFileAccess={true} // 파일 접근 허용
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

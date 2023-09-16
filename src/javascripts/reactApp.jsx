// パッケージreact-domとreactの読み込み
import ReactDom from 'react-dom';
import * as React from 'react';
// Alert.tsxの読み込み
import Alert from './_Alert.tsx';

// コンポーネント定義
const App = (props) =>{
  return (
    <div style={{ color: '#000' }}>
      Hello, React App
      <Alert message="Alert.tsx success" />
    </div>
  );
};

const reactRoot= document.getElementById('react-root');
if (reactRoot) {
  ReactDom.render(<App />,reactRoot);
} else {
  console.log('No root element found');
}

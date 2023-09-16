import * as React from 'react';
import styled from 'styled-components';

// 「スタイルドコンポーネント」スタイルをコンポーネント内に閉じ込めてローカルで使用
const AlertContainer = styled.div`
  background-color: green;
  color: #fff;
  padding: 1rem;
`;

// Reactコンポーネントが受け取る引数messageはstring型
const Alert: React.FC<{ message: string }> = (props)=>{
  const {message}= props;
  return (
    // <div style={{ background:'green', color:'#fff', padding:'1rem'}}>
    <AlertContainer>
      {message}
    </AlertContainer>
    // </div>
  );
}

// Alertというコンポーネントを出力
export default Alert;

import * as React from 'react';

// Reactコンポーネントが受け取る引数messageはstring型
const Alert: React.FC<{ message: string }> = (props)=>{
  const {message}= props;
  return (
    <div style={{ background:'green', color:'#fff', padding:'1rem'}}>
      {message}
    </div>
  );
}

// Alertというコンポーネントを出力
export default Alert;

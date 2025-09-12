// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// 1. 导入 ReactDOM 的 createRoot 方法（替换原有的默认导入）
import React from 'react';
import { createRoot } from 'react-dom/client'; // 关键修改：导入 createRoot
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // 2. 用 createRoot 替代 ReactDOM.render
  const root = createRoot(div); // 创建根节点
  root.render(<App />); // 渲染 App 组件
  // 3. 用 root.unmount() 替代 ReactDOM.unmountComponentAtNode
  root.unmount(); // 卸载组件（保持文档“清理测试环境”的逻辑）
});

// （若已添加文档要求的“加法测试”，保留以下代码，无需修改）
describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});
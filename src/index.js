import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyModal from './Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyModal trigger={<button>열기</button>}>
    <h2>제목</h2>
    <p>내용</p>
  </MyModal>
);

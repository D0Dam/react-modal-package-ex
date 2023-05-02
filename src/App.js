import MyModal from './Modal';

function App() {
  return (
    <div className='App'>
      <MyModal trigger={<button>열기</button>}>
        <h2>제목</h2>
        <p>내용</p>
      </MyModal>
    </div>
  );
}

export default App;

import Header from "./components/header/Header";
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {

  const [modalShow, setModalShow] = useState(false); //main 컴포넌트 안에 있는 버튼에 줘야함

  return (
    <div id="app">
      <Header />
      <Main setModalShow={setModalShow}/>
      <Footer />
      {modalShow && <Modal setModalShow={setModalShow} />}
    </div>
  );
}
export default App;

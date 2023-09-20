import { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });



const App = () => {
    return (
        <UserInfo.Provider value={{name: 'Licat', id: 'LicatIsNotFree'}}>
            <HelloLicat />
        </UserInfo.Provider> // provider로 객체의 값 변경 가능
        // <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
    );
};

const HelloLicat = () => {

    return (
        <UserInfo.Consumer>
            {(value) => {
                return <div>
                    <h2>{value.id}</h2>
                    <strong>{value.name}</strong>
                    <HelloLicatTwo />
                </div>
            }}
        </UserInfo.Consumer>
    );
};

const HelloLicatTwo = () => {
    return (
        <UserInfo.Consumer>
            {(value) => {
                return <div>
                    <h2>Two : {value.id}</h2>
                    <strong>Two : {value.name}</strong>
                </div>
            }}
        </UserInfo.Consumer>
    );
};

export default App;


// const App = () => {
//   return (
//       <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
//   );
// };

// const HelloLicat = (props) => {
//   console.log(props)
//   return (
//       <div>
//           <h2>{props.value.id}</h2>
//           <strong>{props.value.name}</strong>
//           <HelloLicatTwo value={{ name: props.value.name, id: props.value.id }} />
//       </div>
//   );
// };

// const HelloLicatTwo = (props) => {
//   return (
//       <div>
//           <h2>Two : {props.value.id}</h2>
//           <strong>Two : {props.value.name}</strong>
//       </div>
//   );
// };

// export default App;
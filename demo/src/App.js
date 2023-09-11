import "./App.css";
import TemApp from './Component/TemApp'
function App() {
   
  return (
   <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-black" id="bg">
    <h1 className=" font-semibold text-5xl text-white animate-bounce "> weather app</h1>
    <TemApp/>
   </div>
  );
}

export default App;

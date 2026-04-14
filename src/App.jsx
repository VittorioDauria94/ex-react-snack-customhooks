import useCustomPointer from "./useCustomPointer";

function App() {
  const customPointer = useCustomPointer("🔥");
  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}

export default App;

import useWordGame from './hooks/useWordGame';
function App() {
  const {
    typeRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame();
  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
        ref={typeRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining:{timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h1>Word count:{wordCount}</h1>
    </div>
  );
}

export default App;

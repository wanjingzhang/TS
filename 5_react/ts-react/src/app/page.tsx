import Square from './Square' 

export default function Home() {
  
  function handleClick(){
      console.log('Clicked!');
  }

  return (
    <main className="min-h-screen p-24">
      <div className="board-row">
        <Square value="1" onClick={handleClick}></Square>
        <Square value="2" onClick={handleClick}></Square>
        <Square value="3" onClick={handleClick}></Square>
      </div>
      <div className="board-row">
        <Square value="4" onClick={handleClick}></Square>
        <Square value="5" onClick={handleClick}></Square>
        <Square value="6" onClick={handleClick}></Square>
      </div>
      <div className="board-row">
        <Square value="7" onClick={handleClick}></Square>
        <Square value="8" onClick={handleClick}></Square>
        <Square value="9" onClick={handleClick}></Square>
      </div> 
    </main>
  )
}

import Messagebar from "./components/messagebar/MessageBar"

const App = () => {
  return (
    <div className="bg-slate-700 px-4">
      <div className="h-screen">
        <nav className="h-[10%]">
          <h1 className="text-4xl font-bold text-white p-4">TalkPa</h1>
        </nav>

        <section className="h-[80%] bg-gray-800">
          <div></div>
        </section>
        <Messagebar />
      </div>
    </div>
  )
}

export default App

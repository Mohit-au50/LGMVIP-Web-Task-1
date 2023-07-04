import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAdd = () => {
    setTaskList(() => {
      const newData = [...taskList, task];
      setTask("");
      return newData;
    });
  };

  const handleDelete = (index) => {
    const newList = taskList.filter((v, i) => {
      return index != i;
    });
    setTaskList(newList);
  };

  return (
    <>
      <main className="w-screen h-screen bg-gradient-to-r from-sky-500 to-indigo-700 grid place-items-center">
        <section className="w-[300px] min-h-[300px] p-4">
          <header className="text-center">
            <h2 className="font-bold mb-4 text-2xl">Mohit's To Do List</h2>
            <div className="relative flex justify-between items-center">
              <input
                type="text"
                placeholder="Enter your task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="grow py-2 px-4 placeholder:italic bg-white text-black border-0 outline-0 rounded-3xl"
              />
              <button
                onClick={handleAdd}
                className="bg-gradient-to-r from-sky-500 to-indigo-700 hover:from-pink-500 hover:to-yellow-500 font-bold rounded-full px-4 py-1 absolute right-[0.25rem]  "
              >
                Add
              </button>
            </div>
          </header>

          <div className="mt-5 h-[360px] overflow-y-auto">
            {taskList.length > 0 &&
              taskList.map((item, index) => {
                return (
                  <div className="flex justify-between h-9 rounded-full px-2 my-3 bg-slate-50 text-black">
                    <div className="grow flex gap-2 items-center">
                      <input
                        type="checkbox"
                        id={ item }
                        className="peer/check hidden"
                      />
                      <label htmlFor={ item }>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="green"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </label>

                      <div className="peer-checked/check:line-through font-semibold">
                        { item }
                      </div>
                    </div>

                    <button
                      onClick={ () => handleDelete(index) }
                      className=" relative text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="crimson"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                )
              })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

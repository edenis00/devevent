export default function Home() {
  return (
    <div className="bg-cyan-950 min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mt-4 text-white">Welcome to Ptracker</h1>
        <button type="button" className="rounded-xl bg-blue-600 text-white cursor-pointer px-4 py-2 mt-4 hover:bg-blue-500">Join Us</button>
      </div>
    </div>
  )
}

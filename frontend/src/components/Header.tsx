
const Header = () => {
  return (
    <div className="mx-auto px-20 flex w-full items-center justify-between py-4 bg-[#DCE9F9]">

    <div className="flex flex-col gap-4 text-center">Cari Biasiswa</div>

    <div className="flex gap-3 justify-center  items-center">
    <div className=" flex flex-col gap-4 text-center items-center">Sign In</div>
    <button className="bg-blue-500 text-white font-semibold py-2 px-4 items-center rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
  Sign Up
</button>
    </div>
   

    </div>
  )
}

export default Header
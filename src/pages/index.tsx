export default function Home() {
  return (
    <div className="bg-[url('/backdrop.jpg')] w-screen min-h-screen bg-cover flex justify-center">
    <div className="flex flex-col items-center justify-between pb-16 gap-16 bg-black/50 w-full">
    <div className="flex justify-between w-[90%] lg:w-full gap-2 mx-auto py-8 lg:px-16 lg:py-12 items-center text-white">
      <h1 className="text-3xl font-serif font-light">GHETTO.NG</h1>
      <label className="py-2 px-3 lg:px-6 border border-white rounded-lg" htmlFor="waitlist">Join Our Waitlist</label>
    </div>
      <div className="text-center space-y-4 md:space-y-6">
        <h1 className="text-[#F2C94C] font-semibold text-3xl">Almost here...</h1>
        <p className="text-white text-xl">We are an Entertainment Management Company.</p>
      </div>
      <div className="bg-[#E0E0E0] w-[620px] max-w-[90vw] rounded-3xl text-center px-8 py-12 lg:px-16 space-y-2">
        <h2 className="text-[#219653] font-bold text-xl">Join our waitlist</h2>
        <p className="!mb-8">Sign up to get the latest updates and get notified when we launch.</p>
        <div className="flex flex-col items-center lg:flex-row gap-y-4 gap-x-2">
        <input id="waitlist" type="text" className="focus:scale-110 transition-transform ease-in-out duration-100 border text-[#BDBDBD] font-bold rounded px-4 py-2 w-full lg:min-w-[75%] text-center border-black" placeholder="example@example.com"/>
        <button className="bg-[#219653] w-fit lg:w-full px-8 lg:px-6 py-2 text-white rounded-lg">Sign Up</button>
        </div>
      </div>
    </div>
    </div>
  )
}
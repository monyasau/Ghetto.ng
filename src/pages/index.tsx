export default function Home() {
  return (
    <div className="bg-[url('/backdrop.jpg')] w-screen min-h-screen bg-cover flex justify-center">
    <div className="flex flex-col items-center justify-center gap-16">
      <div className="text-center space-y-4 md:space-y-6">
        <h1 className="text-[#F2C94C] font-semibold text-3xl">Almost here...</h1>
        <p className="text-white text-xl">We are an Entertainment Management Company.</p>
      </div>
      <div className="bg-[#E0E0E0] w-[620px] max-w-[90vw] rounded-3xl text-center px-8 py-12 lg:px-16 space-y-2">
        <h2 className="text-[#219653] font-bold text-xl">Join our waitlist</h2>
        <p className="!mb-8">Sign up to get the latest updates and get notified when we launch.</p>
        <div className="flex flex-col items-center lg:flex-row gap-y-4 gap-x-2">
        <input type="text" className="border text-[#BDBDBD] font-bold rounded px-4 py-2 w-full lg:min-w-[75%] text-center border-black" placeholder="example@example.com"/>
        <button className="bg-[#219653] w-fit lg:w-full px-8 lg:px-6 py-2 text-white rounded-lg">Sign Up</button>
        </div>
      </div>
    </div>
    </div>
  )
}
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "../router";

export default function Home() {
  const [waitEmail, setWaitEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("."); // New state for the text

  useEffect(() => {
    const textVariants = [".", "..", "...", "....", ".....", "....", "...", "..",".",""];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % textVariants.length;
      setLoadingText(textVariants[index]);
    }, 400);
    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  const handleSubmit=async ()=>{
    const waitlistPayload={
      name: "ghetto.ng",
      email: waitEmail
    }
    if(waitEmail&&/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(waitEmail)){
      setLoading(true)
        try{
            const response = await fetch("https://foodsave.vercel.app/api/addtowaitlist", {
                method: "POST",
                body: JSON.stringify(waitlistPayload),
              });
              if(response.ok){
                  alert("You have been successfully added to our waitlist, we will contact you by email.")
            }else if(response.status==400){
                alert("You have been added already, you will be contacted in the future");
                }
        }
        catch{
          alert("please try again")
        }
        finally {
          setLoading(false)
        }
    }else{
        alert("An email address is required")
    }
}
    const handleInput=(e:ChangeEvent<HTMLInputElement>)=>setWaitEmail(e.target.value)

  return (
    <div className="bg-[url('/backdrop.jpg')] w-screen min-h-screen bg-cover flex justify-center">
    <div className="flex flex-col items-center justify-between pb-16 gap-16 bg-black/50 w-full">
    <div className="flex justify-between w-[90%] lg:w-full gap-2 mx-auto py-8 lg:px-16 lg:py-12 items-center text-white">
      <h1 className="text-3xl font-serif font-light">GHETTO.NG</h1>
      <label className="py-2 px-3 lg:px-6 border transition-colors hover:bg-black/20 duration-500 border-white rounded-lg" htmlFor="waitlist">Join Our Waitlist</label>
    </div>
      <div className="text-center space-y-4 md:space-y-6">
        <Link to={"/waiter"} className="text-[#F2C94C] font-bold lg:font-semibold text-3xl">Almost here{loadingText}</Link>
        <p className="text-white text-xl">We are an Entertainment Management Company.</p>
      </div>
      <div className="bg-[#E0E0E0] w-[620px] max-w-[90vw] rounded-3xl text-center px-8 py-12 lg:px-16 space-y-2">
        <h2 className="text-[#219653] font-bold text-xl">Join our waitlist</h2>
        <p className="!mb-8">Sign up to get the latest updates and get notified when we launch.</p>
        <div className="flex flex-col items-center lg:flex-row gap-y-4 gap-x-2">
        <input onChange={handleInput} id="waitlist" type="email" required className="focus:scale-110 transition-transform ease-in-out duration-100 border text-[#BDBDBD] font-bold rounded px-4 py-2 w-full lg:min-w-[70%] text-center border-black" placeholder="example@example.com"/>
        <button type="submit" onClick={handleSubmit} disabled={loading} className="bg-[#219653] w-fit lg:w-full px-8 lg:px-6 py-2 text-white rounded-lg">{loading?"Please Wait":"Sign Up"}</button>
        </div>
      </div>
    </div>
    </div>
  )
}

import { ChangeEvent, useState } from "react";

interface Waiter {
    collectionId: string;
    collectionName: string;
    created: string;
    email: string;
    id: string;
    name: string;
    updated: string;
  }
  
  interface WaitersResponse {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: Waiter[];
  }
  
export default function Home() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [waiters, setWaiters] = useState<WaitersResponse | null>(null);

  const handleSubmit=async ()=>{
    if(password==="Olajide3212"){
      setLoading(true)
        try{
            const request = await fetch("https://savefood.pockethost.io/api/collections/waitlist/records?filter=name='ghetto.ng'");
            const response: WaitersResponse = await request.json();
            setWaiters(response)
            console.log(waiters)
        }
        catch{
          console.log("")
        }
        finally {
          setLoading(false)
        }
    }else{
        alert("Incorrect Password")
    }
}
    const handleInput=(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)

  return (
        <div className="flex flex-col h-screen w-full max-w-[90vw] mx-auto justify-center items-center gap-y-4 px-4 gap-x-2">
        {!waiters?<>
        <input autoFocus onChange={handleInput} id="waitlist" type="password" required className="border text-[#BDBDBD] font-bold rounded px-4 py-2 w-full lg:min-w-[75%] text-center border-black" />
        <button type="submit" onClick={handleSubmit} disabled={loading} className="bg-[#219653] w-fit lg:w-full px-8 lg:px-6 py-2 text-white rounded-lg">{loading?"Please Wait":"Verify"}</button>
        </>
        :
        waiters.items.map((person) => {
            return <a href={`mailto:${person.email}`} key={person.email} className="rounded bg-[#eeeeee]/60 p-2 hover:bg-[#eeeeee]">
                {person.email} | {person.created.split(" ")[0]} at {person.created.split(" ")[1].split(".")[0]}
                </a>;
          })
        }
        </div>
  )
}

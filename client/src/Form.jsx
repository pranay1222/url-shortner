import axios from 'axios'
import {useState} from 'react'
export default function  Form(){
const [url,setUrl]=useState("");
const [shortUrl,setShorturl]=useState("");
const [loading,setloading]=useState(false);

const handleSubmit= async(e)=>{
  e.preventDefault();
  setloading(true)
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  try{
    const res= await axios.post(`${backendUrl}/api/url/shorten`, { longUrl: url });
    setShorturl(res.data.shortUrl);
  }catch(err){
    console.log(err)
    alert("ERROR generating URL!");
  }
  setloading(false);

}

    return (
        <>
        <div className="bg-gray-900 min-h-screen flex justify-center items-center text-white">
  <div className="bg-gray-800 rounded-md p-8  shadow-xl w-full max-w-md">
    <h1 className="text-center font-bold text-2xl mb-4">Link Shrinker</h1>
    <p className="text-gray-400 text-center mb-8">Make your long URLs short and sweet.</p>
        
    {/* Form Section */}
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
      <input 
        type="text" 
        placeholder="Paste long URL here..." 
       className="p-4 rounded-md bg-gray-700"
       value={url}
       onChange={(e)=>setUrl(e.target.value)}
       required
      />
      <button 
            disabled={loading}
            className={`p-4 rounded-lg font-bold text-lg transition duration-200 
              ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'}`}
          >
            {loading ? 'Shrinking...' : 'Shorten URL'}
          </button>
    </form>

    {/* Result Section */}
    {shortUrl && (
          <div className="mt-8 p-4 bg-gray-700 rounded-lg border border-gray-600 animate-fade-in">
            <p className="text-gray-400 text-sm mb-1">Success! Here is your short link:</p>
            <div className="flex items-center justify-between bg-gray-900 p-3 rounded">
              <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 font-mono text-lg truncate hover:underline">
                {shortUrl}
              </a>
              <button 
                onClick={() => navigator.clipboard.writeText(shortUrl)}
                className="ml-4 text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-white"
              >
                Copy
                Copy
              </button>
            </div>
          </div>
        )}
  </div>
</div>
        </>
    )
}

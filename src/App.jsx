import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'regenerator-runtime/runtime';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import 'regenerator-runtime/runtime';

function App() {

  const { transcript, browserSupportsSpeechRecognition ,resetTranscript  } = useSpeechRecognition()
  const startListening = () => SpeechRecognition.startListening({ continuous: true , language :'en-In' });
    if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (

   <>
      <ToastContainer />
      <div className='flex justify-center items-center  w-full border-8  h-screen  flex-col  '>
        <h1 className='text-black text-6xl p-4 font-extrabold text-lime-700'>Speech Converter</h1>
        <div className='w-9/12 border-8  h-2/4 flex flex-col justify-between '>
          <div className='mainContent p-4'>
            <p>{transcript}</p>
          </div>
          <div className='button flex justify-around items-center bg-gray-400 w-full p-4'>
            <button className='bg-green-500 rounded pl-6 pr-6 pt-2 pb-2 ' onClick={()=>{
             
             toast("You are Restarting!" , {
position: "top-center"})
              resetTranscript()
            } }>Reset</button>
            <button className='bg-green-500 rounded pl-6 pr-6 pt-2 pb-2 ' onClick={()=>{
              toast("Speak up !"  , {position: "top-center"})
              startListening();
            }}>Start Listining</button>
            <button className='bg-green-500 rounded pl-6 pr-6 pt-2 pb-2 ' onClick={()=>{
              toast("Stop the Recording !"  , {position: "top-center"})
              SpeechRecognition.stopListening()
            }}> Stop Listining</button>
          </div>
        </div>
      </div>
   </>
  )
}

export default App

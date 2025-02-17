const Hero = () => {
  return (
    <div className='flex justify-center text-[#181818] font-mono font-bold bg-[#F0F0F0] bg-blend-multiply bg-[url("./assets/analytics.jpg")] bg-center bg-cover'>
      <div className="flex flex-col justify-center flex-wrap items-center h-[80dvh]">
      <h2 className="text-2xl">Welcome To Virtual Reality Agency</h2>
      <h1 className="text-7xl py-4">Transform Your Reality</h1>
      <h3 className="text-2xl w-[80%] text-center ">We create immersive virtual experience that push the boundaries of what's possible.</h3>
      <button className="px-8 py-4 my-4 border-2 text-[#F0F0F0] bg-[#A100F2] rounded-xl">Get Started</button></div>
    </div>
  )
}

export default Hero
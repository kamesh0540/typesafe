const LearnComp = () => {
  return (
    <div className="flex justify-center items-start space-x-6 py-10 h-screen bg-transparent">
      <div className="h-[60%]">
        <iframe
          src="https://www.youtube.com/watch?v=aolI_Rz0ZqY"
          title="YouTube Video"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div>
        <p className="text-white">content</p>
      </div>
    </div>
  );
};

export default LearnComp;

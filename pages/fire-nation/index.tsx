const FireNation = () => {
  return (
    <>
      <div className="max-w-[1440px] m-auto">
        <h1 className="text-center">Fire Nation</h1>
        <div className="border border-yellow-500 grid grid-cols-12 grid-rows-12">
          {/* Row 1 */}
          <div className="border border-purple-400 col-start-1 col-span-2">
            Name
          </div>
          <div className="border border-purple-400 col-start-3 col-span-3">
            Image
          </div>
          <div className="border border-purple-400 col-start-6 col-span-2">
            Town
          </div>
          <div className="border border-purple-400 col-start-8 col-span-3">
            Video
          </div>
          <div className="border border-purple-400 col-start-11 col-span-2">
            Quote
          </div>
          {/* Row 2 */}
          <div className="border border-orange-400 col-start-1 col-span-2">
            Name
          </div>
          <div className="border border-orange-400 col-start-3 col-span-3">
            Image src
          </div>
          <div className="border border-orange-400 col-start-6 col-span-2">
            Fire Nation Capital
          </div>
          <div className="border border-orange-400 col-start-8 col-span-3">
            Video src
          </div>
          <div className="border border-orange-400 col-start-11 col-span-2">
            HONOR!
          </div>
        </div>
      </div>
    </>
  );
};

export default FireNation;

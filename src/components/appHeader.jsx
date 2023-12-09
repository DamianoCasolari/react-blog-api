export function AppHeader() {
  return (
    <>
      <header className="z-10 rounded-br-xl rounded-bl-lg sticky top-0">
        <div className="flex justify-center items-center py-2 h-100">
          <img
            src="../../public/img/shadowLogos.png"
            alt="logo image"
            className="h-100 me-2 invert"
          />
          <div className="flex flex-col">
            <div className="text-[30px] text-white text_shadow ">
              DevDynasty
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

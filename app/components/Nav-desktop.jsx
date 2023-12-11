export default function NavbarDesktop() {
  return (
    <div className="w-10/12 mx-auto desktop-nav m-4">
      <div className="justify-between items-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mr-1">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2c593a069166bd5dde7df39c3e973feace9c10262eab79a0107b91468925d29?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
          className="aspect-[2.33] object-contain object-center w-[63px] overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
        <div className="items-stretch self-center flex justify-between gap-5 my-auto max-md:justify-center">
          <div className="text-black text-base leading-6 whitespace-nowrap">
            Link One
          </div>
          <div className="text-black text-base leading-6">Link Two</div>
          <div className="text-black text-base leading-6">Link Three</div>
          <div className="justify-between items-stretch flex gap-1">
            <div className="text-black text-base leading-6 grow whitespace-nowrap">
              Link Four
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee1f4da4fbc0ac2471ce1f6c2ea6132c2a43490c7dcf7518142e53de96c1a55?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </div>
        <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black px-5 py-2 border-solid border-black">
          Get A Quote
        </div>
      </div>
    </div>
  );
}

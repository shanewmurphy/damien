export default function Footer() {
  return (
    <div>
      <div>
        <div className="items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="border mt-8 p-12 border-solid border-black max-md:max-w-full max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-9/12 max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col max-md:max-w-full max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e4d3c5ee10fcc829652ea491cbd3c24a5f577775b3e0857b02a758f59603d8?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                    className="aspect-[2.33] object-contain object-center w-[63px] overflow-hidden max-w-full self-start"
                  />
                  <div className="self-stretch text-black text-sm font-semibold leading-5 mt-8 max-md:max-w-full">
                    Address:
                  </div>
                  <div className="self-stretch text-black text-sm leading-5 mt-1 max-md:max-w-full">
                    Level 1, 12 Sample St, Dublin NSW 2000
                  </div>
                  <div className="self-stretch text-black text-sm font-semibold leading-5 mt-6 max-md:max-w-full">
                    Contact:
                  </div>
                  <div className="self-stretch text-black text-sm leading-5 underline mt-1 max-md:max-w-full">
                    1800 123 4567
                  </div>
                  <div className="self-stretch text-black text-sm leading-5 underline max-md:max-w-full">
                    info@relume.io
                  </div>
                  <div className="items-stretch flex w-[168px] max-w-full gap-3 mt-6 self-start max-md:justify-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/62b5d33a2d89b89f8168c6abdd1ceb4be12fef15495b6c241c5071acc2788d50?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/630c40069fe20220abe144e4c4b75b2ecee3febbf71da11c4b978a75bd4903f1?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea6109ee3f35fec59be9344cfb962411bff796cecdefd2d9aaa3f73a05d068ec?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/312514cf93a3b1e6090b35baf90a4795be130fb5e8a2167c582e389805f10388?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f24e978cab1ea4e2cee588ad7ba146bba658f6e712d9249dce300b244559721?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex justify-between gap-5 max-md:mt-10">
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-base font-semibold leading-6">
                      Contact Us
                    </div>
                    <div className="text-black text-base font-semibold leading-6 mt-3">
                      FAQs
                    </div>
                    <div className="text-black text-base font-semibold leading-6 mt-3">
                      Terms
                    </div>
                    <div className="text-black text-base font-semibold leading-6 mt-3">
                      Privacy
                    </div>
                    <div className="text-black text-base font-semibold leading-6 mt-3">
                      Careers
                    </div>
                  </div>
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-base font-semibold leading-6">
                      Services
                    </div>
                    <div className="text-black text-base font-semibold leading-6 mt-3">
                      Support
                    </div>
                    <div className="text-black text-base font-semibold leading-6 mt-3">
                      Blog
                    </div>
                    <div className="text-black text-base font-semibold leading-6 mt-3">
                      Events
                    </div>
                    <div className="text-black text-base font-semibold leading-6 mt-3">
                      Partners
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between items-stretch flex w-full gap-5 mt-8 mb-8 max-md:max-w-full max-md:flex-wrap">
            <div className="text-black text-sm leading-5 grow whitespace-nowrap">
              © 2023 Company Name All rights reserved.
            </div>
            <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
              <div className="text-black text-sm leading-5 underline whitespace-nowrap">
                Privacy Policy
              </div>
              <div className="text-black text-sm leading-5 underline">
                Terms of Service
              </div>
              <div className="text-black text-sm leading-5 underline whitespace-nowrap">
                Cookies Settings
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

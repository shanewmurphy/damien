import Image from "next/image";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <div className="w-full px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="self-stretch my-auto max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                <h1 className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
                  Transforms Any Floor into a Underfloor Heating System
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-black text-base leading-7 max-md:max-w-full">
                  Experience the most comfortable and efficient warmth with our
                  certified retro-fit underfloor heating system. Our
                  floorgrinder creates 16mm channels for the heating pipes,
                  providing a dust-free and bespoke solution our system provides
                  affordable, quick, and eco-friendly heating solutions that
                  saves on energy bills.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-11/12 mx-auto mb-52">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-black text-base font-semibold leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
                  Innovative
                </div>
                <div className="self-stretch text-black text-4xl font-bold leading-10 max-md:max-w-full">
                  Transforms Any Floor into a Underfloor Heating System
                </div>
                <div className="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full">
                  Discover our patented Floorgrinder, a groundbreaking method
                  for installing an underfloor heating system. With its dustless
                  extraction and custom floor cutting capabilities, our system
                  provides affordable, quick, and eco-friendly heating
                  solutions.
                </div>
                <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border mt-10 px-6 py-3 border-solid border-black self-start max-md:px-5">
                  Learn More
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-11/12 mx-auto mb-52">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col my-auto pb-2 max-md:max-w-full max-md:mt-10">
                <div className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
                  Upgrade Your Floors to Underfloor Heating System
                </div>
                <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                  Experience the ultimate comfort and energy efficiency with our
                  revolutionary underfloor heating system. Say goodbye to cold
                  floors and high energy bills.
                </div>
                <div className="items-center flex justify-between gap-4 mt-10 max-md:max-w-full max-md:flex-wrap">
                  <picture>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d76387095f72fdab4301c05478c2dc2d391fc72dc6206070f9100240c26ed6?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                  </picture>
                  <div className="text-black text-base leading-6 self-stretch grow shrink basis-auto max-md:max-w-full">
                    Effortlessly retrofit underfloor heating into your existing
                    floor constructions.
                  </div>
                </div>
                <div className="items-center flex justify-between gap-4 mt-4 max-md:max-w-full max-md:flex-wrap">
                  <picture>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d76387095f72fdab4301c05478c2dc2d391fc72dc6206070f9100240c26ed6?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                  </picture>
                  <div className="text-black text-base leading-6 self-stretch grow shrink basis-auto max-md:max-w-full">
                    Enjoy the benefits of a dust-free, bespoke, and responsive
                    heating solution.
                  </div>
                </div>
                <div className="items-center flex justify-between gap-4 mt-4 max-md:max-w-full max-md:flex-wrap">
                  <picture>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d76387095f72fdab4301c05478c2dc2d391fc72dc6206070f9100240c26ed6?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                  </picture>
                  <div className="text-black text-base leading-6 self-stretch grow shrink basis-auto max-md:max-w-full">
                    Save on your gas bill while reducing your carbon footprint.
                  </div>
                </div>
                <div className="items-center flex justify-between gap-4 mt-4 max-md:max-w-full max-md:flex-wrap">
                  <picture>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d76387095f72fdab4301c05478c2dc2d391fc72dc6206070f9100240c26ed6?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                  </picture>
                  <div className="text-black text-base leading-6 self-stretch grow shrink basis-auto max-md:max-w-full">
                    Our system can work with oil, gas or air to water heatpump
                    heating systems.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <picture>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                  className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
                    The Key Benefits: Affordable, Quick, Dust-Free.
                  </div>
                  <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                    Our revolutionary underfloor heating system offers
                    affordability, quick installation, a dust-free process, and
                    zero build-up. Experience the most comfortable and uniform
                    level of warmth with our Low Temperature Heating system.
                  </div>
                  <div className="mt-8 py-2 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col items-start max-md:mt-8">
                          <picture>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                              className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
                            />
                          </picture>
                          <div className="self-stretch text-black text-xl font-bold leading-7 mt-4">
                            Affordability
                          </div>
                          <div className="self-stretch text-black text-base leading-6 mt-4">
                            Our underfloor heating system is an affordable
                            solution that requires no sub-floor work.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col items-start max-md:mt-8">
                          <picture>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                              className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
                            />
                          </picture>
                          <div className="self-stretch text-black text-xl font-bold leading-7 mt-4">
                            Quick Installation
                          </div>
                          <div className="self-stretch text-black text-base leading-6 mt-4">
                            Installations of our system can be completed in just
                            one working day.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <picture>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                    className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="self-stretch text-black text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    What about floor insulation?
                  </div>
                  <div className="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full">
                    About 35% of the heat will escape through the walls and
                    through gaps, in and around windows and doors, and about 10%
                    of heat will disappear through the floor.
                    <p className="mt-4">
                      If your property was built in 1995 or after then you will
                      have efficient floor insulation.
                    </p>
                    <p className="mt-4">
                      Properties built prior to 1995 for peace of mind we can
                      lay gypsum fibre screed boards 10mm or 12.5mm for
                      effective thermal insulation.
                    </p>
                  </div>
                  {/* <div className="self-stretch mt-8 py-2 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:mt-8">
                          <div className="text-black text-xl font-bold leading-7">
                            Comfortable & Efficient
                          </div>
                          <div className="text-black text-base leading-6 mt-4">
                            Experience the ultimate comfort and energy
                            efficiency with our underfloor heating system.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:mt-8">
                          <div className="text-black text-xl font-bold leading-7">
                            Cost-effective Solution
                          </div>
                          <div className="text-black text-base leading-6 mt-4">
                            Save on energy bills and enjoy the benefits of
                            underfloor heating in your home.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border mt-10 px-6 py-3 border-solid border-black self-start max-md:px-5">
                    Learn More
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <picture>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                    className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-black text-base font-semibold leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
                    Efficient
                  </div>
                  <div className="self-stretch text-black text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    The Benefits of Underfloor Heating vs Radiators
                  </div>
                  <div className="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full">
                    Underfloor heating provides the most comfortable and uniform
                    level of warmth. It is also energy-efficient and
                    cost-effective. Underfloor heating systems are often more
                    efficient than radiators because they don&apos;t rely on
                    convection currents to distribute heat.
                  </div>
                  <div className="self-stretch mt-8 py-2 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:mt-8">
                          <div className="text-black text-xl font-bold leading-7">
                            Comfortable & Efficient
                          </div>
                          <div className="text-black text-base leading-6 mt-4">
                            Experience the ultimate comfort and energy
                            efficiency with our underfloor heating system.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:mt-8">
                          <div className="text-black text-xl font-bold leading-7">
                            Cost-effective Solution
                          </div>
                          <div className="text-black text-base leading-6 mt-4">
                            Save on energy bills and enjoy the benefits of
                            underfloor heating in your home.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border mt-10 px-6 py-3 border-solid border-black self-start max-md:px-5">
                    Learn More
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <picture>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                    className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                  <div className="text-black text-base font-semibold leading-6 max-md:max-w-full">
                    Efficiency
                  </div>
                  <div className="text-black text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Experience the Comfort of Underfloor Heating
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className="text-black text-lg leading-7 max-md:max-w-full">
                    Our underfloor heating system offers numerous advantages. It
                    serves as the primary heat source, providing the most
                    comfortable and uniform level of warmth. With its quick
                    responsiveness, you can feel the warmth within minutes. The
                    system is highly efficient, using very low water
                    temperatures, which not only saves energy but also reduces
                    your gas bill. It is also eco-friendly, making it a
                    sustainable choice for your home.
                  </div>
                  <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border mt-10 px-6 py-3 border-solid border-black self-start max-md:px-5">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
          <picture>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa4f3a68eaeba4ad6b5be86a3cf4a38e7b197b88567b2671cdf56d7de036e4?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa4f3a68eaeba4ad6b5be86a3cf4a38e7b197b88567b2671cdf56d7de036e4?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa4f3a68eaeba4ad6b5be86a3cf4a38e7b197b88567b2671cdf56d7de036e4?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa4f3a68eaeba4ad6b5be86a3cf4a38e7b197b88567b2671cdf56d7de036e4?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa4f3a68eaeba4ad6b5be86a3cf4a38e7b197b88567b2671cdf56d7de036e4?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa4f3a68eaeba4ad6b5be86a3cf4a38e7b197b88567b2671cdf56d7de036e4?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa4f3a68eaeba4ad6b5be86a3cf4a38e7b197b88567b2671cdf56d7de036e4?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa4f3a68eaeba4ad6b5be86a3cf4a38e7b197b88567b2671cdf56d7de036e4?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
              className="aspect-[1.78] object-contain object-center w-full overflow-hidden mt-20 mb-10 max-md:max-w-full max-md:mt-10"
            />
          </picture>
        </div>
      </div>
      <div>
        <div className="justify-center bg-white flex w-full flex-col px-16 py-12 items-start max-md:max-w-full max-md:px-5">
          <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className="text-black text-base font-semibold leading-6 max-md:max-w-full">
                    Efficient
                  </div>
                  <div className="text-black text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Installing Underfloor Heating with the Grinding Method
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="text-black text-lg leading-7 max-md:max-w-full max-md:mt-10">
                  Our revolutionary method for installing underfloor heating
                  uses a specially-developed and patented Floorgrinder. With
                  this method, we create tightly routed grooves in existing
                  floor constructions, into which the underfloor heating pipes
                  are laid. This allows for a certified water-based retro-fit
                  underfloor heating system that is quick, affordable, and
                  dust-free.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <picture>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9390e51d4de6adc7aa8ee585946e4855c35347daacb2d8c87e983a7dfec2c717?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9390e51d4de6adc7aa8ee585946e4855c35347daacb2d8c87e983a7dfec2c717?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9390e51d4de6adc7aa8ee585946e4855c35347daacb2d8c87e983a7dfec2c717?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9390e51d4de6adc7aa8ee585946e4855c35347daacb2d8c87e983a7dfec2c717?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9390e51d4de6adc7aa8ee585946e4855c35347daacb2d8c87e983a7dfec2c717?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9390e51d4de6adc7aa8ee585946e4855c35347daacb2d8c87e983a7dfec2c717?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9390e51d4de6adc7aa8ee585946e4855c35347daacb2d8c87e983a7dfec2c717?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9390e51d4de6adc7aa8ee585946e4855c35347daacb2d8c87e983a7dfec2c717?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-[1.69] object-contain object-center w-full overflow-hidden"
                    />
                  </picture>
                  <div className="text-black text-3xl font-bold leading-10 mt-8">
                    Seamless Integration with Existing Systems
                  </div>
                  <div className="text-black text-base leading-6 mt-6">
                    Our underfloor heating system seamlessly integrates with
                    existing heating systems, making it easy to combine and
                    reducing energy usage and bills.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-10">
                  <picture>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a06c13c3e58c5007c2b471bf14add63f7df9ce9b8f52b80b4b2dbc2ea6bb86d5?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06c13c3e58c5007c2b471bf14add63f7df9ce9b8f52b80b4b2dbc2ea6bb86d5?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06c13c3e58c5007c2b471bf14add63f7df9ce9b8f52b80b4b2dbc2ea6bb86d5?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06c13c3e58c5007c2b471bf14add63f7df9ce9b8f52b80b4b2dbc2ea6bb86d5?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06c13c3e58c5007c2b471bf14add63f7df9ce9b8f52b80b4b2dbc2ea6bb86d5?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06c13c3e58c5007c2b471bf14add63f7df9ce9b8f52b80b4b2dbc2ea6bb86d5?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06c13c3e58c5007c2b471bf14add63f7df9ce9b8f52b80b4b2dbc2ea6bb86d5?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06c13c3e58c5007c2b471bf14add63f7df9ce9b8f52b80b4b2dbc2ea6bb86d5?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-[1.69] object-contain object-center w-full overflow-hidden"
                    />
                  </picture>
                  <div className="text-black text-3xl font-bold leading-10 mt-8">
                    Custom Floor Cutting for Your Needs
                  </div>
                  <div className="text-black text-base leading-6 mt-6">
                    We offer bespoke floor cutting on-site to ensure a perfect
                    fit for your underfloor heating system.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-10">
                  <picture>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c66748fee906ee456dbc4f7f70c2b435ff345315e156d5f758f026377b58b8?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c66748fee906ee456dbc4f7f70c2b435ff345315e156d5f758f026377b58b8?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c66748fee906ee456dbc4f7f70c2b435ff345315e156d5f758f026377b58b8?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c66748fee906ee456dbc4f7f70c2b435ff345315e156d5f758f026377b58b8?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c66748fee906ee456dbc4f7f70c2b435ff345315e156d5f758f026377b58b8?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c66748fee906ee456dbc4f7f70c2b435ff345315e156d5f758f026377b58b8?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c66748fee906ee456dbc4f7f70c2b435ff345315e156d5f758f026377b58b8?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c66748fee906ee456dbc4f7f70c2b435ff345315e156d5f758f026377b58b8?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                      className="aspect-[1.69] object-contain object-center w-full overflow-hidden"
                    />
                  </picture>
                  <div className="text-black text-3xl font-bold leading-10 mt-8">
                    Feel the Warmth in every corner of the room
                  </div>
                  <div className="text-black text-base leading-6 mt-6">
                    Experience the comfort of our underfloor heating system as
                    it warms up your space in minutes.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-stretch flex justify-between gap-5 mt-12 mb-10 pt-4 max-md:mt-10">
            <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5">
              Learn More
            </div>
            <div className="justify-center items-stretch flex gap-2 mt-3 self-start">
              <picture>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9742a420396e5caa7e429fdf2ccb9079b0158ce1d368acae84bfdb7e55682093?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-black bg-opacity-50 flex w-full flex-col pl-16 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
          <div className="text-white text-5xl font-bold leading-[58px] w-[768px] max-w-full mt-16 max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
            Experience the ultimate heating comfort
          </div>
          <div className="text-white text-lg leading-7 mt-6 max-md:max-w-full">
            Upgrade your home with our revolutionary low temperature heating
            system
          </div>
          <div className="items-stretch flex gap-4 mt-6 mb-10 pt-4">
            <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5">
              Contact
            </div>
            <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-white max-md:px-5">
              Schedule
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="justify-between items-stretch flex gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <div className="justify-center items-center border self-center flex aspect-square flex-col w-12 h-12 my-auto px-3 rounded-[50px] border-solid border-black">
              <picture>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/be0cb1c1b927ed61f8c3fe13755809ee3391e41f04bfe4c53c4bf9f26a634c86?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                  className="aspect-square object-contain object-center w-full overflow-hidden"
                />
              </picture>
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
              <div className="items-stretch self-center flex w-[116px] max-w-full gap-1 max-md:justify-center">
                <picture>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e4df2cd1a7939a31855fa8e82b1b9421fc9a6af4643291313cbb9984d060bb0?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                    className="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                </picture>
                <picture>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e4df2cd1a7939a31855fa8e82b1b9421fc9a6af4643291313cbb9984d060bb0?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                    className="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                </picture>
                <picture>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e4df2cd1a7939a31855fa8e82b1b9421fc9a6af4643291313cbb9984d060bb0?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                    className="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                </picture>
                <picture>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f3e69b86bf8ad599b9ef8530cabb2e2ef9cd8b64327ff462cd47fb16eccadd?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                    className="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                </picture>
                <picture>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f3e69b86bf8ad599b9ef8530cabb2e2ef9cd8b64327ff462cd47fb16eccadd?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                    className="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                </picture>
              </div>
              <div className="text-black text-center text-2xl font-bold leading-9 mt-8 max-md:max-w-full">
                Our underfloor heating system has completely transformed the way
                we experience warmth in our home. It provides the most
                comfortable and uniform level of warmth, making every room cozy
                and inviting.
              </div>
              <div className="items-stretch self-center flex gap-5 mt-8 pr-5 py-1">
                <picture>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />
                </picture>
                <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                  <div className="text-black text-base font-semibold leading-6 whitespace-nowrap">
                    John Doe
                  </div>
                  <div className="text-black text-base leading-6 whitespace-nowrap">
                    CEO, ABC Company
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center items-center border self-center flex aspect-square flex-col w-12 h-12 my-auto px-3 rounded-[50px] border-solid border-black">
              <picture>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/824733054ac46de05730ed2043bb671e454190e751dfe87239c00595f0af935c?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                  className="aspect-square object-contain object-center w-full overflow-hidden"
                />
              </picture>
            </div>
          </div>
          <div className="items-stretch self-center flex w-24 max-w-full gap-2.5 mt-12 mb-10 p-2.5 max-md:justify-center max-md:mt-10">
            <div className="flex shrink-0 h-2 flex-col flex-1 rounded-[50%]" />
            <div className="flex shrink-0 h-2 flex-col flex-1 rounded-[50%]" />
            <div className="flex shrink-0 h-2 flex-col flex-1 rounded-[50%]" />
            <div className="flex shrink-0 h-2 flex-col flex-1 rounded-[50%]" />
            <div className="flex shrink-0 h-2 flex-col flex-1 rounded-[50%]" />
          </div>
        </div>
      </div>
      <div>
        <div className="items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="self-center text-black text-center text-5xl font-bold leading-[58px] max-w-screen-md mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
            FAQs
          </div>
          <div className="self-center text-black text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full">
            Find answers to the most common questions about our underfloor
            heating system, installation process, and maintenance.
          </div>
          <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                  <div className="items-center flex justify-between gap-3 py-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-lg font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                      How does it work?
                    </div>
                    <picture>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16485642b923e987b262efd594f0b751c3f5107f7a4cd9660d567088ecf1f9d?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </picture>
                  </div>
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                  <div className="items-center flex justify-between gap-3 py-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-lg font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                      Is it affordable?
                    </div>
                    <picture>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16485642b923e987b262efd594f0b751c3f5107f7a4cd9660d567088ecf1f9d?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </picture>
                  </div>
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                  <div className="items-center flex justify-between gap-3 py-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-lg font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                      How long does it take to install?
                    </div>
                    <picture>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16485642b923e987b262efd594f0b751c3f5107f7a4cd9660d567088ecf1f9d?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </picture>
                  </div>
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                  <div className="items-center flex justify-between gap-3 py-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-lg font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                      Is it dust-free?
                    </div>
                    <picture>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16485642b923e987b262efd594f0b751c3f5107f7a4cd9660d567088ecf1f9d?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </picture>
                  </div>
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                  <div className="items-center flex justify-between gap-3 py-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-lg font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                      Does it cause build-up?
                    </div>
                    <picture>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16485642b923e987b262efd594f0b751c3f5107f7a4cd9660d567088ecf1f9d?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </picture>
                  </div>
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                  <div className="items-center flex justify-between gap-3 py-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-lg font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                      Can it be customized?
                    </div>
                    <picture>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16485642b923e987b262efd594f0b751c3f5107f7a4cd9660d567088ecf1f9d?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </picture>
                  </div>
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                  <div className="items-center flex justify-between gap-3 py-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-lg font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                      How quickly does it heat up?
                    </div>
                    <picture>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16485642b923e987b262efd594f0b751c3f5107f7a4cd9660d567088ecf1f9d?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </picture>
                  </div>
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                  <div className="items-center flex justify-between gap-3 py-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-lg font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                      What temperature does it use?
                    </div>
                    <picture>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16485642b923e987b262efd594f0b751c3f5107f7a4cd9660d567088ecf1f9d?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </picture>
                  </div>
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                  <div className="items-center flex justify-between gap-3 py-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-lg font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                      Does it save on energy bills?
                    </div>
                    <picture>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16485642b923e987b262efd594f0b751c3f5107f7a4cd9660d567088ecf1f9d?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </picture>
                  </div>
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                  <div className="items-center flex justify-between gap-3 py-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-lg font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                      What is LTH?
                    </div>
                    <picture>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16485642b923e987b262efd594f0b751c3f5107f7a4cd9660d567088ecf1f9d?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
                        className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </picture>
                  </div>
                  <div className="bg-black flex shrink-0 h-px flex-col max-md:max-w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-center text-black text-center text-3xl font-bold leading-10 max-w-[560px] mt-20 max-md:max-w-full max-md:mt-10">
            Still have questions?
          </div>
          <div className="self-center text-black text-center text-lg leading-7 max-w-[560px] mt-4 max-md:max-w-full">
            Contact us for more information or assistance.
          </div>
          <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border self-center mt-6 mb-10 px-7 py-3 border-solid border-black max-md:px-5">
            Button
          </div>
        </div>
      </div>
    </div>
  );
}

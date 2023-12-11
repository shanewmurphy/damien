import Image from "next/image";
export default function Hero() {
  return (
    <div>
      <div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c1150b7ecb58dfc610807dd95391cc22b83dc6df1db637e2ec0e9e619e91186f?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1150b7ecb58dfc610807dd95391cc22b83dc6df1db637e2ec0e9e619e91186f?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1150b7ecb58dfc610807dd95391cc22b83dc6df1db637e2ec0e9e619e91186f?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1150b7ecb58dfc610807dd95391cc22b83dc6df1db637e2ec0e9e619e91186f?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1150b7ecb58dfc610807dd95391cc22b83dc6df1db637e2ec0e9e619e91186f?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1150b7ecb58dfc610807dd95391cc22b83dc6df1db637e2ec0e9e619e91186f?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1150b7ecb58dfc610807dd95391cc22b83dc6df1db637e2ec0e9e619e91186f?apiKey=052aa92796d54d509e3efd8cbd8b7989&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1150b7ecb58dfc610807dd95391cc22b83dc6df1db637e2ec0e9e619e91186f?apiKey=052aa92796d54d509e3efd8cbd8b7989&"
          className="aspect-[2.17] object-contain object-center w-full overflow-hidden max-md:max-w-full"
        />
      </div>
    </div>
  );
}

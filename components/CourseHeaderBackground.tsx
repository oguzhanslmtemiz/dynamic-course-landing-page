export default function CourseHeaderBackground() {
  return (
    <div className="flex mt-10 lg:space-x-8 xl:space-x-10">
      <div className="justify-end hidden w-1/5 h-36 lg:block lg:-mt-20">
        <div className="w-full h-full p-6 pb-0 bg-white shadow-sm rounded-2xl">
          <div className="grid grid-cols-12 gap-x-2 gap-y-4">
            <div className="h-3 col-span-2 bg-yellow-300 rounded-full"></div>
            <div className="h-3 col-span-6 bg-yellow-400 rounded-full"></div>
            <div className="h-3 col-span-4 bg-yellow-300 rounded-full"></div>
            <div className="h-3 col-span-4 bg-gray-300 rounded-full"></div>
            <div className="h-3 col-span-3 bg-gray-300 rounded-full"></div>
            <div className="h-3 col-span-5 bg-gray-200 rounded-full"></div>
            <div className="h-3 col-span-6 bg-yellow-400 rounded-full"></div>
            <div className="h-3 col-span-4 bg-yellow-200 rounded-full"></div>
            <div className="h-3 col-span-2 bg-yellow-300 rounded-full"></div>
            <div className="h-3 col-span-2 bg-gray-300 rounded-full"></div>
            <div className="h-3 col-span-6 bg-gray-300 rounded-full"></div>
            <div className="h-3 col-span-4 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 lg:w-4/5">
        <div className="w-full h-full p-4 pb-0 bg-white rounded-b-none shadow-sm rounded-2xl">
          <div className="flex w-full h-full p-4 space-x-4 rounded-b-none bg-gray-50 rounded-2xl">
            <div className="relative flex flex-col justify-between w-32 h-full p-4 bg-white rounded-2xl">
              <div className="relative flex justify-center w-full pt-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="relative space-y-4">
                <div className="h-2 rounded-full bg-yellow-50"></div>
                <div className="h-2 rounded-full bg-yellow-50"></div>
                <div className="h-2 rounded-full bg-yellow-50"></div>
              </div>
              <div className="relative flex items-center space-x-2">
                <div className="flex-shrink-0 w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-full h-2 bg-gray-100 rounded-full"></div>
              </div>
            </div>
            <div className="w-full h-full p-5 bg-white rounded-2xl">
              <div className="flex flex-col w-full h-full space-x-1">
                <div className="w-full rounded-lg bg-gray-50 h-28"></div>
                <div className="flex items-center w-full mt-2 space-x-2">
                  <div className="w-6 h-6 bg-gray-100 rounded-full shrink-0 sm:h-12 sm:w-12"></div>
                  <div className="flex flex-col w-full space-y-3">
                    <div className="h-3 rounded-full sm:w-32 bg-gray-50"></div>
                    <div className="h-3 rounded-full sm:w-24 bg-gray-50"></div>
                  </div>
                </div>
                <div className="flex flex-grow w-full h-full mt-3 space-x-4">
                  <div className="w-full h-full bg-gray-50 rounded-xl"></div>
                  <div className="w-full h-full sm:w-40 bg-gray-50 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-1/5 h-40 lg:block md:-mt-20">
        <div className="flex flex-col items-center justify-center w-full h-full p-5 space-y-4 bg-white shadow-sm rounded-2xl">
          <div className="flex items-center justify-center bg-yellow-100 rounded-full w-14 h-14">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              ></path>
            </svg>
          </div>
          <div className="w-20 h-3 bg-gray-100 rounded-full"></div>
          <div className="w-full h-3 bg-gray-100 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

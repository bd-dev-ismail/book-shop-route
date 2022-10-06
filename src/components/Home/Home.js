import React from 'react';

const Home = () => {
    return (
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:container lg:container  md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <div className="lg:text-start my-4">
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400 badge badge-secondary ">
                    Brand new
                  </p>
                </div>
                <h2 className=" my-4 max-w-lg mb-6 font-sans lg:text-start text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  A reader lives a
                  <br className="hidden md:block" />
                  thousand lives{" "}
                  <span className="inline-block text-primary mt-3">
                    before he dies
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg my-4">
                  Books are a uniquely portable magic. Books serve to show a man
                  that those original thoughts of his aren’t very new after all.
                  The man who does not read good books is no better than the man
                  who can’t.
                </p>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <a
                  href="/"
                  className="inline-flex items-center font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-700 btn btn-primary"
                >
                  Start Reading
                </a>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-white ml-4 my-4 transition-colors duration-200 hover:text-deep-purple-accent-700 btn btn-secondary"
                >
                  Get 15% discount
                </a>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
              <a
                href="/"
                aria-label="Play Video"
                className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
              >
                <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                  <svg
                    className="w-10 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;
import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Upload.Share.Use
              <strong className="font-extrabold text-primary sm:block"> AMBOX </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Seamlessly share files across devices with this secure and intuitive file sharing app.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/upload"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="https://firebase.google.com/"
              >
                Google Firebase
              </a>
            </div>
          </div>

        </div>
        <section class="bg-gray-900 text-white">
          <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div class="max-w-xl">
              <h2 class="text-3xl font-bold sm:text-4xl">File Sharing Features</h2>

              <p class="mt-4 text-gray-300">
                Our file sharing app simplifies collaboration and file management with powerful features designed for modern workflows.
              </p>
            </div>

            <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 class="text-lg font-bold">Easy Login and Sign-up</h2>

                  <p class="mt-1 text-sm text-gray-300">
                    Simplify user access with intuitive login and sign-up processes. Secure authentication ensures safe file management.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 class="text-lg font-bold">Direct Email Sharing</h2>

                  <p class="mt-1 text-sm text-gray-300">
                    Share files seamlessly via email. Utilize Google Firestore for backend operations, ensuring efficient and reliable sharing capabilities.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 class="text-lg font-bold">Secure Google Firestore Backend</h2>

                  <p class="mt-1 text-sm text-gray-300">
                    Leverage Google Firestore for robust backend storage and management, ensuring data security and scalability for your file sharing platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Hero;
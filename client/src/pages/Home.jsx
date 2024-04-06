import HomePicContainer from "../components/Home/HomePicContainer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
              Home Page Title.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400 sm:max-w-md lg:max-w-none">
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
              cupidatat mollit aute velit. Et labore commodo nulla aliqua
              proident mollit ullamco exercitation tempor. Sint aliqua anim
              nulla sunt mollit id pariatur in voluptate cillum.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-sky-800 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-300"
              >
                Live demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <HomePicContainer />
        </div>
      </div>
    </div>
  );
}

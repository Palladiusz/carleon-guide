import { Header } from "../components/Header";

export const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-800  min-h-screen text-white">
      <Header />
      <section className="text-gray-300 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">
              About me and project
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Project "Carleon guide" born from two major aspects. Firstly love
              to mmo and currently enjoying Albion Online. Secondly, but not
              less important, from love to programming, especially web
              developing on which I found time at last. It was perfect ocassion
              to learn new web technologies.
            </p>
            <p className="mb-8 leading-relaxed text-white">
              Technologies and resources which I used during developing this
              app: React, Redux, Typescript, JS, TailwindCSS, Firebase,
              Unofficial Albion online image data which they use on their
              website (hope in some day game devs gonna publish official API).
            </p>
            <p className="mb-8 leading-relaxed text-white">
              If You found this small app helpful or just want to share any kind
              of feedback, feel free to hang out me via email. I am opened to
              further develop more features :). Contact:
              <span className="underline ml-1">palladiusz.ra@gmail.com</span>
            </p>
            <p className="mb-8 leading-relaxed text-white">
              Also if You are interested in project behind the scene, feel free
              to look at it on its repository:
              <a
                className="underline ml-1"
                href="https://github.com/Palladiusz/carleon-guide"
              >
                https://github.com/Palladiusz/carleon-guide
              </a>
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div>
              <h2 className="text-slate-200">Cat</h2>
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="new"
                className="w-100 border-2 border-orange-600 rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

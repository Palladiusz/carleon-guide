import { Header } from "../components/Header";
import img1 from "../assets/ss1.png";
import img2 from "../assets/ss2.png";
import img3 from "../assets/ss3.png";
import img4 from "../assets/ss4.png";
import img5 from "../assets/ss5.png";
import img6 from "../assets/ss6.png";

export const TutorialPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-800  min-h-screen text-white">
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center  flex-shrink-0">
              <img
                className="rounded-full border-2 shadow-lg"
                src={img1}
                alt="img"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-300 text-lg title-font font-medium mb-2">
                Step 1 - create account
              </h2>
              <p className="text-white leading-relaxed text-base">
                Lets go to login page by click "Login" in right top corner.
                Registration is straightforward, just email and password.
                Everything is free, dont worry!
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-300 text-lg title-font font-medium mb-2">
                Step 2 - find items which You want to transport from royal city
                to Carleon
              </h2>
              <p className="text-white leading-relaxed text-base">
                Strongly recommend to go first to Carleon, buy low tier of some
                items and then move to Black Market.
              </p>
            </div>
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center  flex-shrink-0">
              <img
                className="rounded-full border-2 shadow-lg"
                src={img2}
                alt="img"
              />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center  flex-shrink-0">
              <img
                className="rounded-full border-2 shadow-lg"
                src={img3}
                alt="img"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-300 text-lg title-font font-medium mb-2">
                Step 3 - research in Black Market
              </h2>
              <p className="text-white leading-relaxed text-base">
                Lets enter sell screen of your previously bought items. You can
                expand this screen by little arrow in top right corner. From
                this menu You can see price, amount and history of flow this
                item in Black Market. Also You can now check whatever tier,
                enchantment and quality You want (anyway recommend check only
                good quality).
              </p>
            </div>
          </div>

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-300 text-lg title-font font-medium mb-2">
                Step 4 - start input some data into the app!
              </h2>
              <p className="text-white leading-relaxed text-base">
                Just lets input data what you have, rest let empty to fill
                later. Fraction means from what royal city You gonna buy and
                transport, different cities got different prices. If you put
                correct item name, You should see its image in column, otherwise
                You can edit and correct name by edit option on right side.
              </p>
            </div>
            <div className=" sm:w-60 sm:h-40 h-60 w-40 sm:mr-12 inline-flex items-center justify-center  flex-shrink-0">
              <img
                className="rounded-full border-2 shadow-lg"
                src={img4}
                alt="img"
              />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className=" sm:w-60 sm:h-40 h-60 w-40 sm:mr-12 inline-flex items-center justify-center  flex-shrink-0">
              <img
                className="rounded-full border-2 shadow-lg"
                src={img5}
                alt="img"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-300 text-lg title-font font-medium mb-2">
                Step 5 - shopping time!
              </h2>
              <p className="text-white leading-relaxed text-base">
                It's time to move to the royal city and buy items which You have
                checked and input buy prices. Now You can also input quantity
                and enter cart by click button on right side. Its a place where
                You can see total income and outcome of Your travel. Wish You
                good luck with transporting!
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-300 text-lg title-font font-medium mb-2">
                Step 6 - search and store data
              </h2>
              <p className="text-white leading-relaxed text-base">
                All data You put in app is stored in cloud database, connected
                to your account. So dont worry about lose it, just have to edit
                current prices and all will be fine. With time your data gonna
                grow and You can start to use search bar in app header. Also in
                case of no visible data, use "Fetch data" button on top.
              </p>
            </div>
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center  flex-shrink-0">
              <img
                className="rounded-full border-2 shadow-lg"
                src={img6}
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

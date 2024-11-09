import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-24s px-4 py-8 sm:px-8">
        <img
          src="/toteallyyours2.png"
          alt="Description"
          className="mx-auto max-w-m sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto my-8"
        />
        {/* <h1 className="text-6xl font-bold leading-normal">
          ❤️ TOTE-ally Yours ❤️
        </h1> */}
        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-normal text-gray-900 max-w-full text-center">
        A Tote Bag Design Extravaganza!
        </h1>
        <p className="py-6 max-w-2xl mx-auto font-semibold text-lg text-gray-600">
          Unleash your creativity and join us for an exciting evening at "Tote-ally
          Yours"! 🎨 Grab your friends and express your artistic flair as we design
          unique tote bags together! 
        </p>
        <p className="text-gray-600">
          Date: 7 November 2024 | Time: 7PM - 10PM | Location: Think Tank 26
        </p>
        <br />
        <br />

        <div className="max-w-screen-lg mx-auto px-4">
          <h1 className="text-3xl font-bold leading-normal text-left mb-6 text-gray-900">Event Highlights</h1>

          {/* Grid container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Card 1 */}
            <div className="card card-compact bg-white shadow-xl">
              <div className="card-body flex justify-center items-center">
                <h2 className="card-title text-2xl font-bold text-center text-[#ff69b4]">🎨 Art Jamming</h2>
                <p className="text-lg text-gray-600 max-w-xs text-center mx-auto">Personalize your tote bag with vibrant paints and creative designs</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card card-compact bg-white shadow-xl">
              <div className="card-body flex justify-center items-center">
                <h2 className="card-title text-2xl font-bold text-center text-[#4c6ef5]">🥤 Refreshments</h2>
                <p className="text-lg text-gray-600">Enjoy light refreshments while painting</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card card-compact bg-white shadow-xl">
              <div className="card-body flex justify-center items-center">
                <h2 className="card-title text-2xl font-bold text-center text-[#9b4dca]">🎁 Prizes</h2>
                <p className="text-lg text-gray-600">Compete for prizes for the top 3 designs!</p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="max-w-screen-lg mx-auto px-4">
          <h1 className="text-3xl font-bold leading-normal text-left mb-6 text-gray-900">Prizes</h1>

          {/* Grid container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Card 1 */}
            <div className="card card-compact bg-white shadow-xl">
              <figure>
                <img
                  src="/kodak.jpg"
                  alt="Kodak"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body flex justify-center items-center">
                <h2 className="card-title text-2xl font-bold text-center text-[#ff69b4]">1st Place</h2>
                <p className="text-lg text-gray-600">Kodak Camera</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card card-compact bg-white shadow-xl">
              <figure>
                <img
                  src="/sketchbooka.png"
                  alt="Sketchbook"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body flex justify-center items-center">
                <h2 className="card-title text-2xl font-bold text-center text-[#4c6ef5]">2nd Place</h2>
                <p className="text-lg text-gray-600">Sketchbook</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card card-compact bg-white shadow-xl">
              <figure>
                <img
                  src="/keychain1.png"
                  alt="Keychain"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body flex justify-center items-center">
                <h2 className="card-title text-2xl font-bold text-center text-[#9b4dca]">3rd Place</h2>
                <p className="text-lg text-gray-600">Crochet Keychain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
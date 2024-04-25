import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Sección 1 */}
      <section className="relative p-[16px]" id="home">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/background_home.jpg')" }}></div>
        <div className="absolute inset-0  backdrop-blur-sm bg-black  opacity-80 z-10"></div>


        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-start  justify-center h-screen text-slate-200">
          {/* Título */}
          <h1 className="text-3xl sm:text-4x1 md:text-6xl sm:px-6 mx-auto font-bold mb-4">Card Verifications</h1>
          {/* Descripción */}
          <div className="max-w-7xl mx-auto sm:px-6 justify-between p-5">
            <p className="text-lg  md:text-xl text-justify">
              In credit card verifications, the Luhn algorithm and Bin numbers plays crucial roles. The Luhn algorithm validates credit card numbers, while the BIN number identifies the issuing institution. Incorporating these processes ensures data accuracy and security credit card transactions.
            </p>
            <br />
            <p className="text-lg  md:text-xl text-justify">
              Explore this site for utilities leveraging the Luhn algorithm and a database containing information on banking entities linked to credit card numbers. Easily query data for a BIN or credit card number, or generate validated credit card numbers using the Luhn algorithm.
            </p>
          </div>

        </div>


      </section>

      {/* Sección 2 */}
      <section className="bg-gradient-to-b from-blue-800 to-indigo-950 pt-5 pb-5 p-[16px]" id="utilities">

        {/* Contenido de la segunda sección */}
        <div className="max-w-7xl sm:space-x-[16px] mx-auto  flex flex-col text-center justify-center  sm:px-[36px] text-slate-200 sm:p-[16px]">
          <h1 className=" mt-10 text-3xl sm:text-4x1 md:text-6xl font-bold mb-4">Utilities</h1>
        </div>

        <div className="max-w-7xl mx-auto sm:px-6 text-slate-200 justify-between p-5">
        <h2 className="text-2xl sm:text-4x1 md:text-4xl font-bold mb-4">Credit Card Info</h2>

          <p className="text-lg  md:text-xl text-justify">
            This tool will provide you with information about the origin of the credit card number.
          </p>
          <p className="text-lg text-bold md:text-xl text-justify">
            This tool does not store the entered numbers.
          </p>
        </div>
        <form className="max-w-2xl mx-auto sm:px-6 pb-[100px] flex sm:flex-row flex-col justify-center items-center p-5">
          <label htmlFor="number" className="block text-slate-200  font-semibold"></label>
          <input type="text" id="number" name="number" className="w-[300px] px-3 py-2 border rounded-md focus:outline-none focus:ring text-slate-950 focus:border-blue-300 m-3 shadow-lg" placeholder="insert a card number" required />
          <button type="submit" className="bg-blue-700 text-slate-200 px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 m-3 shadow-lg">Get Data</button>
          
        </form>
        <div className="flex items-center pb-5 justify-center">
          <hr className="sm:w-[1200px] w-[200px]"/>
        </div>

        <div className="max-w-7xl mx-auto sm:px-6 text-slate-200 justify-between p-5">
        <h2 className="text-2xl sm:text-4x1 md:text-4xl font-bold mb-4">BIN data</h2>

          <p className="text-lg  md:text-xl text-justify">
            This tool will provide you with information about the origin of a BIN number.
          </p>
          <p className="text-lg text-bold md:text-xl text-justify">
            
          </p>
        </div>
        <form className="max-w-2xl mx-auto sm:px-6  pb-[100px]  flex sm:flex-row flex-col justify-center items-center p-5">
          <label htmlFor="number" className="block text-slate-200  font-semibold"></label>
          <input type="text" id="number" name="number" className="w-[300px] px-3 py-2 border rounded-md focus:outline-none focus:ring text-slate-950 focus:border-blue-300 m-3 shadow-lg" placeholder="insert a BIN number" required />
          <button type="submit" className="bg-blue-700 text-slate-200 px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 m-3 shadow-lg">Get Data</button>
        </form>
        <div className="flex items-center pb-5 justify-center">
          <hr className="sm:w-[1200px] w-[200px]"/>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 text-slate-200 justify-between p-5">
        <h2 className="text-2xl sm:text-4x1 md:text-4xl font-bold mb-4">Generate Credit Card</h2>

          <p className="text-lg  md:text-xl text-justify">
            This tool will generate a required quantity of credit card numbers and their info.
          </p>
          <p className="text-lg text-bold md:text-xl text-justify">
            You just have to put the number of cards you want to generate
          </p>
        </div>
        <form className="max-w-2xl mx-auto sm:px-6  pb-[100px]  flex sm:flex-row flex-col justify-center items-center p-5">
          <label htmlFor="number" className="block text-slate-200  font-semibold"></label>
          <input type="text" id="number" name="number" className="w-[100px] px-3 py-2 border rounded-md focus:outline-none focus:ring text-slate-950 focus:border-blue-300 m-3 shadow-lg" placeholder="" required />
          <button type="submit" className="bg-blue-700 text-slate-200 px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 m-3 shadow-lg">Generate</button>
        </form>
        <div className="flex items-center pb-5 justify-center">
        <hr className="sm:w-[1200px] w-[200px]"/>
        </div>
      </section>

      <section className="relative p-[16px] " id="about">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/background_home.jpg')" }}></div>
        <div className="absolute inset-0  backdrop-blur-sm bg-black  opacity-80 z-10"></div>
        <div className="relative z-10 flex flex-col items-start  justify-center h-screen text-slate-200">
        adasdasdas
        </div>

      </section>
    </div>
  );
}

export default function Schedule() {
  return (
    <section className="ml-0 md:ml-36">
      <div className="bg-brochgreen text-white py-8">
        <h1 className="mx-6 mt-1 font-pixe text-center text-white text-5xl md:text-6xl sm:text-center sm:mx-0">Schedule</h1>
        <div className="container mx-auto flex flex-col justify-center items-start md:flex-row my-12 md:my-24">
          <div className="ml-0 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 md:text-xl text-base text-yellow-300 font-pixe">
                      1-6 Jan, 2021
                    </p>
                    <h4 className="mb-3 font-pixe text-lg md:text-2xl">
                      Registration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Pick your favourite event(s) and register in that event by
                      filling the form corresponding to that event. Its that
                      easy :)
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 md:text-xl text-base text-yellow-300 font-pixe">
                      6-9 Jan, 2021
                    </p>
                    <h4 className="mb-3 font-pixe text-lg md:text-2xl">
                      Participation
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Participate online. The links for your registered events
                      will be sent to you via email and whatsapp groups. Use
                      those links and show your talent.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 md:text-xl text-base text-yellow-300 font-pixe">
                      {" "}
                      10 Jan, 2021
                    </p>
                    <h4 className="mb-3 font-pixe text-lg md:text-2xl">
                      Result Declaration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The ultimate genius will be revealed by our judging panel
                      on 10th May, 2021 and the resukts will be announced on the
                      whatsapp groups and will be mailed to you.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 md:text-xl font-pixe text-base text-yellow-300">
                      12 Jan, 2022
                    </p>
                    <h4 className="mb-3 font-pixe  text-lg md:text-2xl text-left">
                      Prize Distribution
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The winners will be contacted by our team for their
                      addresses and the winning goodies will be sent at their
                      addresses.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

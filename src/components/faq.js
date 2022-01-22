export default function Faq() {
  return (
    <div>
      <section className="text-gray-700 ml-12 sm:ml-16 md:ml-32">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-center text-4xl sm:text-6xl leading-normal tracking-tight text-gray-900">
              Frequently Asked <span className="text-gray-300">Questions</span>
            </h3>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="text-3xl rounded-t transition duration-200 hover:scale-105 bg-gray-200 py-2 px-4">
                  How Long is this site live?
                </summary>

                <p
                  className="text-2xl bg-slate-300 rounded-b p-4 px-6"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </p>
              </details>
              <details className="mb-4">
                <summary className="text-3xl rounded-t transition duration-200 hover:scale-105 bg-gray-200 py-2 px-4">
                  Can I install anything I want on there?
                </summary>

                <p
                  className="text-2xl bg-slate-300 rounded-b p-4 px-6"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </p>
              </details>
              <details className="mb-4">
                <summary className="text-3xl rounded-t transition duration-200 hover:scale-105 bg-gray-200 py-2 px-4">
                  How can I migrate to another site?
                </summary>

                <p
                  className="text-2xl bg-slate-300 rounded-b p-4 px-6"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </p>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="text-3xl rounded-t transition duration-200 hover:scale-105 bg-gray-200 py-2 px-4">
                  Can I change the domain you give me?
                </summary>

                <p
                  className="text-2xl bg-slate-300 rounded-b p-4 px-6"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </p>
              </details>
              <details className="mb-4">
                <summary className="text-3xl rounded-t transition duration-200 hover:scale-105 bg-gray-200 py-2 px-4">
                  How many sites I can create at once?
                </summary>

                <p
                  className="text-2xl bg-slate-300 rounded-b p-4 px-6"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </p>
              </details>
              <details className="mb-4">
                <summary className="text-3xl rounded-t transition duration-200 hover:scale-105 bg-gray-200 py-2 px-4">
                  How can I communicate with you?
                </summary>

                <p
                  className="text-2xl bg-slate-300 rounded-b p-4 px-6"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

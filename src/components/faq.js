export default function Faq() {
  return (
    <div>
      <section className="text-gray-700 ml-0 md:ml-32" id="FAQ">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-center text-5xl md:text-6xl leading-normal tracking-tight text-gray-900">
              Frequently Asked <span className="text-gray-300">Questions</span>
            </h3>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <Each_faq_bar
                question="How to reach FISAT?"
                answer="You can either take the bus or train to arrive at Angamaly. From there are multiple possibilities:
                Take an auto-rikshaw that will take you to FISAT for about ₹150-180.
                Take a private bus that goes directly to FISAT.
                Take a private bus to Mookkannoor and:
                Walk for 15 minutes to FISAT.
                Take an auto-rikshaw from Mookkannoor to FISAT for about ₹50"
              />
              <Each_faq_bar
                question="Do we get any certificate for participation?"
                answer="Yes, you do get a Certificate of Participation if your hack is submitted successfully."
              />
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <Each_faq_bar
                question="What can be the size of the team?"
                answer="
                A team can consist of 1-5 members"
              />
              <Each_faq_bar
                question="How many rounds will there be in the hackathon?"
                answer="There are two rounds, a preliminary  round and a final round."
              />
              {/* <Each_faq_bar
                question="How can I communicate with you?"
                answer="Laboris qui labore cillum culpa in sunt quis sint veniam.
                Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                minim velit nostrud pariatur culpa magna in aute.."
              /> */}
                 {/* <Each_faq_bar
                question="Can I install anything I want on there?"
                answer="Laboris qui labore cillum culpa in sunt quis sint veniam.
                Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                minim velit nostrud pariatur culpa magna in aute.."
              /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Each_faq_bar(props) {
  return (
    <>
      <details className="mb-4">
        <summary className="md:text-xl sm:text-2xl  rounded-t transition duration-200 hover:scale-105 bg-gray-200 py-2 px-4">
          {props.question}
        </summary>

        <p
          className="text-lg md:text-xl bg-slate-300 rounded-b p-4 px-6"
          style={{ fontFamily: "sans-serif" }}
        >
          {props.answer}
        </p>
      </details>
    </>
  );
}

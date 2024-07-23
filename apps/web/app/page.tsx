import Image from "next/image";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import FeatureSet from "@/ui/FeatureSet";
import Newsletter from "@/ui/Newsletter";
import HomeQuestions from "@/ui/HomeQuestions";
import { CircleCross, DownloadPhone, LogoAndroid, LogoApple, Search } from "@/ui/Icons";
import { DownloadAppButton } from "@/ui/DownloadAppButton";

export default function Page(): JSX.Element {
  return (
    <main className="text-primary-black bg-primary-lighter-blue">
      <Navbar />
      {/* Search Section */}
      <section className="headingmain py-32 pb-10 flex flex-col gap-16 justify-center items-center">
        <div className="flex flex-col justify-center items-center z-10">
          <h1 className="heading font-outfit text-7xl font-bold bg-gradient-to-r from-primary-blue to-secondary-black hidden-css">MediSearch</h1>
          <p className="text-2xl hidden-css" style={{ transitionDelay: "0.15s" }}>
            Direct <span className="text-primary-blue font-medium">science-based</span> answers to medical questions
          </p>
        </div>
        <div className="max-w-2xl w-full px-2 flex flex-col justify-center items-center hidden-css" style={{ transitionDelay: "0.3s" }}>
          <form className="w-full bg-white border border-secondary-dark-blue rounded-2xl drop-shadow-md transition-all has-[:focus]:border-primary-blue hover:translate-y-[-0.25rem]">
            <div className="flex flex-nowrap">
              <textarea className="w-full m-3 grow border-none outline-none resize-none overflow-y-hidden font-sans focus:" rows={3} placeholder="Ask a health or bioscience question"></textarea>
              <button className="w-fit h-fit mt-auto mb-3 mr-3 p-1 text-3xl bg-primary-blue text-primary-white rounded-lg transition-all hover:bg-secondary-blue">
                <Search />
              </button>
            </div>
          </form>
        </div>
        <div className="max-w-2xl w-full px-2 flex flex-col gap-5 justify-center items-center z-10">
          <HomeQuestions
            head="Start with common questions"
            icon="bulb"
            ques={[
              "Does sport increase life expectancy?",
              "What are the chances of getting cancer?",
              "Does alcohol have health benefits?",
              "Best foods for reducing cholesterol?",
              "Is coffee beneficial for health?",
            ]}
          />
          <HomeQuestions
            head="Dive deeper into complex questions"
            icon="cap"
            ques={[
              "Does a covid vaccine worsen arthritis?",
              "Could hormonal birth control affect relationships?",
              "What is the probability of blood clots after surgery?",
              "Does creatine affect cognitive performance?",
              "Do you have a higher risk of osteoarthritis after meniscectomy or meniscus repair?",
              "Can second hand smoke cause early AMD?",
            ]}
          />
        </div>
      </section>
      {/* Feature Section */}
      <section className="pt-14 pb-24 flex flex-col justify-center items-center">
        <div className="w-full py-12 flex flex-col justify-center items-center">
          <div className="w-[10%] h-1 bg-gradient-to-r from-primary-blue to-secondary-black hidden-css" style={{ transitionDelay: "0.9s" }}></div>
          <div className="w-full mt-24 flex flex-col items-center">
            <h2 className="w-[60%] mb-2 font-outfit font-medium text-5xl text-center hidden-css">MediSearch AI &ndash; Your Trusted Companion for Answering All Your Health Questions</h2>
            <p className="text-xl hidden-css">Take a look at the latest AI features, MediSearch has to offer.</p>
          </div>
        </div>
        <FeatureSet />
      </section>
      {/* Trust section */}
      <section className="py-20 pb-24">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div>
            <h1 className="font-outfit font-medium text-5xl text-center hidden-css">Build Your Trust</h1>
            <p className="hidden-css">Performance on the US medical licensing exam</p>
          </div>
          <div className="max-w-[35rem] w-full flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="flex gap-2 hidden-css horizontal">
                <Image className="w-6" src="./icon.svg" alt="Logo" width={16} height={16} />
                <p className="font-semibold">MediSearch</p>
              </div>
              <div className="w-full flex gap-4 items-center hidden-css horizontal">
                <div className="w-full h-4 bg-primary-blue rounded-sm"></div>
                <p className="text-sm font-semibold">92.0%</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm hidden-css horizontal">OpenEvidence</p>
              <div className="w-full flex gap-4 items-center hidden-css horizontal">
                <div className="w-[85%] h-4 bg-indigo-800 rounded-sm"></div>
                <p className="text-sm">90.7%</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm hidden-css horizontal">GPT4</p>
              <div className="w-full flex gap-4 items-center hidden-css horizontal">
                <div className="w-[80%] h-4 bg-indigo-800 rounded-sm"></div>
                <p className="text-sm">87.8%</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm hidden-css horizontal">Anthropic Cloude 2</p>
              <div className="w-full flex gap-4 items-center hidden-css horizontal">
                <div className="w-[60%] h-4 bg-indigo-800 rounded-sm"></div>
                <p className="text-sm">66.5%</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm hidden-css horizontal">ChatGPT</p>
              <div className="w-full flex gap-4 items-center hidden-css horizontal">
                <div className="w-[50%] h-4 bg-indigo-800 rounded-sm"></div>
                <p className="text-sm">58.7%</p>
              </div>
            </div>
          </div>
          <p className="hidden-css">
            <a href="" className="text-primary-blue">
              USMLE
            </a>{" "}
            sample test benchmark performance (more info in{" "}
            <a href="" className="text-primary-blue">
              eval docs
            </a>
            )
          </p>
        </div>
      </section>
      {/* Blog Section */}
      <section className="py-20 flex flex-col gap-12 justify-center items-center">
        <h1 className="w-fit font-outfit font-medium text-5xl text-center hidden-css">Latest Blog Posts</h1>
        <div className="w-fit h-full grid grid-rows-1 grid-cols-3 gap-8 hidden-css">
          <a href="">
            <div className="w-[25rem] h-full flex flex-col gap-2 group">
              <Image
                src="https://medisearch.io/blog/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqlu6l4nv%2Fproduction%2F4dd0bb3442ee304badf97af7141e121f8c991c71-500x500.png%3Fw%3D500%26auto%3Dformat&w=1920&q=75"
                alt="Blog"
                height={250}
                width={250}
                className="w-full h-60 rounded-xl object-cover group-hover:h-52 transition-all"
              />
              <h2 className="mt-2 text-2xl font-semibold">Peptides For Weight Loss: How Do Weight Loss Pills Work?</h2>
              <p className="mb-2 text-primary-grey">Peptides are at the centre of innovative weight management solutions. These short sequences...</p>
              <div className="flex gap-4">
                <Image
                  src="https://medisearch.io/blog/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqlu6l4nv%2Fproduction%2F331904ab2469a71271c054462b98abb3576eb133-300x297.png%3Fw%3D300%26auto%3Dformat&w=1920&q=75"
                  alt="Blog"
                  height={40}
                  width={40}
                  className="w rounded-full"
                />
                <p className="text-sm font-semibold">Klara Hatinova</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="w-[25rem] h-full flex flex-col gap-2 group">
              <Image
                src="https://medisearch.io/blog/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqlu6l4nv%2Fproduction%2Fa23cc774dd5bce15ca4c143bc97854765453e8b1-512x512.png%3Fw%3D512%26auto%3Dformat&w=1920&q=75"
                alt="Blog"
                height={250}
                width={250}
                className="w-full h-60 rounded-xl object-cover group-hover:h-52 transition-all"
              />
              <h2 className="mt-2 text-2xl font-semibold">Globus Pallidus: A Structure in the Basal Ganglia</h2>
              <p className="mb-2 text-primary-grey">The globus pallidus, a key structure within the brain's basal ganglia, plays an essential role...</p>
              <div className="flex gap-4">
                <Image
                  src="https://medisearch.io/blog/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqlu6l4nv%2Fproduction%2F3d584e498dd7f812f46ed11d170ff70ade08b062-900x835.jpg%3Fw%3D900%26auto%3Dformat&w=1920&q=75"
                  alt="Blog"
                  height={40}
                  width={40}
                  className="w rounded-full"
                />
                <p className="text-sm font-semibold">Frederika Malichová</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="w-[25rem] h-full flex flex-col gap-2 group">
              <Image
                src="https://medisearch.io/blog/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqlu6l4nv%2Fproduction%2Fce3ebd5620872dc8636dfef3537da4af9b294366-300x300.png%3Fw%3D300%26auto%3Dformat&w=1920&q=75"
                alt="Blog"
                height={250}
                width={250}
                className="w-full h-60 rounded-xl object-cover group-hover:h-52 transition-all"
              />
              <h2 className="mt-2 text-2xl font-semibold">Neuroinflammation in Dementia: Mechanisms and Implications</h2>
              <p className="mb-2 text-primary-grey">Globally, over 55 million people live with dementia, and this number is projected to increase in...</p>
              <div className="flex gap-4">
                <Image
                  src="https://medisearch.io/blog/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqlu6l4nv%2Fproduction%2Fca884bd32a1a9e30da244b9ad3da72f1cd4ee18f-300x277.png%3Fw%3D300%26auto%3Dformat&w=1920&q=75"
                  alt="Blog"
                  height={40}
                  width={40}
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-sm font-semibold">Faith Wershba</p>
              </div>
            </div>
          </a>
        </div>
        <button className="px-5 py-2 font-semibold rounded-lg border-2 border-secondary-blue text-primary-white bg-primary-blue drop-shadow transition-all hover:translate-y-[-0.25rem] hover:bg-secondary-blue hidden-css">
          View all posts
        </button>
      </section>
      <Newsletter />
      <Footer />

      {/* Download App */}
      <DownloadAppButton />
    </main>
  );
}

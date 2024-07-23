import Image from "next/image";
import { Linkedin, TwitterX } from "./Icons";

export default function Footer(): JSX.Element {
  return (
    <section className="max-w-[70rem] w-full mx-auto p-6 pt-20 flex flex-col gap-16">
      <div className="flex justify-between">
        <div>
          <div className="flex">
            <Image className="" src="./icon.svg" alt="Logo" width={40} height={40} />
            <p className="text-4xl font-outfit">MediSearch</p>
          </div>
          <p className="mt-4 text-primary-grey">AI assintant to answer all your medical questions</p>
        </div>
        <div className="flex gap-16 text-sm font-medium text-primary-grey">
          <div className="flex flex-col gap-4">
            <h3 className="mb-1 text-primary-dark-grey font-semibold">Product</h3>
            <a className="transition-colors duration-500 ease-in-out hover:text-primary-blue" href="">
              Documentation
            </a>
            <a className="transition-colors duration-500 ease-in-out hover:text-primary-blue" href="">
              Pricing
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mb-1 text-primary-dark-grey font-semibold">Company</h3>
            <a className="transition-colors duration-500 ease-in-out hover:text-primary-blue" href="">
              Our Team
            </a>
            <a className="transition-colors duration-500 ease-in-out hover:text-primary-blue" href="">
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mb-1 text-primary-dark-grey font-semibold">Resources</h3>
            <a className="transition-colors duration-500 ease-in-out hover:text-primary-blue" href="">
              Blog
            </a>
            <a className="transition-colors duration-500 ease-in-out hover:text-primary-blue" href="">
              Contact Us
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mb-1 text-primary-dark-grey font-semibold">Legal</h3>
            <a className="transition-colors duration-500 ease-in-out hover:text-primary-blue" href="">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="text-primary-grey flex justify-between">
        <p className="text-sm">@Copywrite Text</p>
        <div className="text-2xl flex gap-10">
          <a className="cursor-pointer transition-colors duration-500 ease-in-out hover:text-primary-blue" href="">
            <TwitterX />
          </a>
          <a className="cursor-pointer transition-colors duration-500 ease-in-out hover:text-primary-blue" href="">
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

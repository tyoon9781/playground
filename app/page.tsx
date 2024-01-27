type LinkProps = {
  link?: string;
  contents: string;
  focusContents?: string;
};

type CardProps = {
  icon: string;
  title: string;
  contents: string;
};

const Menu = ({ link = "#", contents, focusContents = "" }: LinkProps) => {
  return (
    <li className="text-xs font-bold uppercase">
      <a href={link}>
        <span>{contents}</span>
        <span> {focusContents}</span>
      </a>
    </li>
  );
};

const Button = ({ link = "#", contents, focusContents = "" }: LinkProps) => {
  return (
    <button className="px-12 py-4 bg-[#44b78b] font-bold rounded-md">
      <a href={link}>
        <span className="text-white">{contents}</span>
        <span className="text-[#c9f0DD]"> {focusContents}</span>
      </a>
    </button>
  );
};

const Header = () => {
  return (
    <div className="bg-[#0C4B33] text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-4xl font-bold mr-2 pb-2">
            <a href="#">django</a>
          </div>
          <div className="text-xs text-[#44b78b] font-bold w-52">
            The web framework for perfectionists with deadlines.
          </div>
        </div>
        <ul className="flex justify-between space-x-4">
          <Menu contents="Overview" />
          <Menu contents="Download" />
          <Menu contents="Documentation" />
          <Menu contents="News" />
          <Menu contents="Community" />
          <Menu contents="Code" />
          <Menu contents="Issues" />
          <Menu contents="About" />
          <Menu contents="♥Donate" />
        </ul>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className=" mx-auto text-center pt-12 pb-24 border-b">
      <p className="py-12 w-[700px] text-[#0c3c26] text-[32px] font-light mx-auto text-center">
        Django makes it easier to build better web apps more quickly and with
        less code.
      </p>
      <Button contents="Get started with Django" />
    </div>
  );
};

const Card = ({ icon, title, contents }: CardProps) => {
  return (
    <div className="py-10">
      <div className="flex">
        <div className="_container relative min-w-[80px] h-[80px] rounded-full text-[38px] text-white bg-[#20aa76]">
          <i
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 icon fas ${icon}`}
          />
        </div>
        <div className="mx-8">
          <div className="">{title}</div>
          <div>{contents}</div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <title>Django Demo page</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      <Header />
      <Hero />
      <div className="_contents flex flex-wrap">
        <div className="_right w-8/12 px-10 py-6">
          <h2 className="_contents_title text-3xl my-6">Meet Django</h2>
          <div className="_contents text-[18px] font-sans font-light mb-6">
            Django is a high-level Python web framework that encourages rapid
            development and clean, pragmatic design. Built by experienced
            developers, it takes care of much of the hassle of web development,
            so you can focus on writing your app without needing to reinvent the
            wheel. It’s free and open source.
          </div>
          <Card
            icon="fa-bolt"
            title="Ridiculously fast."
            contents="Django was designed to help developers take applications from concept to completion as quickly as possible."
          />
          <Card
            icon="fa-lock"
            title="Reassuringly secure."
            contents="Django takes security seriously and helps developers avoid many common security mistakes."
          />
          <Card
            icon="fa-dashboard"
            title="Exceedingly scalable."
            contents="Some of the busiest sites on the web leverage Django’s ability to quickly and flexibly scale."
          />
          <div className="text-center">
            <button className="w-[400px] p-5 my-5 border border-[#cfe3dc] text-[#859d94]">
              Learn more about Django
            </button>
          </div>
          <hr className="m-8" />
          <h2 className="_contents_title text-3xl my-6">Stay in the loop</h2>
          <div className="_contents text-[18px] font-sans mb-6">
            Subscribe to one of our mailing lists to stay up to date with
            everything in the Django community:
          </div>
          <div className="_small_card flex">
            <div className="_left mr-4 w-1/2">
              <h3 className="_left_title font-bold text-lg mb-2 text-[#20aa76]">
                Using Django
              </h3>
              <p className="text-sm">
                Get help with Django and follow announcements.
              </p>
              <div className="my-3 p-3 border border-[#cfe3dc] flex justify-between items-center">
                Enter email
                <i className="text-xl text-[#44b78b]  fa-regular fa-envelope"></i>
              </div>
              <p className="break-words text-sm ">
                You can also subscribe by sending an email to
                django-users+subscribe@googlegroups.com and following the
                instructions that will be sent to you.
              </p>
            </div>
            <div className="_right ml-4 w-1/2">
              <h3 className="_right_title font-bold text-lg mb-2 text-[#20aa76]">
                Contriubuting to Django
              </h3>
              <p className="text-sm">
                Contribute to the development of Django itself.
              </p>
              <div className="my-3 p-3 border border-[#cfe3dc] flex justify-between items-center">
                Enter email
                <i className="text-xl text-[#44b78b] fa-regular fa-envelope"></i>
              </div>
              <p className="text-sm">
                Before asking a question about how to contribute, read
                Contributing to Django. Many frequently asked questions are
                answered there.
              </p>
              <hr className="my-3" />
              <p className="break-words text-sm">
                You can also subscribe by sending an email to
                django-developers+subscribe@googlegroups.com and following the
                instructions that will be sent to you.
              </p>
            </div>
          </div>
          <p className="text-lg py-5">
            We have a few other specialized lists (announce, i18n, ...). You can
            find more information about them in our mailing list documentation.
          </p>
        </div>
        <div className="_left w-4/12 p-10 bg-[#F8F8F8]">
          <Button contents="DownLoad" focusContents="latest release: 5.0.1" />
        </div>
      </div>
      <div className="_sub_footer bg-[#44b78b] text-white">sub_footer</div>
      <div className="_footer bg-[#0C4B33] text-[#2b8c67]">footer</div>
    </>
  );
}

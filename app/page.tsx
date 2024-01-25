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
        <div className="mx-10">
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
          <h1 className="_contents_title text-3xl my-6">Meet Django</h1>
          <div className="text-[18px] font-sans font-light mb-6">
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

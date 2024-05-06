import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>Hello about page how are you</h1>
      <Link href="/">Go to home page</Link>
      <br />
      <br />
      <Link href="/about/aboutstudent">Go to aboutStudent page</Link>
      <br />
      <br />
      <Link href="/about/aboutcollege">Go to aboutCollege page</Link>
    </div>
  );
};

export default About;

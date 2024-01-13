import WelcomeSection from "../WelcomeSection/WelcomeSection";

export default function HomePage({ activePage }) {
  console.log(`Active(Home):  ${activePage}`);
  return (
    <>
      <WelcomeSection />
    </>
  );
}

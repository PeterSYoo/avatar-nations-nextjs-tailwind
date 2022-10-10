import Head from "next/head";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Avatar Nations | NextJS / Tailwind</title>
      </Head>
      <div className="min-h-screen min-w-screen">{children}</div>
    </>
  );
};

export default Layout;

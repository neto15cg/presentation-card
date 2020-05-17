import Head from "next/head";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eliezer Marques</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1 className="title">Eliezer Marques</h1>
        <div className="content">
          <div className="presentation-container">
            <div className="presentation">
              <p className="description">
                I am a computer engineer, currently working at &nbsp;
                <a
                  className="link"
                  target="_blank"
                  href="https://www.agilize.com.br"
                >
                  Agilize Contabilidade
                </a>
                &nbsp;as a Front-end developer, but I also have experience as a
                Back-end developer.
              </p>
            </div>
            <div className="icon-developer">
              <MdDeveloperMode color="#fff" size={300} />
            </div>

            <div className="network">
              <img
                className="profile"
                src="/profile.png"
                width={60}
                alt="Eliezer Marques"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                className="link-icon"
                target="_blank"
                href="https://br.linkedin.com/in/eliezer-marques-623b95124"
              >
                Linkedin &nbsp;
                <FaLinkedin color="#fff" size={25} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                className="link-icon"
                target="_blank"
                href="https://github.com/neto15cg"
              >
                Github &nbsp;
                <FaGithub color="#fff" size={25} />
              </a>
            </div>
          </div>
          <div className="skill-container">
            <div className="card">
              <div className="card-content">
                <p>JAVASCRIPT / TYPESCRIPT</p>
                <h3>
                  I have been working as a JAVASCRIPT developer for 3 years. The
                  frameworks I use most are <b>ReactJS</b> and{" "}
                  <b>React Native</b>.
                </h3>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <p>PHP</p>
                <h3>
                  I've been working as a PHP developer for 3 years with{" "}
                  <b>Laravel</b> to create APIs.
                </h3>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <p>GOLANG</p>
                <h3>
                  I've been working as a Golang developer for 2 years to create
                  APIs.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>

      <style jsx>{`
        .container {
          display: flex;
          flex: 1;
          align-items: center;
          flex-direction: column;
          background-color: #151515;
          min-height: 100vh;
          overflow: hidden;
        }

        .title {
          font-size: 48px;
          color: #ffffff;
          line-height: 1.25;
          font-weight: 700;
          font-family: Roboto;
          text-align: center;
          width: 100%;
          margin: 0;
          padding: 30px 30px 30px 30px;
        }

        .content {
          display: flex;
          flex: 1;
          flex-direction: row;
          width: 100%;
        }

        .presentation-container {
          display: flex;
          flex: 1;
          flex-direction: column;
          width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          padding: 30px 30px 30px 30px;
          max-height: 100%;
        }

        .presentation {
          max-width: 370px;
        }

        .network {
          display: flex;
          flex-direction: row;
          max-width: 370px;
          width: 100%;
        }

        .profile {
          border-radius: 50%;
        }

        .link {
          color: #ffffff;
        }

        .link-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #ffffff;
        }

        .description {
          color: #949495;
          font-family: Roboto;
          font-size: 16px;
        }

        .skill-container {
          max-height: calc(100vh - 120px);
          overflow: auto;
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          padding: 30px 30px 30px 30px;
        }

        ::-webkit-scrollbar {
          width: 0;
        }

        .card {
          width: 500px;
          min-height: 200px;
          background-color: #202022;
          transition: all 0.2s ease-in-out;
          margin: 5px 0;
        }

        .card:hover {
          transform: scale(1.1);
        }

        .card-content {
          flex: 1;
          height: 100%;
          padding: 40px;
        }

        .card-content p {
          letter-spacing: 3px;
          color: #ffffff;
          font-weight: 400;
          font-size: 16px;
        }
        .card-content h3 {
          color: #ffffff;
          font-weight: 400;
          font-size: 16px;
        }

        @media only screen and (max-width: 1079px) {
          .container {
            overflow: auto;
          }

          .content {
            flex-direction: column;
          }

          .presentation-container {
            flex: 0;
          }

          .presentation {
            max-width: 100%;
          }

          .skill-container {
            overflow: hidden;
            max-height: 100%;
          }

          .card {
            width: 100%;
          }
          .icon-developer {
            display: none;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

import data from "../../data/index.json";

export default function MyPortfolio() {

  const handleGithubClick = () => {
    window.open("https://github.com/marjhonie-siasol", "_blank");
  };

  const canteenRepo = (url) => {
    window.open(url, "_blank");
  };

  const contactRepo = (url) => {
    window.open(url, "_blank");
  };

  const auzaiRepo = (url) => {
    window.open(url, "_blank");
  };

  const handleClick = (url) => {
    canteenRepo(url);
    contactRepo(url);
    auzaiRepo(url);
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">My Projects</p>
          <h2 className="section--heading">Repositories </h2>
        </div>
        <div>
          <button className="btn btn-github" onClick={handleGithubClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 28 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.798 8.205 11.387.599.111.82-.26.82-.577 0-.286-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.931 0-1.31.467-2.38 1.235-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.302 1.23.957-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.005.404 2.292-1.552 3.298-1.23 3.298-1.23.654 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.806 5.624-5.478 5.92.43.372.814 1.104.814 2.226 0 1.606-.014 2.896-.014 3.287 0 .32.22.694.825.577C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z"
                fill="currentColor"
              />
            </svg>
            My Github
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link" onClick={() => handleClick(item.linkUrl)}>View Github             
                {item.linkText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

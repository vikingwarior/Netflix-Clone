const FeaturedEntryAttributes = ({ title, summary }) => {
  return (
    <div id="banner-data" className="absolute w-full aspect-video py-56 bg-gradient-to-r from-black px-10">
      <p className="text-5xl font-bold">{title}</p>
      <p className="my-12 text-2xl w-1/2">{summary}</p>
      <div id="banner-btn-container" className="flex text-3xl font-semibold">
        <button className="flex items-center mr-4 px-8 py-3 rounded-md bg-white text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={28}
            height={28}
            viewBox="0 0 24 24"
            role="img"
            data-icon="PlayStandard"
            aria-hidden="true"
            className="inline"
          >
            <path
              d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
              fill="currentColor"
            />
          </svg>
          <span className="ml-2">Play</span>
        </button>
        <button className="flex items-center px-8 py-3 rounded-md bg-zinc-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            role="img"
            data-icon="CircleIStandard"
            aria-hidden="true"
            className="inline"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
              fill="currentColor"
            />
          </svg>
          <span className="ml-2 ">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default FeaturedEntryAttributes;

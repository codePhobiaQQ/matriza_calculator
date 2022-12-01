import React from "react";

interface CloseI {
  clickHandler: () => void;
}

const Close = ({ clickHandler }: CloseI) => {
  return (
    <svg
      width="18"
      height="18"
      className={"Close"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={clickHandler}
    >
      <path
        d="M8.16444 8.99997C8.06317 8.92403 8.01254 8.89871 7.93659 8.82276C5.45558 6.34175 2.97457 3.86073 0.518871 1.40504C0.316339 1.20251 0.215075 0.999975 0.291023 0.721494C0.417606 0.265798 0.923935 0.113899 1.30368 0.417696C1.35431 0.468329 1.40495 0.518962 1.45558 0.569595C3.91128 3.02529 6.39229 5.5063 8.84798 7.962C8.89862 8.01263 8.92393 8.06327 8.97457 8.13922C8.99988 8.13922 9.0252 8.16453 9.05052 8.16453C9.10115 8.08858 9.12647 8.01263 9.1771 7.962C11.6328 5.48099 14.1138 2.99998 16.5948 0.544279C16.7214 0.417697 16.8986 0.316431 17.0505 0.291115C17.3037 0.240482 17.5062 0.392381 17.6328 0.620229C17.7594 0.873393 17.7341 1.10124 17.5822 1.30377C17.5315 1.35441 17.4809 1.40504 17.4303 1.45567C14.9746 3.91137 12.5189 6.36706 10.0632 8.82276C10.0125 8.87339 9.96191 8.92403 9.86064 9.05061C9.93659 9.10124 10.0125 9.12656 10.0632 9.17719C12.5442 11.6582 15.0252 14.1392 17.5062 16.6202C17.7087 16.8228 17.81 17.0253 17.7341 17.3291C17.6075 17.7595 17.1011 17.9114 16.7467 17.6329C16.6708 17.5823 16.6201 17.5063 16.5695 17.4557C14.1138 15 11.6581 12.5443 9.20241 10.0886C9.15178 10.038 9.10115 9.962 9.0252 9.88605C8.94925 9.962 8.89862 10.0126 8.84798 10.0633C6.36697 12.5443 3.88596 15.0253 1.40495 17.481C1.27837 17.6076 1.12647 17.7088 0.974569 17.7342C0.721404 17.8101 0.468238 17.6582 0.341657 17.4304C0.215074 17.2025 0.24039 16.924 0.392289 16.7215C0.442922 16.6709 0.493554 16.5949 0.544187 16.5443C2.99988 14.1139 5.4809 11.6582 7.93659 9.17719C7.98722 9.12656 8.06317 9.07592 8.16444 8.99997Z"
        fill="#582734"
      />
    </svg>
  );
};

export default Close;

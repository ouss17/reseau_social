import React from "react";

/* Icons des dashboards */

export const Trash = () => {
    return (
        <svg
            width="64"
            height="87"
            viewBox="0 0 64 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="trash svgIconsButton"
        >
            <path
                d="M16.4642 20.2065V12.3996C16.4642 10.3291 17.2867 8.34343 18.7508 6.87935C20.2149 5.41528 22.2006 4.59277 24.2711 4.59277H39.8848C41.9554 4.59277 43.9411 5.41528 45.4051 6.87935C46.8692 8.34343 47.6917 10.3291 47.6917 12.3996V20.2065M59.402 20.2065V74.8547C59.402 76.9252 58.5795 78.9109 57.1155 80.375C55.6514 81.839 53.6657 82.6615 51.5952 82.6615H12.5608C10.4903 82.6615 8.50456 81.839 7.04049 80.375C5.57641 78.9109 4.75391 76.9252 4.75391 74.8547V20.2065H59.402Z"
                strokeWidth="7.80688"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Pen = () => {
    return (
        <svg
            width="78"
            height="86"
            viewBox="0 0 78 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pen"
        >
            <path
                d="M38.6524 11.3496H11.3284C9.25785 11.3496 7.27214 12.1721 5.80807 13.6362C4.34399 15.1003 3.52148 17.086 3.52148 19.1565V73.8046C3.52148 75.8751 4.34399 77.8608 5.80807 79.3249C7.27214 80.789 9.25785 81.6115 11.3284 81.6115H65.9765C68.047 81.6115 70.0327 80.789 71.4968 79.3249C72.9609 77.8608 73.7834 75.8751 73.7834 73.8046V46.4806"
                strokeWidth="7.02619"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M61.4851 6.07924C62.8827 4.68165 64.7783 3.89648 66.7548 3.89648C68.7313 3.89648 70.6268 4.68165 72.0244 6.07924C73.422 7.47684 74.2072 9.37238 74.2072 11.3489C74.2072 13.3254 73.422 15.2209 72.0244 16.6185L38.65 49.9929L24.5977 53.506L28.1108 39.4536L61.4851 6.07924Z"
                strokeWidth="7.02619"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

// export const Cube = () => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//             <path d="M234.5 5.709C248.4 .7377 263.6 .7377 277.5 5.709L469.5 74.28C494.1 83.38 512 107.5 512 134.6V377.4C512 404.5 494.1 428.6 469.5 437.7L277.5 506.3C263.6 511.3 248.4 511.3 234.5 506.3L42.47 437.7C17 428.6 0 404.5 0 377.4V134.6C0 107.5 17 83.38 42.47 74.28L234.5 5.709zM256 65.98L82.34 128L256 190L429.7 128L256 65.98zM288 434.6L448 377.4V189.4L288 246.6V434.6z" />
//         </svg>
//     );
// };

export const Bell = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z" />
        </svg>
    );
};

export const Setting = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" />
        </svg>
    )
}

export const Admin = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128zM209.1 359.2L176 304H272L238.9 359.2L272.2 483.1L311.7 321.9C388.9 333.9 448 400.7 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 400.7 59.09 333.9 136.3 321.9L175.8 483.1L209.1 359.2z" />
        </svg>
    )
}

export const Eye = () => {
    return (
        <svg
            width="92"
            height="69"
            viewBox="0 0 92 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="eye"
        >
            <path
                d="M4.72266 34.4703C4.72266 34.4703 19.8704 4.1748 46.379 4.1748C72.8876 4.1748 88.0354 34.4703 88.0354 34.4703C88.0354 34.4703 72.8876 64.7659 46.379 64.7659C19.8704 64.7659 4.72266 34.4703 4.72266 34.4703Z"
                strokeWidth="7.57388"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M46.3764 45.832C52.6509 45.832 57.7373 40.7456 57.7373 34.4712C57.7373 28.1968 52.6509 23.1104 46.3764 23.1104C40.102 23.1104 35.0156 28.1968 35.0156 34.4712C35.0156 40.7456 40.102 45.832 46.3764 45.832Z"
                strokeWidth="7.57388"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Cross = () => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg%22%3E"
            className="cross"
        >
            <path
                d="M17 1L1 17M17 17L1 1L17 17Z"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
};

/* Icons des boutons */

export const Save = () => {
    return (
        <svg
            width="148"
            height="151"
            viewBox="0 0 148 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svgIconsButton"
        >
            <path
                d="M124 147.75H15.5C11.3891 147.75 7.44666 146.117 4.53984 143.21C1.63303 140.303 0 136.361 0 132.25V23.75C0 19.6391 1.63303 15.6967 4.53984 12.7898C7.44666 9.88303 11.3891 8.25 15.5 8.25H100.75L139.5 47V132.25C139.5 136.361 137.867 140.303 134.96 143.21C132.053 146.117 128.111 147.75 124 147.75Z"
                stroke="white"
                strokeWidth="15.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M108.499 147.746V85.7461H30.999V147.746"
                stroke="white"
                strokeWidth="15.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M30.999 8.25V47H92.999"
                stroke="white"
                strokeWidth="15.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Send = () => {
    return (
        <svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svgIconsButton"
        >
            <path
                d="M209.167 10.6172L99.625 120.159"
                stroke="white"
                strokeWidth="19.9167"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M209.167 10.6172L139.458 209.784L99.625 120.159L10 80.3255L209.167 10.6172Z"
                stroke="white"
                strokeWidth="19.9167"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Cancel = () => {
    return (
        <svg
            width="205"
            height="206"
            viewBox="0 0 205 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svgIconsButton"
        >
            <path
                d="M102.5 195.841C153.816 195.841 195.416 154.241 195.416 102.924C195.416 51.608 153.816 10.0078 102.5 10.0078C51.1832 10.0078 9.58301 51.608 9.58301 102.924C9.58301 154.241 51.1832 195.841 102.5 195.841Z"
                stroke="white"
                strokeWidth="18.5833"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M36.8096 37.2266L168.194 168.611"
                stroke="white"
                strokeWidth="18.5833"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Modify = () => {
    return (
        <svg
            width="172"
            height="172"
            viewBox="0 0 172 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svgIconsButton"
        >
            <path
                d="M77.7777 24.4453H23.5062C19.3937 24.4453 15.4496 26.079 12.5416 28.987C9.63368 31.8949 8 35.839 8 39.9515V148.495C8 152.607 9.63368 156.551 12.5416 159.459C15.4496 162.367 19.3937 164.001 23.5062 164.001H132.049C136.162 164.001 140.106 162.367 143.014 159.459C145.922 156.551 147.555 152.607 147.555 148.495V94.2231"
                stroke="white"
                strokeWidth="15.5062"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M135.926 12.8171C139.01 9.73278 143.194 8 147.556 8C151.917 8 156.101 9.73278 159.185 12.8171C162.27 15.9015 164.002 20.0848 164.002 24.4468C164.002 28.8087 162.27 32.992 159.185 36.0764L85.5309 109.731L54.5186 117.484L62.2716 86.4714L135.926 12.8171Z"
                stroke="white"
                strokeWidth="15.5062"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Add = () => {
    return (
        <svg
            width="168"
            height="168"
            viewBox="0 0 168 168"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svgIconsButton"
        >
            <path
                d="M83.999 11V157"
                stroke="white"
                strokeWidth="20.8572"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11 84.0078H157"
                stroke="white"
                strokeWidth="20.8572"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};


/* Icons Sidebar menus */

export const Home = () => {
    return (
        <svg
            width="156"
            height="185"
            viewBox="0 0 186 205"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.862 74.8585L93.2911 9.95312L176.72 74.8585V176.853C176.72 181.771 174.767 186.488 171.29 189.965C167.813 193.443 163.097 195.397 158.18 195.397H28.4018C23.4847 195.397 18.7691 193.443 15.2922 189.965C11.8153 186.488 9.862 181.771 9.862 176.853V74.8585Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{strokeWidth:10}}
            />
            <path
                d="M67.6215 195.39V102.668H123.241V195.39"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{strokeWidth:10}}
            />
        </svg>
    );
};



export const Exchanges = () => {
    return (
        <svg
            width="235"
            height="192"
            viewBox="0 0 235 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M32.8097 11H202.869C214.561 11 224.127 20.5682 224.127 32.2627V159.839C224.127 171.533 214.561 181.102 202.869 181.102H32.8097C21.1181 181.102 11.5522 171.533 11.5522 159.839V32.2627C11.5522 20.5682 21.1181 11 32.8097 11Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{strokeWidth:10}}
            />
            <path
                d="M224.127 32.2656L117.84 106.686L11.5522 32.2656"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{strokeWidth:10}}
            />
        </svg>
    );
};

export const Users = () => {
    return (
        <svg
            width="60"
            height="67"
            viewBox="0 0 60 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svgSubMenu"
        >
            <path
                d="M56.5243 62.7793V56.1823C56.5243 52.683 55.1345 49.3271 52.6608 46.8527C50.187 44.3784 46.8319 42.9883 43.3335 42.9883H16.9518C13.4534 42.9883 10.0982 44.3784 7.62449 46.8527C5.15073 49.3271 3.76099 52.683 3.76099 56.1823V62.7793"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{strokeWidth:4}}
            />
            <path
                d="M30.143 29.7905C37.4281 29.7905 43.3338 23.8833 43.3338 16.5964C43.3338 9.30954 37.4281 3.40234 30.143 3.40234C22.8579 3.40234 16.9521 9.30954 16.9521 16.5964C16.9521 23.8833 22.8579 29.7905 30.143 29.7905Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{strokeWidth:4}}
            />
        </svg>
    );
};


/* Profile menu icon */


export const Search = () => {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="6.5" cy="6.5" r="6" stroke="currentColor" />
            <path
                d="M10.8126 10.8126L14 14"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};



export const PowerOff = () => {
    return (
        <svg
            width="512"
            height="86"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            strokeWidth={2}
            fill="currentColor"
            stroke="currentColor"
            className="svgMdm"
        >
            <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256V32C224 14.33 238.3 0 256 0C273.7 0 288 14.33 288 32V256zM80 256C80 353.2 158.8 432 256 432C353.2 432 432 353.2 432 256C432 201.6 407.3 152.9 368.5 120.6C354.9 109.3 353 89.13 364.3 75.54C375.6 61.95 395.8 60.1 409.4 71.4C462.2 115.4 496 181.8 496 255.1C496 388.5 388.5 496 256 496C123.5 496 16 388.5 16 255.1C16 181.8 49.75 115.4 102.6 71.4C116.2 60.1 136.4 61.95 147.7 75.54C158.1 89.13 157.1 109.3 143.5 120.6C104.7 152.9 80 201.6 80 256z" />
        </svg>
    );
};


export const ChevronRight = () => {
    return (
        <svg
            width="320"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            strokeWidth={2}
            stroke="currentColor"
            fill="currentColor"
            className="svgMdm"
        >
            <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
        </svg>
    );
};

export const ChevronLeft = () => {
    return (
        <svg
            width="320"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            strokeWidth={2}
            stroke="currentColor"
            fill="currentColor"
            className="svgMdm"
        >
            <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
        </svg>
    );
};

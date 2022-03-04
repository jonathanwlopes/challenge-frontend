interface IconProps {
  name: "logo" | "search" | "profile" | "cart" | "arrow-left" | "arrow-right" | "star-filled" | "star-unfilled"
  color?: string
  className?: string
}

export const Icon = ({ name, color, className }: IconProps) => {
  switch (name) {
    case "logo":
      return (
        <svg width="181" height="41" viewBox="0 0 181 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140.158 40.9009H133.817V12.3971H140.158V40.9009Z" fill="black" />
          <path
            d="M13.7624 18.2415C12.7821 18.228 11.8098 18.4216 10.9083 18.8097C10.0067 19.1979 9.1958 19.772 8.52777 20.495C7.10238 21.9809 6.38968 24.0364 6.38968 26.6366C6.38968 29.2369 7.10238 31.3419 8.55234 32.8525C9.23066 33.5842 10.0533 34.1648 10.9675 34.5572C11.8817 34.9495 12.8672 35.1449 13.8607 35.1308C15.7284 35.1308 17.2276 34.6108 18.358 33.5954C19.409 32.6719 20.1835 31.4712 20.5944 30.1284L26.1977 32.1839C25.4604 34.586 24.035 36.6662 21.9215 38.3997C19.808 40.1332 17.1293 41 13.8607 41C9.92858 41 6.63544 39.638 3.98126 36.8891C1.32709 34.1403 0 30.7228 0 26.6366C0 22.501 1.30251 19.0835 3.93211 16.3842C6.56171 13.6848 9.8057 12.3228 13.7132 12.3228C17.0555 12.3228 19.7834 13.1895 21.8969 14.923C23.9007 16.5099 25.3406 18.7081 26.0011 21.1885L20.2749 23.2934C19.9312 21.9223 19.1964 20.6826 18.1614 19.7274C17.0826 18.7368 15.6326 18.2415 13.7624 18.2415Z"
            fill="black"
          />
          <path
            d="M36.7185 32.7782C37.4251 33.4986 38.2661 34.0711 39.1931 34.4625C40.1202 34.8539 41.1149 35.0566 42.1201 35.0589C43.1252 35.0612 44.1209 34.8631 45.0497 34.4759C45.9785 34.0887 46.8221 33.5202 47.5319 32.803C49.0064 31.2923 49.7437 29.2121 49.7437 26.5128C49.7437 23.863 49.0064 21.8076 47.5319 20.3217C46.0892 18.8933 44.1477 18.093 42.1252 18.093C40.1027 18.093 38.1612 18.8933 36.7185 20.3217C35.244 21.8076 34.5067 23.863 34.5067 26.5128C34.5067 29.1626 35.244 31.2676 36.7185 32.7782ZM42.1252 12.3228C46.2293 12.3228 49.6208 13.6601 52.275 16.3346C54.9291 19.0092 56.2808 22.4019 56.2808 26.5376C56.2808 30.6732 54.9537 34.066 52.275 36.7653C49.5962 39.4646 46.2293 40.8019 42.1252 40.8019C38.0702 40.8019 34.7033 39.4646 32.0246 36.7653C29.3458 34.066 28.0188 30.6485 28.0188 26.5376C28.0188 22.4267 29.3458 19.0339 32.0246 16.3346C34.7033 13.6353 38.0456 12.3228 42.1252 12.3228Z"
            fill="black"
          />
          <path
            d="M72.8202 12.4961V19.0092C72.1288 18.9023 71.4308 18.8443 70.7313 18.8358C65.9145 18.8358 63.5306 21.2132 63.5306 26.488V40.8019H57.141V12.3971H63.3586V16.9537C63.9699 15.5195 65.032 14.3274 66.3814 13.561C67.8207 12.7198 69.461 12.2916 71.1245 12.3228C71.6944 12.3179 72.263 12.376 72.8202 12.4961Z"
            fill="black"
          />
          <path
            d="M81.5446 23.6154H95.7739C95.7513 22.8139 95.5676 22.0254 95.2339 21.2975C94.9002 20.5696 94.4234 19.9175 93.8325 19.3807C92.6283 18.2415 90.8834 17.6719 88.6224 17.6719C86.5581 17.6719 84.8869 18.2663 83.6335 19.4549C82.3802 20.6436 81.6675 22.0403 81.5446 23.6154ZM96.5358 30.5989L102.36 32.3077C101.525 34.7594 99.9764 36.7901 97.6908 38.3997C95.4053 40.0094 92.6037 40.8019 89.2614 40.8019C85.1327 40.8019 81.6429 39.4894 78.7676 36.8891C75.8922 34.2888 74.4422 30.7971 74.4422 26.4137C74.4422 22.3029 75.8431 18.9101 78.6447 16.2851C81.3006 13.7035 84.8588 12.28 88.5487 12.3228C92.9969 12.3228 96.4621 13.5858 98.9688 16.087C101.476 18.5882 102.726 21.9809 102.726 26.2503C102.726 27.3895 102.677 28.0581 102.554 28.281H81.3701C81.3967 29.2392 81.6252 30.1808 82.0404 31.0432C82.4556 31.9057 83.0481 32.6693 83.7785 33.2834C85.3092 34.6038 87.2691 35.3091 89.2835 35.2646C92.9969 35.2794 95.4299 33.7193 96.5358 30.5989Z"
            fill="black"
          />
          <path
            d="M110.569 40.9009H104.081V0H110.618V16.4683C111.306 15.3292 112.436 14.3634 114.009 13.5957C115.698 12.7926 117.549 12.3942 119.416 12.4317C123.471 12.4317 126.641 13.7443 128.927 16.3941C131.212 19.0438 132.343 22.4118 132.343 26.5227C132.343 30.7079 131.138 34.1254 128.755 36.8247C126.371 39.524 123.176 40.8365 119.195 40.8365C115.213 40.8365 112.338 39.425 110.569 36.5771V40.9009ZM123.52 32.803C124.921 31.2676 125.609 29.1874 125.609 26.5623C125.609 23.9373 124.921 21.8819 123.544 20.3712C122.168 18.8606 120.35 18.1177 118.089 18.1177C115.901 18.1177 114.107 18.8606 112.682 20.3712C111.257 21.8819 110.569 23.9373 110.569 26.5623C110.569 29.1874 111.281 31.218 112.682 32.7782C114.083 34.3384 115.901 35.1061 118.089 35.1061C120.325 35.1061 122.119 34.3384 123.52 32.803Z"
            fill="black"
          />
          <path
            d="M170.14 40.8762H142.173V35.2794L159.843 18.0434H141.878V12.3971H170.091V17.8304L152.2 35.215H170.14V40.8861V40.8762Z"
            fill="black"
          />
          <path
            d="M173.26 39.6905C172.836 39.2763 172.501 38.7798 172.276 38.2315C172.051 37.6832 171.94 37.0946 171.951 36.502C171.94 35.9058 172.05 35.3136 172.275 34.7614C172.501 34.2091 172.836 33.7084 173.26 33.2896C173.669 32.8562 174.164 32.5135 174.714 32.284C175.263 32.0544 175.855 31.943 176.451 31.9571C177.657 31.9583 178.813 32.4376 179.665 33.2896C180.518 34.1417 180.998 35.297 180.999 36.502C181.013 37.0972 180.901 37.6887 180.672 38.2381C180.442 38.7874 180.099 39.2823 179.665 39.6905C179.245 40.1132 178.744 40.4469 178.191 40.6718C177.639 40.8966 177.047 41.008 176.451 40.9993C175.858 41.01 175.269 40.8995 174.72 40.6744C174.172 40.4493 173.675 40.1145 173.26 39.6905Z"
            fill="#BFBFBF"
          />
        </svg>
      )

    case "search":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_106_23)">
            <path
              d="M12.021 2.05969C9.27512 -0.686237 4.80593 -0.686237 2.06 2.05969C-0.685325 4.80621 -0.685325 9.27481 2.06 12.0213C4.50532 14.466 8.31378 14.728 11.0579 12.819C11.1157 13.0922 11.2478 13.3529 11.4603 13.5654L15.4593 17.5644C16.042 18.1459 16.9837 18.1459 17.5635 17.5644C18.1456 16.9822 18.1456 16.0405 17.5635 15.4601L13.5645 11.46C13.3532 11.2493 13.0919 11.1165 12.8187 11.0588C14.7289 8.31406 14.467 4.5062 12.021 2.05969ZM10.7585 10.7588C8.70844 12.8089 5.37202 12.8089 3.32254 10.7588C1.27367 8.70872 1.27367 5.37289 3.32254 3.32282C5.37202 1.27335 8.70844 1.27335 10.7585 3.32282C12.8086 5.37289 12.8086 8.70872 10.7585 10.7588Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_106_23">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )

    case "profile":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.87173 8.67069C10.0629 8.67069 11.0943 8.24346 11.9372 7.40053C12.7798 6.55774 13.2072 5.52654 13.2072 4.33521C13.2072 3.14429 12.78 2.11295 11.9371 1.26988C11.0941 0.427231 10.0628 0 8.87173 0C7.6804 0 6.6492 0.427231 5.80641 1.27002C4.96362 2.11281 4.53625 3.14415 4.53625 4.33521C4.53625 5.52654 4.96362 6.55788 5.80641 7.40067C6.64948 8.24332 7.68082 8.67069 8.87173 8.67069ZM6.55238 2.01585C7.19907 1.36917 7.95767 1.05483 8.87173 1.05483C9.78566 1.05483 10.5444 1.36917 11.1912 2.01585C11.8379 2.66267 12.1524 3.42142 12.1524 4.33521C12.1524 5.24927 11.8379 6.00787 11.1912 6.6547C10.5444 7.30152 9.78566 7.61586 8.87173 7.61586C7.95795 7.61586 7.19934 7.30138 6.55238 6.6547C5.90556 6.00801 5.59108 5.24927 5.59108 4.33521C5.59108 3.42142 5.90556 2.66267 6.55238 2.01585Z"
            fill="black"
          />
          <path
            d="M16.4577 13.8412C16.4334 13.4904 16.3842 13.1078 16.3118 12.7038C16.2388 12.2968 16.1447 11.912 16.0321 11.5603C15.9156 11.1968 15.7576 10.8378 15.5619 10.4938C15.359 10.1367 15.1206 9.82581 14.8531 9.56996C14.5734 9.30231 14.2309 9.08711 13.8348 8.93015C13.4401 8.774 13.0027 8.6949 12.5349 8.6949C12.3511 8.6949 12.1734 8.77029 11.8302 8.99373C11.619 9.13147 11.372 9.29077 11.0962 9.46697C10.8604 9.6172 10.541 9.75797 10.1464 9.88541C9.76149 10.01 9.37065 10.0731 8.98476 10.0731C8.59914 10.0731 8.2083 10.01 7.82309 9.88541C7.42896 9.7581 7.10939 9.61734 6.87401 9.4671C6.60086 9.29256 6.35367 9.13326 6.1393 8.99359C5.79639 8.77016 5.61868 8.69476 5.43494 8.69476C4.96692 8.69476 4.52966 8.774 4.13512 8.93028C3.73933 9.08698 3.3967 9.30217 3.11668 9.5701C2.84917 9.82608 2.61076 10.1369 2.40807 10.4938C2.21265 10.8378 2.05444 11.1966 1.93799 11.5604C1.82552 11.9121 1.73145 12.2968 1.65839 12.7038C1.58588 13.1073 1.53685 13.49 1.51254 13.8416C1.48865 14.1853 1.47656 14.5431 1.47656 14.9045C1.47656 15.8441 1.77525 16.6048 2.36426 17.1658C2.94598 17.7194 3.71558 18.0001 4.65175 18.0001H13.3189C14.2548 18.0001 15.0244 17.7194 15.6062 17.1658C16.1954 16.6052 16.4941 15.8443 16.4941 14.9044C16.4939 14.5417 16.4817 14.1839 16.4577 13.8412ZM14.8789 16.4015C14.4945 16.7674 13.9842 16.9452 13.3187 16.9452H4.65175C3.98611 16.9452 3.4758 16.7674 3.09155 16.4017C2.71458 16.0428 2.53139 15.553 2.53139 14.9045C2.53139 14.5672 2.54251 14.2342 2.56476 13.9145C2.58646 13.6009 2.63081 13.2563 2.69659 12.8902C2.76155 12.5286 2.84422 12.1892 2.94255 11.882C3.0369 11.5875 3.16557 11.2958 3.32515 11.0148C3.47745 10.747 3.65268 10.5173 3.84604 10.3321C4.0269 10.159 4.25487 10.0172 4.52348 9.91095C4.77191 9.81262 5.0511 9.75879 5.35419 9.75069C5.39113 9.77033 5.45691 9.80782 5.56348 9.87731C5.78032 10.0186 6.03026 10.1798 6.30657 10.3563C6.61803 10.5549 7.0193 10.7342 7.49872 10.889C7.98885 11.0475 8.48873 11.128 8.9849 11.128C9.48107 11.128 9.98108 11.0475 10.4709 10.8891C10.9508 10.7341 11.3519 10.5549 11.6638 10.356C11.9465 10.1753 12.1895 10.0188 12.4063 9.87731C12.5129 9.80795 12.5787 9.77033 12.6156 9.75069C12.9188 9.75879 13.198 9.81262 13.4466 9.91095C13.7151 10.0172 13.943 10.1591 14.1239 10.3321C14.3172 10.5171 14.4925 10.7469 14.6448 11.0149C14.8045 11.2958 14.9333 11.5876 15.0275 11.8819C15.126 12.1895 15.2088 12.5287 15.2736 12.89C15.3393 13.2568 15.3837 13.6015 15.4054 13.9146V13.9149C15.4278 14.2334 15.4391 14.5663 15.4392 14.9045C15.4391 15.5531 15.2559 16.0428 14.8789 16.4015Z"
            fill="black"
          />
        </svg>
      )

    case "cart":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_106_0)">
            <path
              d="M17.8717 4.43517C17.7713 4.31982 17.6261 4.25391 17.4737 4.25391H4.10248L3.72191 1.32659C3.59573 0.557719 2.93912 0 2.16048 0H0.528351C0.23687 0 0.00100708 0.235863 0.00100708 0.527344C0.00100708 0.818824 0.23687 1.05469 0.528351 1.05469H2.16048C2.42004 1.05469 2.63889 1.24059 2.67854 1.48057L3.11473 4.83015C3.11627 4.84407 3.11782 4.85743 3.12039 4.87083L4.1035 12.3707C4.13014 12.5333 4.19279 12.6803 4.26409 12.8209C3.64689 13.0367 3.20019 13.6186 3.20019 14.3086C3.20019 15.181 3.90985 15.8836 4.78222 15.8836H5.4067C5.3476 16.0494 5.30957 16.2322 5.30957 16.418C5.30957 17.2903 6.01923 18 6.8916 18C7.76396 18 8.47363 17.2903 8.47363 16.418C8.47363 16.2322 8.43559 16.0494 8.37649 15.8836H11.77C11.7109 16.0494 11.6728 16.2322 11.6728 16.418C11.6728 17.2903 12.3825 18 13.2549 18C14.1272 18 14.8369 17.2903 14.8369 16.418C14.8369 16.2322 14.7989 16.0564 14.7398 15.8906H16.4189C16.7104 15.8906 16.9463 15.6548 16.9463 15.3633C16.9463 15.0718 16.7104 14.8359 16.4189 14.8359H4.78222C4.49127 14.8359 4.25488 14.5995 4.25488 14.3086C4.25488 14.0176 4.4913 13.7812 4.83014 13.7792L8.03431 13.4877L15.6552 12.7981C16.3721 12.7332 16.9551 12.192 17.0751 11.469L17.9958 4.85437C18.017 4.70296 17.9716 4.55052 17.8717 4.43517ZM5.71231 12.6395C5.43166 12.6704 5.18859 12.4716 5.14633 12.2162L4.51922 7.41797H6.40767L6.84322 12.5367L5.71231 12.6395ZM10.0908 12.2447L8.13131 12.4196H8.13117L8.10041 12.4225L7.89327 12.4413L7.46591 7.41797H10.0908V12.2447ZM13.2948 11.9535L11.1456 12.1489V7.41797H13.7291L13.2948 11.9535ZM16.0327 11.3093C15.9931 11.5457 15.7989 11.7259 15.56 11.7476L14.3635 11.8563L14.7884 7.41797H16.5724L16.0327 11.3093Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_106_0">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )

    case "arrow-left":
      return (
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path
            d="M4.88085 11.0047L13.111 2.77415C13.3376 2.54806 13.4623 2.24579 13.4623 1.92348C13.4623 1.60099 13.3376 1.29889 13.111 1.07246L12.3898 0.351642C12.1636 0.124846 11.8611 0 11.5388 0C11.2165 0 10.9144 0.124846 10.688 0.351642L0.888651 10.1508C0.661318 10.3779 0.53683 10.6814 0.537725 11.0041C0.53683 11.3282 0.661139 11.6314 0.888651 11.8587L10.6788 21.6484C10.9053 21.8752 11.2074 22 11.5299 22C11.8522 22 12.1543 21.8752 12.3809 21.6484L13.1019 20.9275C13.571 20.4584 13.571 19.6946 13.1019 19.2257L4.88085 11.0047Z"
            fill="black"
          />
        </svg>
      )

    case "arrow-right":
      return (
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path
            d="M13.1115 10.1416L3.3212 0.351461C3.09476 0.124845 2.79249 0 2.47018 0C2.14788 0 1.8456 0.124845 1.61917 0.351461L0.89818 1.07227C0.42903 1.54195 0.42903 2.30533 0.89818 2.7743L9.11932 10.9954L0.889058 19.2257C0.662621 19.4523 0.537598 19.7544 0.537598 20.0765C0.537598 20.399 0.662621 20.7011 0.889058 20.9279L1.61004 21.6485C1.83666 21.8752 2.13876 22 2.46106 22C2.78337 22 3.08564 21.8752 3.31208 21.6485L13.1115 11.8495C13.3385 11.6222 13.4631 11.3186 13.4624 10.996C13.4631 10.6721 13.3385 10.3687 13.1115 10.1416Z"
            fill="black"
          />
        </svg>
      )

    case "star-filled":
      return (
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z"
            fill="#F8475F"
          />
        </svg>
      )

    case "star-unfilled":
      return (
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3896 4.4595L7.29501 4.13318L5.69478 0.648972L4.09454 4.13845L0 4.4595L3.10935 6.94897L2.17541 10.649L5.69478 8.68581L9.21415 10.649L8.2859 6.94897L11.3896 4.4595ZM5.69479 7.7016L3.55355 8.89634L4.12303 6.64371L2.23236 5.12792L4.72667 4.92792L5.69479 2.80687L6.66859 4.93318L9.1629 5.13318L7.27224 6.64897L7.84172 8.9016L5.69479 7.7016Z"
            fill="#F8475F"
          />
        </svg>
      )
  }
}

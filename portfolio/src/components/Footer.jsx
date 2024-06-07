// import React from 'react'

function Footer() {
  return (
    <div className="w-full h-[294px] pl-[25px] pt-[22px] bg-stone-950 flex-col justify-start items-start gap-[31px] inline-flex">
      <div className="text-neutral-50 text-xl font-semibold font-Utara uppercase">
        logo
      </div>
      <div className="justify-center items-center gap-3 inline-flex">
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="cursor-pointer hover:border-solid   p-2.5 border-b border-dashed border-neutral-50 justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-[15px] font-semibold font-Utara uppercase">
              home
            </div>
          </div>
          <div className="cursor-pointer hover:border-solid   p-2.5 border-b border-dashed border-neutral-50 justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-[15px] font-semibold font-Utara uppercase">
              projects
            </div>
          </div>
          <div className="cursor-pointer hover:border-solid   p-2.5 border-b border-dashed border-neutral-50 justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-[15px] font-semibold font-Utara uppercase">
              about me
            </div>
          </div>
        </div>
        <div className=" border-l border-dashed border-neutral-50 flex-col justify-start items-start gap-2 inline-flex">
          <div className="px-[15px] py-[7px] text-neutral-50 bg-stone-950 rounded-[10px] justify-center items-center gap-[11px] inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                id="Vector"
                d="M8.99758 4.88213C6.44215 4.88213 4.3798 6.94452 4.3798 9.5C4.3798 12.0555 6.44215 14.1179 8.99758 14.1179C11.553 14.1179 13.6154 12.0555 13.6154 9.5C13.6154 6.94452 11.553 4.88213 8.99758 4.88213ZM8.99758 12.5013C7.345 12.5013 5.99636 11.1526 5.99636 9.5C5.99636 7.84738 7.345 6.49872 8.99758 6.49872C10.6502 6.49872 11.9988 7.84738 11.9988 9.5C11.9988 11.1526 10.6502 12.5013 8.99758 12.5013ZM13.8045 3.61678C13.2078 3.61678 12.726 4.0986 12.726 4.69525C12.726 5.29191 13.2078 5.77373 13.8045 5.77373C14.4011 5.77373 14.8829 5.29416 14.8829 4.69525C14.8831 4.55358 14.8554 4.41325 14.8012 4.28233C14.7471 4.1514 14.6677 4.03244 14.5675 3.93226C14.4673 3.83208 14.3483 3.75264 14.2174 3.69851C14.0865 3.64437 13.9462 3.6166 13.8045 3.61678ZM17.999 9.5C17.999 8.25716 18.0103 7.02558 17.9405 5.78499C17.8707 4.34402 17.5419 3.06515 16.4883 2.01144C15.4323 0.955477 14.1557 0.629006 12.7148 0.559209C11.472 0.489412 10.2404 0.50067 8.99983 0.50067C7.75702 0.50067 6.52546 0.489412 5.28489 0.559209C3.84395 0.629006 2.5651 0.957728 1.51141 2.01144C0.455469 3.0674 0.129004 4.34402 0.0592081 5.78499C-0.0105877 7.02783 0.000669689 8.25941 0.000669689 9.5C0.000669689 10.7406 -0.0105877 11.9744 0.0592081 13.215C0.129004 14.656 0.45772 15.9348 1.51141 16.9886C2.56736 18.0445 3.84395 18.371 5.28489 18.4408C6.52771 18.5106 7.75927 18.4993 8.99983 18.4993C10.2426 18.4993 11.4742 18.5106 12.7148 18.4408C14.1557 18.371 15.4346 18.0423 16.4883 16.9886C17.5442 15.9326 17.8707 14.656 17.9405 13.215C18.0125 11.9744 17.999 10.7428 17.999 9.5ZM16.0177 14.8091C15.8533 15.2189 15.6552 15.5251 15.3377 15.8403C15.0203 16.1577 14.7163 16.3559 14.3066 16.5202C13.1223 16.9908 10.3102 16.885 8.99758 16.885C7.68497 16.885 4.87062 16.9908 3.68634 16.5225C3.27657 16.3581 2.97037 16.16 2.65516 15.8425C2.33771 15.5251 2.13958 15.2211 1.97522 14.8113C1.50691 13.6248 1.61273 10.8126 1.61273 9.5C1.61273 8.18736 1.50691 5.37296 1.97522 4.18866C2.13958 3.77888 2.33771 3.47268 2.65516 3.15746C2.97262 2.84225 3.27657 2.64187 3.68634 2.47751C4.87062 2.00919 7.68497 2.11501 8.99758 2.11501C10.3102 2.11501 13.1245 2.00919 14.3088 2.47751C14.7186 2.64187 15.0248 2.84 15.34 3.15746C15.6575 3.47493 15.8556 3.77888 16.0199 4.18866C16.4883 5.37296 16.3824 8.18736 16.3824 9.5C16.3824 10.8126 16.4883 13.6248 16.0177 14.8091Z"
                fill="#FBFBFB"
              />
            </svg>
            <div className=" text-[15px] font-semibold font-Utara capitalize">
              instagram
            </div>
          </div>
          <div className="px-[15px] py-[7px] bg-stone-950 rounded-[10px] justify-center items-center gap-[11px] inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
            >
              <path
                id="Vector"
                d="M10.3579 6.39975L15.9314 0H13.4438L9.18971 4.88775L5.41571 0H0L6.31914 8.1825L0.380476 15H2.86895L7.48729 9.6975L11.5843 15H17L10.3579 6.39975ZM8.43119 8.61225L7.26143 7.098L2.72 1.22025H4.59L8.25552 5.958L9.42367 7.473L14.2954 13.7797H12.4254L8.43119 8.61225Z"
                fill="#FBFBFB"
              />
            </svg>
            <div className="text-neutral-50 text-[15px] font-semibold font-Utara capitalize">
              twitter
            </div>
          </div>
          <div className="px-[15px] py-[7px] bg-stone-950 rounded-[10px] justify-center items-center gap-[11px] inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <g
                id="teenyicons:linkedin-outline"
                clipPath="url(#clip0_191_317)"
              >
                <path
                  id="Vector"
                  d="M4.5 6V11M10.5 11V8.5C10.5 7.96957 10.2893 7.46086 9.91421 7.08579C9.53914 6.71071 9.03043 6.5 8.5 6.5C7.96957 6.5 7.46086 6.71071 7.08579 7.08579C6.71071 7.46086 6.5 7.96957 6.5 8.5V11V6M4 4.5H5M1.5 0.5H13.5C13.7652 0.5 14.0196 0.605357 14.2071 0.792893C14.3946 0.98043 14.5 1.23478 14.5 1.5V13.5C14.5 13.7652 14.3946 14.0196 14.2071 14.2071C14.0196 14.3946 13.7652 14.5 13.5 14.5H1.5C1.23478 14.5 0.98043 14.3946 0.792893 14.2071C0.605357 14.0196 0.5 13.7652 0.5 13.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5Z"
                  stroke="#FBFBFB"
                />
              </g>
              <defs>
                <clipPath id="clip0_191_317">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="text-neutral-50 text-[15px] font-semibold font-Utara capitalize">
              linkedin
            </div>
          </div>
          <div className="px-[15px] py-[7px] bg-stone-950 rounded-[10px] justify-center items-center gap-[11px] inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
            >
              <path
                id="Vector"
                d="M4.5 0.5C5.812 0.5 6.962 0.925 7.784 1.762C8.603 2.596 9 3.74 9 5C9 6.223 8.625 7.339 7.853 8.166C8.11367 8.31067 8.35633 8.48067 8.581 8.676C9.518 9.492 10 10.656 10 12C10 13.344 9.518 14.508 8.581 15.324C7.661 16.126 6.408 16.5 5.014 16.5H0V0.5H4.5ZM2 9.5V14.5H5.014C6.067 14.5 6.806 14.218 7.268 13.816C7.712 13.429 8 12.844 8 12C8 11.156 7.712 10.57 7.268 10.184C6.806 9.782 6.067 9.5 5.014 9.5H2ZM2 2.5V7.5H4.5C5.375 7.5 5.976 7.225 6.357 6.837C6.74 6.446 7 5.84 7 5C7 4.16 6.74 3.554 6.357 3.163C5.976 2.775 5.375 2.5 4.5 2.5H2ZM11.5 3H19.5V5H11.5V3ZM12.161 8.027C12.954 7.076 14.111 6.5 15.5 6.5C17.143 6.5 18.321 7.218 19.052 8.258C19.751 9.251 20 10.471 20 11.5V12.5H13.117C13.236 12.977 13.438 13.382 13.698 13.693C14.108 14.187 14.702 14.5 15.5 14.5C16.376 14.5 16.95 14.237 17.29 14.005C17.4536 13.8943 17.6016 13.7622 17.73 13.612L17.735 13.606L18.275 12.782L19.947 13.879L19.398 14.715V14.717L19.396 14.719L19.393 14.724L19.386 14.734L19.312 14.836C19.2529 14.9123 19.1902 14.9857 19.124 15.056C18.9111 15.2848 18.6722 15.4878 18.412 15.661C17.77 16.096 16.812 16.5 15.5 16.5C14.11 16.5 12.954 15.924 12.161 14.973C11.384 14.04 11 12.8 11 11.5C11 10.2 11.384 8.96 12.161 8.027ZM13.117 10.5H17.886C17.7988 10.1102 17.6394 9.74015 17.416 9.409C17.054 8.893 16.482 8.5 15.5 8.5C14.702 8.5 14.109 8.813 13.698 9.307C13.4169 9.65567 13.2186 10.0636 13.118 10.5"
                fill="#FBFBFB"
              />
            </svg>
            <div className="text-neutral-50 text-[15px] font-semibold font-Utara capitalize">
              behance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

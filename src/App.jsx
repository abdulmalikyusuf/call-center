import { useState } from 'react'

import Computer from "./assets/Computer.png"
import Person1 from "./assets/Person-1.png"

import HeroSection from "./assets/HeroSection.png"
import HowItWorks1 from "./assets/how-it-works-1.png"
import HowItWorks2 from "./assets/how-it-works-2.png"
import HowItWorks3 from "./assets/how-it-works-3.png"
import HowItWorks4 from "./assets/how-it-works-4.png"

const howItWorks = [
  {
    title: "Integrate",
    text: "Minergram X Your Website.<br/><br/>With Minergram integrated with your website, users are provided with the ability to access information without leaving your site. This enhances the user experience and reduces the need for customer support. You are the main contact point of information, meaning, users do not have access to the API directly, and guess what, No Third-Party Interference when you give access to your database",
    image: HowItWorks1
  },
  {
    title: "Request",
    text: "This process starts when your user requests for a picture to be mined, by uploading it on your platform. The request for mining the image is completed when the request is submitted successfully",
    image: HowItWorks2
  },
  {
    title: "Mining",
    text: "All the magic happens at this very instant!Every detail about the requested image is compiled into structured text by our AI Classification Algorithm after it has dissected the image's contents.",
    image: HowItWorks3
  },
  {
    title: "Deliver",
    text: "After mining, our API retrieves the information from the server about the requested image. We complete the API call by delivering the information gathered about the picture, and this happens in a matter of seconds.Now that you understand how Minergram works, you can see how quickly and easily we give results!",
    image: HowItWorks4
  },
]


const features = [
  {
    title: "Speed",
    text: "Analyse uploaded images and get the information you need within minutes",
    svg: <>
    <svg width="16" height="16" className="lg:hidden" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.30674 9.14561H8.25969V13.6962C8.25969 14.3661 9.09396 14.6821 9.53638 14.1765L14.3208 8.74111C14.7379 8.2671 14.4029 7.52763 13.7709 7.52763H11.818V2.97707C11.818 2.30712 10.9837 1.99111 10.5413 2.49673L5.75688 7.93212C5.34607 8.40614 5.68104 9.14561 6.30674 9.14561Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M5.78852 3.75467H1.36437C1.10524 3.75467 0.89035 3.53979 0.89035 3.28066C0.89035 3.02153 1.10524 2.80664 1.36437 2.80664H5.78852C6.04765 2.80664 6.26254 3.02153 6.26254 3.28066C6.26254 3.53979 6.04765 3.75467 5.78852 3.75467Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M5.1565 13.8672H1.36437C1.10524 13.8672 0.89035 13.6523 0.89035 13.3932C0.89035 13.1341 1.10524 12.9192 1.36437 12.9192H5.1565C5.41563 12.9192 5.63052 13.1341 5.63052 13.3932C5.63052 13.6523 5.41563 13.8672 5.1565 13.8672Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M3.26043 8.81107H1.36437C1.10524 8.81107 0.89035 8.59618 0.89035 8.33705C0.89035 8.07792 1.10524 7.86304 1.36437 7.86304H3.26043C3.51956 7.86304 3.73445 8.07792 3.73445 8.33705C3.73445 8.59618 3.51956 8.81107 3.26043 8.81107Z" fill="#FFFAEB"/>
            </svg>
            <svg width="37" height="38" className="hidden lg:block" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3782 21.2879H19.1304V32.361C19.1304 33.9912 21.1605 34.7601 22.237 33.5298L33.8791 20.3037C34.8941 19.1502 34.079 17.3509 32.5411 17.3509H27.7889V6.27783C27.7889 4.64763 25.7589 3.87867 24.6823 5.10901L13.0402 18.3351C12.0406 19.4886 12.8557 21.2879 14.3782 21.2879Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M13.1173 8.17041H2.35181C1.72126 8.17041 1.19836 7.64751 1.19836 7.01697C1.19836 6.38642 1.72126 5.86353 2.35181 5.86353H13.1173C13.7478 5.86353 14.2707 6.38642 14.2707 7.01697C14.2707 7.64751 13.7478 8.17041 13.1173 8.17041Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M11.5793 32.7771H2.35181C1.72126 32.7771 1.19836 32.2542 1.19836 31.6237C1.19836 30.9931 1.72126 30.4702 2.35181 30.4702H11.5793C12.2099 30.4702 12.7328 30.9931 12.7328 31.6237C12.7328 32.2542 12.2099 32.7771 11.5793 32.7771Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M6.96557 20.4736H2.35181C1.72126 20.4736 1.19836 19.9507 1.19836 19.3202C1.19836 18.6896 1.72126 18.1667 2.35181 18.1667H6.96557C7.59612 18.1667 8.11901 18.6896 8.11901 19.3202C8.11901 19.9507 7.59612 20.4736 6.96557 20.4736Z" fill="#FFFAEB"/>
            </svg>
    </>
  },
  {
    title: "Simple to Setup and Use",
    text: "Analyse uploaded images and get the information you need within minutes",
    svg: <>
    <svg width="16" height="16" className="lg:hidden" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6485 1.67993H5.3521C3.05154 1.67993 1.68005 3.05142 1.68005 5.35198V10.642C1.68005 12.9489 3.05154 14.3204 5.3521 14.3204H10.6421C12.9427 14.3204 14.3142 12.9489 14.3142 10.6483V5.35198C14.3205 3.05142 12.949 1.67993 10.6485 1.67993ZM5.23834 11.8871C5.23834 12.1462 5.02345 12.3611 4.76432 12.3611C4.50519 12.3611 4.29031 12.1462 4.29031 11.8871V10.5788C4.29031 10.3197 4.50519 10.1048 4.76432 10.1048C5.02345 10.1048 5.23834 10.3197 5.23834 10.5788V11.8871ZM8.4743 11.8871C8.4743 12.1462 8.25941 12.3611 8.00028 12.3611C7.74115 12.3611 7.52626 12.1462 7.52626 11.8871V9.2642C7.52626 9.00507 7.74115 8.79018 8.00028 8.79018C8.25941 8.79018 8.4743 9.00507 8.4743 9.2642V11.8871ZM11.7102 11.8871C11.7102 12.1462 11.4954 12.3611 11.2362 12.3611C10.9771 12.3611 10.7622 12.1462 10.7622 11.8871V7.95591C10.7622 7.69679 10.9771 7.4819 11.2362 7.4819C11.4954 7.4819 11.7102 7.69679 11.7102 7.95591V11.8871ZM11.7102 5.95872C11.7102 6.21785 11.4954 6.43274 11.2362 6.43274C10.9771 6.43274 10.7622 6.21785 10.7622 5.95872V5.34566C9.15056 7.00156 7.13441 8.1708 4.87809 8.7333C4.84017 8.74594 4.80224 8.74594 4.76432 8.74594C4.54944 8.74594 4.35983 8.60058 4.30295 8.38569C4.23974 8.13288 4.39143 7.87375 4.65056 7.81055C6.78047 7.27965 8.67654 6.16097 10.1808 4.58091H9.39073C9.1316 4.58091 8.91671 4.36603 8.91671 4.1069C8.91671 3.84777 9.1316 3.63288 9.39073 3.63288H11.2426C11.2678 3.63288 11.2868 3.64552 11.3121 3.64552C11.3437 3.65184 11.3753 3.65184 11.4069 3.66448C11.4385 3.67712 11.4638 3.69608 11.4954 3.71504C11.5143 3.72768 11.5333 3.734 11.5522 3.74664C11.5586 3.75297 11.5586 3.75929 11.5649 3.75929C11.5902 3.78457 11.6091 3.80985 11.6281 3.83513C11.647 3.86041 11.666 3.87937 11.6723 3.90465C11.685 3.92993 11.685 3.95521 11.6913 3.98681C11.6976 4.01841 11.7102 4.05002 11.7102 4.08794C11.7102 4.09426 11.7166 4.10058 11.7166 4.1069V5.95872H11.7102Z" fill="#FFFAEB"/>
            </svg>
            <svg width="37" height="37" className="hidden lg:block" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.9438 3.12085H12.0561C6.45802 3.12085 3.12073 6.45814 3.12073 12.0562V24.9286C3.12073 30.542 6.45802 33.8793 12.0561 33.8793H24.9285C30.5265 33.8793 33.8638 30.542 33.8638 24.944V12.0562C33.8792 6.45814 30.5419 3.12085 24.9438 3.12085ZM11.7792 27.9583C11.7792 28.5888 11.2563 29.1117 10.6258 29.1117C9.99524 29.1117 9.47234 28.5888 9.47234 27.9583V24.7748C9.47234 24.1442 9.99524 23.6213 10.6258 23.6213C11.2563 23.6213 11.7792 24.1442 11.7792 24.7748V27.9583ZM19.6534 27.9583C19.6534 28.5888 19.1305 29.1117 18.4999 29.1117C17.8694 29.1117 17.3465 28.5888 17.3465 27.9583V21.5759C17.3465 20.9454 17.8694 20.4225 18.4999 20.4225C19.1305 20.4225 19.6534 20.9454 19.6534 21.5759V27.9583ZM27.5275 27.9583C27.5275 28.5888 27.0046 29.1117 26.3741 29.1117C25.7436 29.1117 25.2207 28.5888 25.2207 27.9583V18.3924C25.2207 17.7619 25.7436 17.239 26.3741 17.239C27.0046 17.239 27.5275 17.7619 27.5275 18.3924V27.9583ZM27.5275 13.5326C27.5275 14.1631 27.0046 14.686 26.3741 14.686C25.7436 14.686 25.2207 14.1631 25.2207 13.5326V12.0408C21.299 16.0701 16.393 18.9153 10.9026 20.284C10.8103 20.3148 10.7181 20.3148 10.6258 20.3148C10.1029 20.3148 9.64151 19.9611 9.5031 19.4382C9.34931 18.823 9.71841 18.1925 10.349 18.0387C15.5318 16.7468 20.1455 14.0247 23.8058 10.1799H21.8834C21.2528 10.1799 20.7299 9.65701 20.7299 9.02647C20.7299 8.39592 21.2528 7.87303 21.8834 7.87303H26.3895C26.451 7.87303 26.4971 7.90378 26.5586 7.90378C26.6355 7.91916 26.7124 7.91916 26.7893 7.94992C26.8662 7.98068 26.9277 8.02682 27.0046 8.07296C27.0508 8.10371 27.0969 8.11909 27.1431 8.14985C27.1584 8.16523 27.1584 8.18061 27.1738 8.18061C27.2353 8.24213 27.2815 8.30364 27.3276 8.36516C27.3737 8.42668 27.4199 8.47282 27.4353 8.53433C27.466 8.59585 27.466 8.65737 27.4814 8.73426C27.4968 8.81116 27.5275 8.88805 27.5275 8.98033C27.5275 8.99571 27.5429 9.01109 27.5429 9.02647V13.5326H27.5275Z" fill="#FFFAEB"/>
            </svg>
    </>
  },
  {
    title: "Accuracy",
    text: "Minergram guarantees accurate results and data from image processing up to 99.9%",
    svg: <>
    <svg width="16" height="16" className="lg:hidden" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.173 14.1974L8.97359 13.0977C8.36053 12.7943 7.64634 12.7943 7.03328 13.0977L4.83384 14.1974C2.9441 15.1391 0.953225 13.1103 1.93918 11.2459L2.45744 10.2726C2.52696 10.1398 2.64073 10.0324 2.77977 9.9692L10.7685 6.36667C11.0972 6.2213 11.4827 6.35403 11.647 6.67004L14.055 11.2459C15.041 13.1103 13.0565 15.1391 11.173 14.1974Z" fill="#FFFAEB"/>
              <path d="M10.2756 5.60188L5.04243 7.95932C4.45465 8.22477 3.86055 7.59275 4.16392 7.02393L6.08527 3.37716C6.90058 1.82871 9.11266 1.82871 9.92797 3.37716L10.6042 4.66649C10.7812 5.0141 10.6295 5.44388 10.2756 5.60188Z" fill="#FFFAEB"/>
            </svg>
            <svg width="37" height="38" className="hidden lg:block" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.2204 33.1469L20.8684 30.4709C19.3766 29.7327 17.6388 29.7327 16.147 30.4709L10.795 33.1469C6.19662 35.4384 1.35216 30.5017 3.75132 25.9648L5.01242 23.5964C5.18159 23.2735 5.45841 23.012 5.79676 22.8582L25.2361 14.0921C26.0358 13.7383 26.9739 14.0613 27.3738 14.8303L33.2333 25.9648C35.6324 30.5017 30.8034 35.4384 26.2204 33.1469Z" fill="#FFFAEB"/>
              <path d="M24.0365 12.2311L11.3025 17.9676C9.87225 18.6135 8.4266 17.0756 9.16481 15.6914L13.8401 6.81763C15.824 3.04972 21.2067 3.04972 23.1906 6.81763L24.8362 9.95499C25.2668 10.8008 24.8977 11.8466 24.0365 12.2311Z" fill="#FFFAEB"/>
            </svg>
    </>
  },
  {
    title: "Optimal Customer Support",
    text: "Get 24 hour support from our team who are always ready to help",
    svg: <>
    <svg width="16" height="16" className="lg:hidden" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4954 5.3267C11.4512 5.32038 11.4069 5.32038 11.3627 5.3267C10.383 5.2951 9.60565 4.49243 9.60565 3.50648C9.60565 2.50156 10.421 1.67993 11.4322 1.67993C12.4371 1.67993 13.2587 2.49524 13.2587 3.50648C13.2524 4.49243 12.475 5.2951 11.4954 5.3267Z" fill="#FFFAEB"/>
              <path d="M13.5558 9.70655C12.8479 10.1806 11.8556 10.3575 10.9392 10.2374C11.1794 9.71919 11.3058 9.14405 11.3121 8.5373C11.3121 7.90528 11.173 7.30486 10.9076 6.78028C11.843 6.65388 12.8353 6.83084 13.5494 7.30486C14.548 7.96216 14.548 9.04292 13.5558 9.70655Z" fill="#FFFAEB"/>
              <path d="M4.48627 5.3267C4.53051 5.32038 4.57475 5.32038 4.61899 5.3267C5.59863 5.2951 6.37602 4.49243 6.37602 3.50648C6.37602 2.49524 5.56071 1.67993 4.54947 1.67993C3.54456 1.67993 2.72925 2.49524 2.72925 3.50648C2.72925 4.49243 3.50664 5.2951 4.48627 5.3267Z" fill="#FFFAEB"/>
              <path d="M4.55574 8.53718C4.55574 9.15024 4.68847 9.7317 4.92864 10.2563C4.03748 10.3511 3.10841 10.1615 2.42583 9.71274C1.42723 9.04912 1.42723 7.96836 2.42583 7.30474C3.10209 6.84968 4.05644 6.66639 4.95392 6.76752C4.69479 7.29842 4.55574 7.89884 4.55574 8.53718Z" fill="#FFFAEB"/>
              <path d="M8.07614 10.446C8.02558 10.4397 7.9687 10.4397 7.91182 10.446C6.7489 10.4081 5.81982 9.45372 5.81982 8.27816C5.82614 7.07732 6.79314 6.104 8.0003 6.104C9.20114 6.104 10.1745 7.07732 10.1745 8.27816C10.1681 9.45372 9.24539 10.4081 8.07614 10.446Z" fill="#FFFAEB"/>
              <path d="M6.02204 11.7543C5.06769 12.3927 5.06769 13.4418 6.02204 14.0739C7.10912 14.8007 8.89142 14.8007 9.9785 14.0739C10.9329 13.4355 10.9329 12.3864 9.9785 11.7543C8.89774 11.0275 7.11544 11.0275 6.02204 11.7543Z" fill="#FFFAEB"/>
            </svg>
            <svg width="37" height="37" className="hidden lg:block" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.0047 11.9947C26.897 11.9793 26.7894 11.9793 26.6817 11.9947C24.298 11.9178 22.4063 9.9646 22.4063 7.56544C22.4063 5.12015 24.3902 3.12085 26.8509 3.12085C29.2962 3.12085 31.2955 5.10477 31.2955 7.56544C31.2801 9.9646 29.3885 11.9178 27.0047 11.9947Z" fill="#FFFAEB"/>
              <path d="M32.0183 22.6524C30.2958 23.8058 27.8813 24.2364 25.6513 23.9442C26.2357 22.6831 26.5433 21.2836 26.5587 19.8072C26.5587 18.2693 26.2203 16.8083 25.5744 15.5318C27.8505 15.2242 30.2651 15.6548 32.0029 16.8083C34.4328 18.4077 34.4328 21.0376 32.0183 22.6524Z" fill="#FFFAEB"/>
              <path d="M9.94913 11.9947C10.0568 11.9793 10.1644 11.9793 10.2721 11.9947C12.6559 11.9178 14.5475 9.9646 14.5475 7.56544C14.5475 5.10477 12.5636 3.12085 10.1029 3.12085C7.65762 3.12085 5.67371 5.10477 5.67371 7.56544C5.67371 9.9646 7.56535 11.9178 9.94913 11.9947Z" fill="#FFFAEB"/>
              <path d="M10.1183 19.8073C10.1183 21.2991 10.4413 22.7139 11.0257 23.9904C8.8572 24.2211 6.59646 23.7597 4.9355 22.6678C2.50559 21.053 2.50559 18.4231 4.9355 16.8083C6.58108 15.701 8.90334 15.255 11.0872 15.5011C10.4566 16.7929 10.1183 18.254 10.1183 19.8073Z" fill="#FFFAEB"/>
              <path d="M18.6845 24.4517C18.5615 24.4364 18.4231 24.4364 18.2847 24.4517C15.4549 24.3595 13.1942 22.0372 13.1942 19.1767C13.2095 16.2546 15.5626 13.8862 18.5 13.8862C21.422 13.8862 23.7904 16.2546 23.7904 19.1767C23.775 22.0372 21.5297 24.3595 18.6845 24.4517Z" fill="#FFFAEB"/>
              <path d="M13.6863 27.6353C11.364 29.1886 11.364 31.7415 13.6863 33.2795C16.3315 35.0481 20.6684 35.0481 23.3137 33.2795C25.6359 31.7262 25.6359 29.1732 23.3137 27.6353C20.6838 25.8667 16.3469 25.8667 13.6863 27.6353Z" fill="#FFFAEB"/>
            </svg>
    </>
  },
]

function App1() {
  const [count, setCount] = useState(0)

  return (
    <main className="">
      <section className="flex flex-col md:flex-row items-center gap-y-[18px] px-[22px] md:px-20">
        <div className="md:max-w-[399px] lg:max-w-[487px]">
          <h4 className="font-medium text-2xl lg:text-[35px] lg:leading-[56px] font-Axiforma text-[#061D33]">Why Should you Choose to use Minergram API?</h4>
          <p className="mt-[18px] md:mt-5 lg:mt-[25px] text-xs leading-[18px] lg:text-lg lg:leading-7 text-[#08253F]">Minergram is a game-changing and very accurate image recognition API that makes life easier by digitizing the many laborious data gathering, processing, and increasing production processes while also improving the quality of our daily lives. Tozilla helps you gain valuable insight into your operations that enables true business transformation and is widely used in industries.</p>
        </div>
        <div>
          <img src={Computer} alt="Image of computer and a woman" className="object-cover"/>
        </div>
      </section>

      <section className="gap-x-10 gap-y-6 flex flex-wrap justify-center lg:justify-start mx-[114px] md:mx-[196px] lg:mx-[130px] mt-[18px] md:mt-[58px] mb-11 md:mb-[74px] lg:my-[120px]">
      {/* flex md:flex-wrap lg:flex-nowrap md:space-y-6 lg:space-y-0 space-y-0 space-x-10 */}
      {/* grid grid-cols-2  */}
      {features.map(feature => (
        <div className="pl-4 pr-5 py-6 features-card h-[246px]h">
          <div className="flex items-center justify-center w-[30px] lg:w-[73px] h-[30px] lg:h-[73px] bg-[#F79009] rounded-full">
            {feature.svg}
          </div>
          <div className="mt-4">
            <h6 className="font-medium lg:font-semibold text-sm lg:text-xl lg:leading-[33px] text-[#FF842B] font-Axiforma">{feature.title}</h6>
            <p className="mt-1 text-xs leading-[18px] lg:text-sm text-[#324F6A] font-Axiforma">{feature.text}</p>
          </div>
        </div>
      ))}
        {/* <div className="pl-4 pr-5 py-6 features-card h-[246px]h">
          <div className="flex items-center justify-center w-[30px] lg:w-[73px] h-[30px] lg:h-[73px] bg-[#F79009] rounded-full">
            <svg width="16" height="16" className="lg:hidden" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.30674 9.14561H8.25969V13.6962C8.25969 14.3661 9.09396 14.6821 9.53638 14.1765L14.3208 8.74111C14.7379 8.2671 14.4029 7.52763 13.7709 7.52763H11.818V2.97707C11.818 2.30712 10.9837 1.99111 10.5413 2.49673L5.75688 7.93212C5.34607 8.40614 5.68104 9.14561 6.30674 9.14561Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M5.78852 3.75467H1.36437C1.10524 3.75467 0.89035 3.53979 0.89035 3.28066C0.89035 3.02153 1.10524 2.80664 1.36437 2.80664H5.78852C6.04765 2.80664 6.26254 3.02153 6.26254 3.28066C6.26254 3.53979 6.04765 3.75467 5.78852 3.75467Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M5.1565 13.8672H1.36437C1.10524 13.8672 0.89035 13.6523 0.89035 13.3932C0.89035 13.1341 1.10524 12.9192 1.36437 12.9192H5.1565C5.41563 12.9192 5.63052 13.1341 5.63052 13.3932C5.63052 13.6523 5.41563 13.8672 5.1565 13.8672Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M3.26043 8.81107H1.36437C1.10524 8.81107 0.89035 8.59618 0.89035 8.33705C0.89035 8.07792 1.10524 7.86304 1.36437 7.86304H3.26043C3.51956 7.86304 3.73445 8.07792 3.73445 8.33705C3.73445 8.59618 3.51956 8.81107 3.26043 8.81107Z" fill="#FFFAEB"/>
            </svg>
            <svg width="37" height="38" className="hidden lg:block" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3782 21.2879H19.1304V32.361C19.1304 33.9912 21.1605 34.7601 22.237 33.5298L33.8791 20.3037C34.8941 19.1502 34.079 17.3509 32.5411 17.3509H27.7889V6.27783C27.7889 4.64763 25.7589 3.87867 24.6823 5.10901L13.0402 18.3351C12.0406 19.4886 12.8557 21.2879 14.3782 21.2879Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M13.1173 8.17041H2.35181C1.72126 8.17041 1.19836 7.64751 1.19836 7.01697C1.19836 6.38642 1.72126 5.86353 2.35181 5.86353H13.1173C13.7478 5.86353 14.2707 6.38642 14.2707 7.01697C14.2707 7.64751 13.7478 8.17041 13.1173 8.17041Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M11.5793 32.7771H2.35181C1.72126 32.7771 1.19836 32.2542 1.19836 31.6237C1.19836 30.9931 1.72126 30.4702 2.35181 30.4702H11.5793C12.2099 30.4702 12.7328 30.9931 12.7328 31.6237C12.7328 32.2542 12.2099 32.7771 11.5793 32.7771Z" fill="#FFFAEB"/>
              <path opacity="0.4" d="M6.96557 20.4736H2.35181C1.72126 20.4736 1.19836 19.9507 1.19836 19.3202C1.19836 18.6896 1.72126 18.1667 2.35181 18.1667H6.96557C7.59612 18.1667 8.11901 18.6896 8.11901 19.3202C8.11901 19.9507 7.59612 20.4736 6.96557 20.4736Z" fill="#FFFAEB"/>
            </svg>
          </div>
          <div className="mt-4">
            <h6 className="font-medium lg:font-semibold text-sm lg:text-xl lg:leading-[33px] text-[#FF842B] font-Axiforma">#1 in Speed</h6>
            <p className="mt-1 text-xs leading-[18px] lg:text-sm text-[#324F6A] font-Axiforma">Our API provides you the information you need at fast rate</p>
          </div>
        </div>
        <div className="pl-4 pr-5 py-6 features-card h-[246px]h">
          <div className="flex items-center justify-center w-[30px] lg:w-[73px] h-[30px] lg:h-[73px] bg-[#F79009] rounded-full">
            <svg width="16" height="16" className="lg:hidden" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6485 1.67993H5.3521C3.05154 1.67993 1.68005 3.05142 1.68005 5.35198V10.642C1.68005 12.9489 3.05154 14.3204 5.3521 14.3204H10.6421C12.9427 14.3204 14.3142 12.9489 14.3142 10.6483V5.35198C14.3205 3.05142 12.949 1.67993 10.6485 1.67993ZM5.23834 11.8871C5.23834 12.1462 5.02345 12.3611 4.76432 12.3611C4.50519 12.3611 4.29031 12.1462 4.29031 11.8871V10.5788C4.29031 10.3197 4.50519 10.1048 4.76432 10.1048C5.02345 10.1048 5.23834 10.3197 5.23834 10.5788V11.8871ZM8.4743 11.8871C8.4743 12.1462 8.25941 12.3611 8.00028 12.3611C7.74115 12.3611 7.52626 12.1462 7.52626 11.8871V9.2642C7.52626 9.00507 7.74115 8.79018 8.00028 8.79018C8.25941 8.79018 8.4743 9.00507 8.4743 9.2642V11.8871ZM11.7102 11.8871C11.7102 12.1462 11.4954 12.3611 11.2362 12.3611C10.9771 12.3611 10.7622 12.1462 10.7622 11.8871V7.95591C10.7622 7.69679 10.9771 7.4819 11.2362 7.4819C11.4954 7.4819 11.7102 7.69679 11.7102 7.95591V11.8871ZM11.7102 5.95872C11.7102 6.21785 11.4954 6.43274 11.2362 6.43274C10.9771 6.43274 10.7622 6.21785 10.7622 5.95872V5.34566C9.15056 7.00156 7.13441 8.1708 4.87809 8.7333C4.84017 8.74594 4.80224 8.74594 4.76432 8.74594C4.54944 8.74594 4.35983 8.60058 4.30295 8.38569C4.23974 8.13288 4.39143 7.87375 4.65056 7.81055C6.78047 7.27965 8.67654 6.16097 10.1808 4.58091H9.39073C9.1316 4.58091 8.91671 4.36603 8.91671 4.1069C8.91671 3.84777 9.1316 3.63288 9.39073 3.63288H11.2426C11.2678 3.63288 11.2868 3.64552 11.3121 3.64552C11.3437 3.65184 11.3753 3.65184 11.4069 3.66448C11.4385 3.67712 11.4638 3.69608 11.4954 3.71504C11.5143 3.72768 11.5333 3.734 11.5522 3.74664C11.5586 3.75297 11.5586 3.75929 11.5649 3.75929C11.5902 3.78457 11.6091 3.80985 11.6281 3.83513C11.647 3.86041 11.666 3.87937 11.6723 3.90465C11.685 3.92993 11.685 3.95521 11.6913 3.98681C11.6976 4.01841 11.7102 4.05002 11.7102 4.08794C11.7102 4.09426 11.7166 4.10058 11.7166 4.1069V5.95872H11.7102Z" fill="#FFFAEB"/>
            </svg>
            <svg width="37" height="37" className="hidden lg:block" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.9438 3.12085H12.0561C6.45802 3.12085 3.12073 6.45814 3.12073 12.0562V24.9286C3.12073 30.542 6.45802 33.8793 12.0561 33.8793H24.9285C30.5265 33.8793 33.8638 30.542 33.8638 24.944V12.0562C33.8792 6.45814 30.5419 3.12085 24.9438 3.12085ZM11.7792 27.9583C11.7792 28.5888 11.2563 29.1117 10.6258 29.1117C9.99524 29.1117 9.47234 28.5888 9.47234 27.9583V24.7748C9.47234 24.1442 9.99524 23.6213 10.6258 23.6213C11.2563 23.6213 11.7792 24.1442 11.7792 24.7748V27.9583ZM19.6534 27.9583C19.6534 28.5888 19.1305 29.1117 18.4999 29.1117C17.8694 29.1117 17.3465 28.5888 17.3465 27.9583V21.5759C17.3465 20.9454 17.8694 20.4225 18.4999 20.4225C19.1305 20.4225 19.6534 20.9454 19.6534 21.5759V27.9583ZM27.5275 27.9583C27.5275 28.5888 27.0046 29.1117 26.3741 29.1117C25.7436 29.1117 25.2207 28.5888 25.2207 27.9583V18.3924C25.2207 17.7619 25.7436 17.239 26.3741 17.239C27.0046 17.239 27.5275 17.7619 27.5275 18.3924V27.9583ZM27.5275 13.5326C27.5275 14.1631 27.0046 14.686 26.3741 14.686C25.7436 14.686 25.2207 14.1631 25.2207 13.5326V12.0408C21.299 16.0701 16.393 18.9153 10.9026 20.284C10.8103 20.3148 10.7181 20.3148 10.6258 20.3148C10.1029 20.3148 9.64151 19.9611 9.5031 19.4382C9.34931 18.823 9.71841 18.1925 10.349 18.0387C15.5318 16.7468 20.1455 14.0247 23.8058 10.1799H21.8834C21.2528 10.1799 20.7299 9.65701 20.7299 9.02647C20.7299 8.39592 21.2528 7.87303 21.8834 7.87303H26.3895C26.451 7.87303 26.4971 7.90378 26.5586 7.90378C26.6355 7.91916 26.7124 7.91916 26.7893 7.94992C26.8662 7.98068 26.9277 8.02682 27.0046 8.07296C27.0508 8.10371 27.0969 8.11909 27.1431 8.14985C27.1584 8.16523 27.1584 8.18061 27.1738 8.18061C27.2353 8.24213 27.2815 8.30364 27.3276 8.36516C27.3737 8.42668 27.4199 8.47282 27.4353 8.53433C27.466 8.59585 27.466 8.65737 27.4814 8.73426C27.4968 8.81116 27.5275 8.88805 27.5275 8.98033C27.5275 8.99571 27.5429 9.01109 27.5429 9.02647V13.5326H27.5275Z" fill="#FFFAEB"/>
            </svg>
          </div>
          <div className="mt-4">
            <h6 className="font-medium lg:font-semibold text-sm lg:text-xl lg:leading-[33px] text-[#FF842B] font-Axiforma">#1 in Accuracy</h6>
            <p className="mt-1 text-xs leading-[18px] lg:text-sm text-[#324F6A] font-Axiforma">Our API at Torzilla guarantees you accurate data based on an image</p>
          </div>
        </div>
        <div className="pl-4 pr-5 py-6 features-card h-[246px]h">
          <div className="flex items-center justify-center w-[30px] lg:w-[73px] h-[30px] lg:h-[73px] bg-[#F79009] rounded-full">
            <svg width="16" height="16" className="lg:hidden" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.173 14.1974L8.97359 13.0977C8.36053 12.7943 7.64634 12.7943 7.03328 13.0977L4.83384 14.1974C2.9441 15.1391 0.953225 13.1103 1.93918 11.2459L2.45744 10.2726C2.52696 10.1398 2.64073 10.0324 2.77977 9.9692L10.7685 6.36667C11.0972 6.2213 11.4827 6.35403 11.647 6.67004L14.055 11.2459C15.041 13.1103 13.0565 15.1391 11.173 14.1974Z" fill="#FFFAEB"/>
              <path d="M10.2756 5.60188L5.04243 7.95932C4.45465 8.22477 3.86055 7.59275 4.16392 7.02393L6.08527 3.37716C6.90058 1.82871 9.11266 1.82871 9.92797 3.37716L10.6042 4.66649C10.7812 5.0141 10.6295 5.44388 10.2756 5.60188Z" fill="#FFFAEB"/>
            </svg>
            <svg width="37" height="38" className="hidden lg:block" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.2204 33.1469L20.8684 30.4709C19.3766 29.7327 17.6388 29.7327 16.147 30.4709L10.795 33.1469C6.19662 35.4384 1.35216 30.5017 3.75132 25.9648L5.01242 23.5964C5.18159 23.2735 5.45841 23.012 5.79676 22.8582L25.2361 14.0921C26.0358 13.7383 26.9739 14.0613 27.3738 14.8303L33.2333 25.9648C35.6324 30.5017 30.8034 35.4384 26.2204 33.1469Z" fill="#FFFAEB"/>
              <path d="M24.0365 12.2311L11.3025 17.9676C9.87225 18.6135 8.4266 17.0756 9.16481 15.6914L13.8401 6.81763C15.824 3.04972 21.2067 3.04972 23.1906 6.81763L24.8362 9.95499C25.2668 10.8008 24.8977 11.8466 24.0365 12.2311Z" fill="#FFFAEB"/>
            </svg>
          </div>
          <div className="mt-4">
            <h6 className="font-medium lg:font-semibold text-sm lg:text-xl lg:leading-[33px] text-[#FF842B] font-Axiforma">#1 in Storage</h6>
            <p className="mt-1 text-xs leading-[18px] lg:text-sm text-[#324F6A] font-Axiforma">Our API provides you the information you need at fast rate</p>
          </div>
        </div>
        <div className="pl-4 pr-5 py-6 features-card h-[246px]h">
          <div className="flex items-center justify-center w-[30px] lg:w-[73px] h-[30px] lg:h-[73px] bg-[#F79009] rounded-full">
            <svg width="16" height="16" className="lg:hidden" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4954 5.3267C11.4512 5.32038 11.4069 5.32038 11.3627 5.3267C10.383 5.2951 9.60565 4.49243 9.60565 3.50648C9.60565 2.50156 10.421 1.67993 11.4322 1.67993C12.4371 1.67993 13.2587 2.49524 13.2587 3.50648C13.2524 4.49243 12.475 5.2951 11.4954 5.3267Z" fill="#FFFAEB"/>
              <path d="M13.5558 9.70655C12.8479 10.1806 11.8556 10.3575 10.9392 10.2374C11.1794 9.71919 11.3058 9.14405 11.3121 8.5373C11.3121 7.90528 11.173 7.30486 10.9076 6.78028C11.843 6.65388 12.8353 6.83084 13.5494 7.30486C14.548 7.96216 14.548 9.04292 13.5558 9.70655Z" fill="#FFFAEB"/>
              <path d="M4.48627 5.3267C4.53051 5.32038 4.57475 5.32038 4.61899 5.3267C5.59863 5.2951 6.37602 4.49243 6.37602 3.50648C6.37602 2.49524 5.56071 1.67993 4.54947 1.67993C3.54456 1.67993 2.72925 2.49524 2.72925 3.50648C2.72925 4.49243 3.50664 5.2951 4.48627 5.3267Z" fill="#FFFAEB"/>
              <path d="M4.55574 8.53718C4.55574 9.15024 4.68847 9.7317 4.92864 10.2563C4.03748 10.3511 3.10841 10.1615 2.42583 9.71274C1.42723 9.04912 1.42723 7.96836 2.42583 7.30474C3.10209 6.84968 4.05644 6.66639 4.95392 6.76752C4.69479 7.29842 4.55574 7.89884 4.55574 8.53718Z" fill="#FFFAEB"/>
              <path d="M8.07614 10.446C8.02558 10.4397 7.9687 10.4397 7.91182 10.446C6.7489 10.4081 5.81982 9.45372 5.81982 8.27816C5.82614 7.07732 6.79314 6.104 8.0003 6.104C9.20114 6.104 10.1745 7.07732 10.1745 8.27816C10.1681 9.45372 9.24539 10.4081 8.07614 10.446Z" fill="#FFFAEB"/>
              <path d="M6.02204 11.7543C5.06769 12.3927 5.06769 13.4418 6.02204 14.0739C7.10912 14.8007 8.89142 14.8007 9.9785 14.0739C10.9329 13.4355 10.9329 12.3864 9.9785 11.7543C8.89774 11.0275 7.11544 11.0275 6.02204 11.7543Z" fill="#FFFAEB"/>
            </svg>
            <svg width="37" height="37" className="hidden lg:block" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.0047 11.9947C26.897 11.9793 26.7894 11.9793 26.6817 11.9947C24.298 11.9178 22.4063 9.9646 22.4063 7.56544C22.4063 5.12015 24.3902 3.12085 26.8509 3.12085C29.2962 3.12085 31.2955 5.10477 31.2955 7.56544C31.2801 9.9646 29.3885 11.9178 27.0047 11.9947Z" fill="#FFFAEB"/>
              <path d="M32.0183 22.6524C30.2958 23.8058 27.8813 24.2364 25.6513 23.9442C26.2357 22.6831 26.5433 21.2836 26.5587 19.8072C26.5587 18.2693 26.2203 16.8083 25.5744 15.5318C27.8505 15.2242 30.2651 15.6548 32.0029 16.8083C34.4328 18.4077 34.4328 21.0376 32.0183 22.6524Z" fill="#FFFAEB"/>
              <path d="M9.94913 11.9947C10.0568 11.9793 10.1644 11.9793 10.2721 11.9947C12.6559 11.9178 14.5475 9.9646 14.5475 7.56544C14.5475 5.10477 12.5636 3.12085 10.1029 3.12085C7.65762 3.12085 5.67371 5.10477 5.67371 7.56544C5.67371 9.9646 7.56535 11.9178 9.94913 11.9947Z" fill="#FFFAEB"/>
              <path d="M10.1183 19.8073C10.1183 21.2991 10.4413 22.7139 11.0257 23.9904C8.8572 24.2211 6.59646 23.7597 4.9355 22.6678C2.50559 21.053 2.50559 18.4231 4.9355 16.8083C6.58108 15.701 8.90334 15.255 11.0872 15.5011C10.4566 16.7929 10.1183 18.254 10.1183 19.8073Z" fill="#FFFAEB"/>
              <path d="M18.6845 24.4517C18.5615 24.4364 18.4231 24.4364 18.2847 24.4517C15.4549 24.3595 13.1942 22.0372 13.1942 19.1767C13.2095 16.2546 15.5626 13.8862 18.5 13.8862C21.422 13.8862 23.7904 16.2546 23.7904 19.1767C23.775 22.0372 21.5297 24.3595 18.6845 24.4517Z" fill="#FFFAEB"/>
              <path d="M13.6863 27.6353C11.364 29.1886 11.364 31.7415 13.6863 33.2795C16.3315 35.0481 20.6684 35.0481 23.3137 33.2795C25.6359 31.7262 25.6359 29.1732 23.3137 27.6353C20.6838 25.8667 16.3469 25.8667 13.6863 27.6353Z" fill="#FFFAEB"/>
            </svg>
          </div>
          <div className="mt-4">
            <h6 className="font-medium lg:font-semibold text-sm lg:text-xl lg:leading-[33px] text-[#FF842B] font-Axiforma">#1 in Customer Support</h6>
            <p className="mt-1 text-xs leading-[18px] lg:text-sm text-[#324F6A] font-Axiforma">We provide  our customers with the best support team</p>
          </div>
        </div> */}
      </section>

      <section className="py-[15px] md:py-[45px] lg:py-20 px-[27px] md:px-20 lg:px-[158px] bg-[#FFE2CC]">
        <div className="flex items-center justify-between text-black">
          <h4 className="font-medium text-sm md:text-3xl md:leading-[38px] lg:text-4xl lg:leading-[44px] text-[#051626] -tracking-[0.02em] font-Axiforma">Testimonials</h4>
          <p className="text-xs leading-[18px] font-Axiforma md:hidden">see more</p>
        </div>
        <div className="flex space-x-[30px] md:space-x-5 lg:space-x-[21px] md:mt-[15px] lg:mt-10">
          <div className="testimonial-card px-3 py-2 md:pl-[14px] md:pr-3 md:pb-5 lg:p-0 lg:pb-7">
            <h1 className="lg:pl-[26px] lg:pt-[19px] md:text-[55px] lg:text-[80px] leading-normal text-[#8E8E8E] font-Axiforma font-semibold">&#8220;</h1>
            <p className="lg:px-[43px] text-xs leading-[18px] text-[15px] lg:leading-6 font-Axiforma text-[#061D33]">The app has made tremendous changes in helping me find places</p>
            <div className="lg:ml-6 mt-1.5 lg:mt-7 flex items-center space-x-3 lg:space-x-[14px]">
              <img src={Person1} alt="Person looking up" className="w-[30px] lg:w-10"/>
              <h6 className="font-Axiforma text-xs lg:text-[15px] leading-[18px] lg:leading-[25px] font-medium lg:font-bold">John Trivia</h6>
            </div>  
          </div>
          <div className="testimonial-card px-3 py-2 md:pl-[14px] md:pr-3 md:pb-5 lg:p-0">
            <h1 className="lg:pl-[26px] lg:pt-[19px] md:text-[55px] lg:text-[80px] leading-normal text-[#8E8E8E] font-Axiforma font-semibold">&#8220;</h1>
            <p className="lg:px-[43px] text-xs leading-[18px] text-[15px] lg:leading-6 font-Axiforma text-[#061D33]">The app has made tremendous changes in helping me find places</p>
            <div className="lg:ml-6 mt-1.5 lg:mt-7 flex items-center space-x-3 lg:space-x-[14px]">
              <img src={Person1} alt="Person looking up" className="w-[30px] lg:w-10"/>
              <h6 className="font-Axiforma text-xs lg:text-[15px] leading-[18px] lg:leading-[25px] font-medium lg:font-bold">John Trivia</h6>
            </div>  
          </div>
          <div className="testimonial-card px-3 py-2 md:pl-[14px] md:pr-3 md:pb-5 lg:p-0">
            <h1 className="lg:pl-[26px] lg:pt-[19px] md:text-[55px] lg:text-[80px] leading-normal text-[#8E8E8E] font-Axiforma font-semibold">&#8220;</h1>
            <p className="lg:px-[43px] text-xs leading-[18px] text-[15px] lg:leading-6 font-Axiforma text-[#061D33]">The app has made tremendous changes in helping me find places</p>
            <div className="lg:ml-6 mt-1.5 lg:mt-7 flex items-center space-x-3 lg:space-x-[14px]">
              <img src={Person1} alt="Person looking up" className="w-[30px] lg:w-10"/>
              <h6 className="font-Axiforma text-xs lg:text-[15px] leading-[18px] lg:leading-[25px] font-medium lg:font-bold">John Trivia</h6>
            </div>  
          </div>
          <div className="testimonial-card px-3 py-2 md:pl-[14px] md:pr-3 md:pb-5 lg:p-0">
            <h1 className="lg:pl-[26px] lg:pt-[19px] md:text-[55px] lg:text-[80px] leading-normal text-[#8E8E8E] font-Axiforma font-semibold">&#8220;</h1>
            <p className="lg:px-[43px] text-xs leading-[18px] text-[15px] lg:leading-6 font-Axiforma text-[#061D33]">The app has made tremendous changes in helping me find places</p>
            <div className="lg:ml-6 mt-1.5 lg:mt-7 flex items-center space-x-3 lg:space-x-[14px]">
              <img src={Person1} alt="Person looking up" className="w-[30px] lg:w-10"/>
              <h6 className="font-Axiforma text-xs lg:text-[15px] leading-[18px] lg:leading-[25px] font-medium lg:font-bold">John Trivia</h6>
            </div>  
          </div>

        </div>
      </section>

    </main>
  )
}
function App() {
  return (
    <main className="font-Axiforma">
      <section className="relative">
        <div className="md:bg-black/50 h-[222px] md:h-[328px] lg:w[866px] lg:h-[489px] overflow-hidden">
          <img src={HeroSection} alt="Hero section" className="w-full h-fit" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'}}/>
        </div>
        <div className="absolute inset-0  flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center w-[267px] md:w-[395px] lg:w-[517px] px-[21px] md:px-8 lg:px-0">
            <h1 className="font-medium md:font-bold text-2xl md:text-4xl lg:text-6xl md:leading-[50px] lg:leading-[72px] md:-tracking-[0.02em] text-[#FFFDFD]">How It Works</h1>
            <h5 className="hidden lg:block mt-1.5 md:mt-0 lg:mt-2 md:font-semibold lg:font-medium text-[#FFFDFD]/80 md:text-sm lg:text-2xl lg:leading-[35px]">Don’t sweat it! Here’s how Tozilla allows you to mine your picture content from any device, anytime, anywhere!</h5>
            <h5 className="lg:hidden mt-1.5 md:mt-0 font-semibold text-[#FFFDFD]/80 text-sm">Tozilla allows users mine picture content on your website from any device</h5>
            <button type="button" className="absolute md:relative bottom-0 mx-auto md:translate-y-0 translate-y-1/2 bg-[#FF6C00] md:mt-6 lg:mt-9 w-40 h-12 leading-[26px] text-white flex items-center justify-center rounded-lg">Get Started</button>
          </div>
        </div>
      </section>

      <section className="mt-12 md:mt-32 lg:mt-40 space-y-20 md:space-y-[167px] lg:space-y-[120px]">
        {howItWorks.map((feature, idx) => (
          <div className="md:odd:bg-[#D2D2D2]/20 first:py-11 px-[74px] md:pl-[104px] md:pr-[81px] lg:px-[188px]">
            <div key={feature.title} className="flex flex-col md:flex-row gap-y-7 md:gap-0 items-center justify-center md:gap-x-12 lg:gap-x-[109px]">
              <div className="w-[281px] lg:w-[416px]">
                <div className="relative w-fit mx-auto md:mx-0">
                  <h1 className="how-it-works-gradient-text">0{idx+1}</h1>
                  <h3 className="text-black md:w-[78px] lg:w-[117px] font-bold md:text-base lg:text-2xl">{feature.title}</h3>
                </div>
                <p className="mt-[30px] lg:mt-8 text-[#1D1D1D] text-sm lg:text-lg font-Roboto" dangerouslySetInnerHTML={{__html:feature.text}}/>
              </div>
              <div className="">
                <img src={feature.image} alt="" className="w-[315px] lg:w-[540px] h-[253px] lg:h-[510px] rounded-[4px]"/>
              </div>
            </div>
          </div>
        ))}
        
      </section>

      <section className="my-[120px] md:my-[180px] md:bg-[#F6F6F6] md:py-[66px] lg:py-[86px]">
        <div className="flex flex-col justify-center items-center">
          <p className="mb-[22px] md:mb-9 text-base md:text-xl md:leading-[30px] text-black text-center">Ready to use Minergram?</p>
          <div className="flex flex-col md:flex-row items-center gap-[22px] lg:gap-x-8">
            <button type="button" className="bg-[#FF6C00] hover:bg-white hover:border border-[#FF6C00] rounded-lg py-5px-[69px] flex items-center justify-center text-white hover:text-[#FF6C00] h-[64px] w-[232px]">Get Started</button>
            <button type="button" className="border border-[#FF6C00] hover-border-white bg-white hover:bg-[#FF6C00] rounded-lg flex items-center justify-center text-[#FF6C00] hover:text-white h-[64px] w-[232px]">View documentation</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App1

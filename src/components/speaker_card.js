export default function Speaker_card(props) {
  return (
    <>
      <div className="max-w-sm bg-gray-200 bg-opacity-70 rounded-2xl  border border-gray-200 my-1 mx-1 w-80 sm:w-72 md:w-72 lg:w-[21rem] shadow-sm transition-shadow duration-1000 hover:shadow-2xl shadow-black">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2 self-center">
          <img className="my-3 w-40 md:w-48 rounded-full  shadow-black shadow-md transition-shadow duration-700 hover:shadow-2xl mx-auto" src={props.profile_img} alt="Bonnie image" />
          <h3 className="text-3xl font-medium text-gray-900 text-center">{props.name}</h3>
          <h4 className="text-lg text-gray-900 text-center">{props.designation}</h4>
        </div>
        <p className="flex flex-wrap flex-row justify-center pb-0 ">
          <Linkedin_svg />
          <p className="mx-2" />
          <Github_svg />
          <p className="mx-2" />
          <Twitter_svg />
        </p>
      </div>
    </>
  );
}

export function Linkedin_svg(props) {
  let svg_active_style = `visible`;
  if (props.isActive == false) {
    svg_active_style = 'invisible';
  } else {
    svg_active_style = 'visible';
  }
  return (
    <svg
      className={`w-6 md:w-8 lg:w-10 aspect-ratio-square ${svg_active_style}`}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <path
        fill="#0288D1"
        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
      ></path>
      <path
        fill="#FFF"
        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
      ></path>
    </svg>

  )
}
export function Twitter_svg(props) {
  let svg_active_style = `visible`;
  if (props.isActive == false) {
    svg_active_style = 'invisible';
  } else {
    svg_active_style = 'visible';
  }
  return (
    <svg
      className={`w-6 md:w-8 lg:w-10 aspect-ratio-square ${svg_active_style}`}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <path
        fill="#03A9F4"
        d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
      ></path>
    </svg>
  )
}
export function Github_svg(props) {
  let svg_active_style = `visible`;
  if (props.isActive == false) {
    svg_active_style = 'invisible';
  } else {
    svg_active_style = 'visible';
  }
  return (
    <svg
      className={`w-6 md:w-8 lg:w-10 aspect-ratio-square ${svg_active_style}`}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 32 32"
    >
      <path
        fillRule="evenodd"
        d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
      ></path>
    </svg>
  )
}
export function Instagram_svg(props) {
  let svg_active_style = `visible`;
  if (props.isActive == false) {
    svg_active_style = 'invisible';
  } else {
    svg_active_style = 'visible';
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 md:w-8 lg:w-10 aspect-ratio-square mt-1 ${svg_active_style}`}
      viewBox="0 0 48 48"
    >
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8ma"
        cx="19.38"
        cy="42.035"
        r="44.899"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fd5"></stop>
        <stop offset="0.328" stopColor="#ff543f"></stop>
        <stop offset="0.348" stopColor="#fc5245"></stop>
        <stop offset="0.504" stopColor="#e64771"></stop>
        <stop offset="0.643" stopColor="#d53e91"></stop>
        <stop offset="0.761" stopColor="#cc39a4"></stop>
        <stop offset="0.841" stopColor="#c837ab"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
        d="M34.017 41.99l-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
      ></path>
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8mb"
        cx="11.786"
        cy="5.54"
        r="29.813"
        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4168c9"></stop>
        <stop offset="0.999" stopColor="#4168c9" stopOpacity="0"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
        d="M34.017 41.99l-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
      ></path>
      <path
        fill="#fff"
        d="M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      ></path>
      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
      <path
        fill="#fff"
        d="M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7zM18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5H18z"
      ></path>
    </svg>
  );
}

export function Facebook_svg(props) {
  let svg_active_style = `visible`;
  if (props.isActive == false) {
    svg_active_style = 'invisible';
  } else {
    svg_active_style = 'visible';
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 md:w-8 lg:w-10 aspect-ratio-square mt-1 ${svg_active_style}`}
      viewBox="0 0 48 48"
    >
      <path fill="#039be5" d="M24 5a19 19 0 100 38 19 19 0 100-38z"></path>
      <path
        fill="#fff"
        d="M26.572 29.036h4.917l.772-4.995h-5.69v-2.73c0-2.075.678-3.915 2.619-3.915h3.119v-4.359c-.548-.074-1.707-.236-3.897-.236-4.573 0-7.254 2.415-7.254 7.917v3.323h-4.701v4.995h4.701v13.729c.931.14 1.874.235 2.842.235.875 0 1.729-.08 2.572-.194v-13.77z"
      ></path>
    </svg>
  );
}
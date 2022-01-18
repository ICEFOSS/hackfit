export default function Sponsor_card(props) {
  return (
    <>
      <div className="w-full md:w-2/5 h-full">
        <a href={props.url}>
          <img
            className="object-center object-cover w-full h-full"
            src={props.logo}
            alt="photo"
          />
        </a>
      </div>
    </>
  );
}

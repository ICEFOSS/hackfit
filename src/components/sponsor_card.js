export default function Sponsor_card(props) {
  return (
    <>
      <div className="w-full sm:min-w-10">
        <a href={props.url}>
          <img
            className="object-center object-cover w-full"
            src={props.logo}
            alt="photo"
          />
        </a>
      </div>
    </>
  );
}

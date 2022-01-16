export default function Speaker_card(props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <img src={props.speaker.image} className="rounded-full h-48 w-48" />
          <h1 className="text-2xl text-center">{props.speaker.name}</h1>
          <h2 className="text-xl text-center">{props.speaker.title}</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl text-center">{props.speaker.bio}</p>
        </div>
      </div>
    </div>
  );
}
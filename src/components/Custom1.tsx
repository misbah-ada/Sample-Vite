interface  Props {
    title: string
}
const Custom1 = (props: Props) => {
    return (
      <div>
        <h2>{props.title}</h2>
      </div>
    );
  }
  
  export default Custom1;
  
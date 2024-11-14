import Custom1 from "./Custom1";

interface  Props {
    title: string
}
const Custom = (props: Props) => {
    return (
      <div>
          <h1>Custom</h1>
          <Custom1 title={props.title} />
      </div>
    );
  }
  
  export default Custom;
  
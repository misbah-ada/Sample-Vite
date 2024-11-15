import { useTitle } from "../context/TitleContext";
const Custom1 = () => {
  const title = useTitle() as string; // Access the title from the context
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
  }
  
  export default Custom1;
  
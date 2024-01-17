import hello  from "../components/img/Hello.gif";

const HelloWorld = () => {
  return (
    <>
    <h1 className="text-center text-light mt-5 ">HelloWorld🌍</h1>
    <img className="img-fluid" src={hello} alt="" />
    </>
  )
}

export default HelloWorld

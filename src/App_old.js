import Identity from "./Identity";
import Education from "./Education";
import Counting from "./Counting";
import Counting2 from "./Counting2";

function App() {
  const userObject = {
    name: "Mhd Arif Setiawan",
    address: "Bandung",
  };

  const educations = {
    univ: "UGM",
    jurusan: "Teknik Mesin",
  };

  return (
    <>
      <div>
        <h1>Halaman React Pertamaku</h1>
      </div>
      <Identity user={userObject} />
      <hr />
      <Education educations={educations} />
      <hr />
      <Counting />
      <Counting2 />
    </>
  );
}

export default App;

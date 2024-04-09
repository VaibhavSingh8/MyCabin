import { useEffect } from "react";
import cabins from "../services/apiCabins";

const Cabins = () => {
  useEffect(() => {
    cabins.getCabins().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div>
      <p>Cabins</p>
      <img src="https://cloud.appwrite.io/v1/storage/buckets/6612635d0493ab7a47c0/files/661264c8ab85b08618c2/view?project=6607c652140f010c15b5&mode=admin" />
    </div>
  );
};

export default Cabins;

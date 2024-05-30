import { ethers } from "ethers";
import { Bounce, ToastContainer, toast } from "react-toastify";
import realImage from "./images/realImage.jpg";
import Header from "../components/Header";

const Home = () => {
  const validateArticle = async (value: string) => {
    const isVerified = window.confirm(
      "Do you want to authenticate this Article Link?"
    );
    if (!isVerified) {
      return;
    }
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        //"https://eth-sepolia.g.alchemy.com/v2/JMNm-wz06jVXXLqOxf4tNkk9afrZFzCF"
        "https://eth-sepolia.g.alchemy.com/v2/JIHHeTLzOWng1liBvoJXSx05KJRWhxoT"
      );
      const verificationAddress = "0x9A25C08ad6B0ffF3Dd308D3896DA577d387E8145";
      const verificationAbi = [
        "function verifyArticle(bytes32 _articleHash) view returns(bool)",
        "function verifyImage(bytes32 _imageHash) view returns (bool)",
      ];
      const verificationContract = new ethers.Contract(
        verificationAddress,
        verificationAbi,
        provider
      );
      //Extracting hash from IPFS Url
      const keccakhash = ethers.utils.keccak256(
        ethers.utils.solidityPack(["string"], [value])
      );
      console.log("kecahash : ", keccakhash);
      //Comparing hash from IPFS with the hash stored in the Smart contract
      const idVerified = await verificationContract.verifyArticle(keccakhash);

      if (idVerified) {
        toast.success("🦄 Successfully Verified Authentic articleData", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        toast.error("Not Authentic articleLink", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (err) {
      toast.error("Error Occured", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log("Error : ", err);
    }
  };

  const validateImage = async (value: string) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://eth-sepolia.g.alchemy.com/v2/JMNm-wz06jVXXLqOxf4tNkk9afrZFzCF"
      );
      const verificationAddress = "0x9A25C08ad6B0ffF3Dd308D3896DA577d387E8145";
      const verificationAbi = [
        "function verifyArticle(bytes32 _articleHash) view returns(bool)",
        "function verifyImage(bytes32 _imageHash) view returns (bool)",
      ];
      const verificationContract = new ethers.Contract(
        verificationAddress,
        verificationAbi,
        provider
      );
      const keccakhash = ethers.utils.keccak256(
        ethers.utils.solidityPack(["string"], [value])
      );
      console.log("keccakhash", keccakhash);
      const idVerified = await verificationContract.verifyImage(keccakhash);

      if (idVerified) {
        toast.success("🦄 Successfully Verified :-  Authentic Image", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        toast.error("Not Authentic Image", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (err) {
      toast.error("Error Occured", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log("Error : ", err);
    }
  };

  const handleRealImageVerification = () => {
    const isVerified = window.confirm(
      "Do you want to authenticate this image?"
    );
    if (isVerified) {
      validateImage(
        "https://ipfs.io/ipfs/QmYkLQU6Pt52LyVG91aWGQWe6KKjwEZezs6QWfURRzLFoQ"
      );
    }
  };
  const handleFalseImageVerification = () => {
    const isVerified = window.confirm(
      "Do you want to authenticate this image?"
    );
    if (isVerified) {
      validateImage(
        "https://ipfs.io/ipfs/QmbTydkNpcud9Mm1Lvy8MHHLRq83FKaGeMhmrC18EgUXQ8"
      );
    }
  };

  return (
    <div className="app">
      <div className="app_container">
        <Header active="home" />
        <div>
          <div className="p-8 mt-8 w-[70%] m-auto">
            {/* <h2 className="text-2xl font-semibold mb-8">Images</h2> */}
            <div className="flex justify-center gap-20">
              <div className="text-left flex-1">
                <h1 className="text-lg font-bold text-red-500">Click on the image on the right</h1>
                <br/>
                <p>
                Australian Prime Minister Anthony Albanese has announced that he will visit China in early November, becoming the first Australian PM to do so in seven years. This comes after China agreed to review the tariffs imposed on Australian wine, which have disrupted trade since 2020. (Source: [1])
Australian Deputy PM Richard Marles and Foreign Minister Penny Wong met with India’s NSA Ajit Doval to discuss partnership across ASEAN and Pacific Island states in development-related sectors. (Source: [2])
Australian Prime Minister Anthony Albanese has criticized Elon Musk for challenging a takedown notice issued by the country’s internet watchdog over videos of a stabbing at a Sydney church
                </p>
              </div>
              <div className="w-[300px] h-[300px] overflow-hidden">
                <img
                className="block w-auto h-auto"
                    src="https://ipfs.io/ipfs/QmYkLQU6Pt52LyVG91aWGQWe6KKjwEZezs6QWfURRzLFoQ"
                    alt="IPFS Image"
                    onClick={handleRealImageVerification}
                    style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            <div className="flex justify-center gap-20 mt-20">
              <div className="w-[300px] h-[300px] overflow-hidden">
                <img
                    src="https://ipfs.io/ipfs/QmbTydkNpcud9Mm1Lvy8MHHLRq83FKaGeMhmrC18EgUXQ8"
                    alt="IPFS Image"
                    onClick={handleFalseImageVerification}
                    style={{ cursor: "pointer" }}
                />
              </div>
              <div className="text-left flex-1">
                <h1 className="text-lg font-bold text-red-500">Click on the image on the left</h1>
                <br/>
                <p>
                A friend of mum Amie added: “It is such a shocking thing to happen. "She was a wonderful human being and didn’t have any enemies. “There is a lot of speculation about why she was attacked — whether it could have been a robbery?” Durley Chine Beach remained closed on Tuesday as detectives began a fourth day of investigations. Specialist officers were seen abseiling down cliffs above the beach where they are thought to be searching for the murder weapon. Superintendent Richard Dixey appealed for the public's help in identifying the suspect in the CCTV images. He said: "If you recognise him or have any information, no matter how small, that may lead us to his identity please get in touch immediately. "Our thoughts remain with the loved ones of the woman who tragically lost her life and the surviving victim as we drive forward our investigation." Amie was head coach of the Dorset Futsal Club ladies team and received her ­coaching badge from the FA in January.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-10 px-14 flex flex-col gap-10">
            <h2 className="text-2xl font-semibold">News Articles</h2>
            <div className="flex gap-10">
              {/* <label htmlFor=""></label> */}
              <input
                className="bg-transparent text-blue-400"
                contentEditable={false}
                value="https://ipfs.io/ipfs/Qmazy28AVaV6GReyFbra5oVFMEiL4aTaKbaKJfGV2GX6Cq"
                onClick={() =>
                  validateArticle(
                    "https://ipfs.io/ipfs/Qmazy28AVaV6GReyFbra5oVFMEiL4aTaKbaKJfGV2GX6Cq"
                  )
                }
              />
              <a
                href="https://ipfs.io/ipfs/Qmazy28AVaV6GReyFbra5oVFMEiL4aTaKbaKJfGV2GX6Cq"
                className="link_button"
              >
                Open Link
              </a>
            </div>
            <div className="flex gap-10">
              {/* <label htmlFor=""></label> */}
              <input
              className="bg-transparent text-blue-400"
                contentEditable={false}
                value="https://ipfs.io/ipfs/QmX3z1ZfuuVnb4t4orJNyBX4BvEsSiEmaNzjbXTErGuRvV"
                onClick={() =>
                  validateArticle(
                    "https://ipfs.io/ipfs/QmX3z1ZfuuVnb4t4orJNyBX4BvEsSiEmaNzjbXTErGuRvV"
                  )
                }
              />
              <a
                href="https://ipfs.io/ipfs/QmX3z1ZfuuVnb4t4orJNyBX4BvEsSiEmaNzjbXTErGuRvV"
                className="link_button"
              >
                Open Link
              </a>
            </div>
          </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Home;

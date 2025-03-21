import Modal from "./components/modal/Modal";
import Image1 from '../../public/Jelle_1.png';
import Image2 from '../../public/Jelle_2.png';


export default function Home() {
  return (
    <div className="flex justify-center items-center gap-12 flex-grow">
      <Modal title="Work" image={Image1}/>
      <Modal title="About" image={Image2 }/>
      <Modal title="Get in touch" image={Image1}/>
    </div>
  );
}

import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
const ModalPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose}  primary>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        <p>
            Here is ........
        </p>
    </Modal>

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere tellus sed quam imperdiet, posuere sollicitudin lectus tempor. Nunc sollicitudin fermentum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet arcu hendrerit, interdum sapien porttitor, tempus lectus. Nullam imperdiet vulputate elementum. Nulla diam dui, placerat et elit sit amet, iaculis tristique dolor. Aenean porttitor purus felis, nec accumsan magna pellentesque a.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere tellus sed quam imperdiet, posuere sollicitudin lectus tempor. Nunc sollicitudin fermentum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet arcu hendrerit, interdum sapien porttitor, tempus lectus. Nullam imperdiet vulputate elementum. Nulla diam dui, placerat et elit sit amet, iaculis tristique dolor. Aenean porttitor purus felis, nec accumsan magna pellentesque a.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere tellus sed quam imperdiet, posuere sollicitudin lectus tempor. Nunc sollicitudin fermentum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet arcu hendrerit, interdum sapien porttitor, tempus lectus. Nullam imperdiet vulputate elementum. Nulla diam dui, placerat et elit sit amet, iaculis tristique dolor. Aenean porttitor purus felis, nec accumsan magna pellentesque a.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere tellus sed quam imperdiet, posuere sollicitudin lectus tempor. Nunc sollicitudin fermentum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet arcu hendrerit, interdum sapien porttitor, tempus lectus. Nullam imperdiet vulputate elementum. Nulla diam dui, placerat et elit sit amet, iaculis tristique dolor. Aenean porttitor purus felis, nec accumsan magna pellentesque a.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere tellus sed quam imperdiet, posuere sollicitudin lectus tempor. Nunc sollicitudin fermentum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet arcu hendrerit, interdum sapien porttitor, tempus lectus. Nullam imperdiet vulputate elementum. Nulla diam dui, placerat et elit sit amet, iaculis tristique dolor. Aenean porttitor purus felis, nec accumsan magna pellentesque a.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere tellus sed quam imperdiet, posuere sollicitudin lectus tempor. Nunc sollicitudin fermentum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet arcu hendrerit, interdum sapien porttitor, tempus lectus. Nullam imperdiet vulputate elementum. Nulla diam dui, placerat et elit sit amet, iaculis tristique dolor. Aenean porttitor purus felis, nec accumsan magna pellentesque a.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere tellus sed quam imperdiet, posuere sollicitudin lectus tempor. Nunc sollicitudin fermentum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet arcu hendrerit, interdum sapien porttitor, tempus lectus. Nullam imperdiet vulputate elementum. Nulla diam dui, placerat et elit sit amet, iaculis tristique dolor. Aenean porttitor purus felis, nec accumsan magna pellentesque a.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere tellus sed quam imperdiet, posuere sollicitudin lectus tempor. Nunc sollicitudin fermentum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet arcu hendrerit, interdum sapien porttitor, tempus lectus. Nullam imperdiet vulputate elementum. Nulla diam dui, placerat et elit sit amet, iaculis tristique dolor. Aenean porttitor purus felis, nec accumsan magna pellentesque a.
            </p>
        </div>
    )
}

export default ModalPage
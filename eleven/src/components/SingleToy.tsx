import { FC, useState } from "react";
import Toys from "../models/Tojs";
import EditToysForm from "./EditToysForm";

interface SingleToyProps {
    toy: Toys;
    updateToys: (newToys: Toys) => void;
    deleteToys: (id: number) => void;
}

const SingleToy: FC<SingleToyProps> = ({toy, updateToys, deleteToys}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const handleDelete = () => {
        deleteToys(toy.id);
    }

    return (
        <div className="toys-block">
            <div className="toy">
                <img src={`/images/${toy.img}`} alt={toy.title} />
                <h2>{toy.title}</h2>
                <p>{toy.price} Rub</p>
            </div>
            <div className="toys-control">
                <img src={"/images/edit.jpg"} onClick={handleToggleEdit} alt="" />
                <img src={"/images/delete.jpg"} onClick={handleDelete} alt="" />
            </div>
            {
                edit ? <EditToysForm data={toy} updateToys={updateToys} handleToggleEdit={handleToggleEdit} /> : null
            }
        </div>
    )
}

export default SingleToy;
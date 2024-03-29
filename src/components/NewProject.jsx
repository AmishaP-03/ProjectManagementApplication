import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import Header from "./Header.jsx";
import Paragraph from "./Paragraph.jsx";

function isInvalid(data) {
    return data.trim() === '';
}

export default function NewProject({onSave, onCancel}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const dialog = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // Validation on inputs
        if (isInvalid(enteredTitle) || isInvalid(enteredDescription) || isInvalid(enteredDueDate)) {
            dialog.current.showModal();
            return;
        }

        onSave({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal buttonCaption="Okay" ref={dialog}>
                <Header>Invalid input</Header>
                <Paragraph>Please enter a valid/non-empty value for every input field</Paragraph>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label={"Title"} />
                    <Input ref={description} label={"Description"} isTextArea /> {/* isTextArea={true} is redundant */}
                    <Input type="date" ref={dueDate} label={"Due date"} />
                </div>
            </div>
        </>
    );
}
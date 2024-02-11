import noProjectImg from '../assets/no-projects.png';
import Button from './Button.jsx';
import Header from './Header.jsx';
import Paragraph from './Paragraph.jsx';

export default function NoProjectSelected({onAddProject}) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImg} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
            <Header>No project selected</Header>
            <Paragraph>Select a project or get started with a new one!</Paragraph>
            <p className="mt-8">
                <Button onClick={onAddProject}>Create new project</Button>
            </p>
        </div>
    );
}
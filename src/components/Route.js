import { useNavigation } from '../context/Navigation';

function Route({ path, children }) {
    const { currentPath } = useNavigation();

    const pathParts = path.split('/').filter(p => p);
    const currentPathParts = currentPath.split('/').filter(p => p);

    const match = pathParts.length === currentPathParts.length && pathParts.every((part, index) => {

        if (part.startsWith(':')) {
            return true;
        }

        return part === currentPathParts[index];
    });

    if (match) {
        return children;
    }

    return null;
}

export default Route;

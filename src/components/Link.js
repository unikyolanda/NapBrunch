import classNames from "classnames";
import { useNavigation } from '../context/Navigation';

function Link({ to, children, className, activeClassName }){
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        className,
        currentPath === to && activeClassName
        );

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();

        navigate(to);

        window.scrollTo(0, 0);
    };

    return <a className={classes} href={to} onClick={handleClick}>{ children }</a>
};

export default Link;
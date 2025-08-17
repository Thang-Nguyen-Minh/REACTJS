import './App.scss';
import {Link} from 'react-router-dom';
import Header from "./components/Header/Header";

const App = () => {

    return (
        <div>
            <Header/>
            <div>
                test link
                <div>
                    <button>
                        <Link to='/users'>Go to user page</Link>
                    </button>
                    <button>
                        <Link to='/admins'>Go to admin page</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './components/Card';
import database from './database/database';

export default async function Home() {
    await database();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex items-center justify-between">
                <Card />
                <div className="w-[732px] h-[736px] bg-picture bg-no-repeat bg-cover"></div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </main>
    );
}

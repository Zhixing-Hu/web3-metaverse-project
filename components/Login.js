import Image from "next/image";
import { useRouter } from "next/router";
import { useMoralis } from 'react-moralis';

function Login() {
    const router = useRouter();
    const { authenticate, isInitializing } = useMoralis();
    const addExtension = () => {
        router.push({
            pathname: 'https://metamask.io/download.html',
        });
    }
    return (
        <div className="bg-black relative">
            
            <div className="flex flex-col absolute z-50 h-4/6 w-full  items-center justify-center space-y-4">
                <Image className="object-cover rounded-full bg-black"
                    src='https://i.pinimg.com/564x/39/89/ed/3989edc7fe67538cd40974324582abba.jpg' 
                    height={100} 
                    width={100}
                />
                <button 
                    onClick={authenticate}
                    className="bg-yellow-500 rounded-lg p-3 font-bold animate-bounce"
                >
                    Login to the Metaverse
                </button>
                    
                <button
                    onClick={addExtension}
                    className="bg-yellow-500 rounded-lg p-3 font-semibold animate-pulse"
                >
                    Add Metamask Extension
                </button>
            </div>
            
            <div className="w-full h-screen">
                <Image 
                src="https://links.papareact.com/55n" 
                layout="fill"
                objectFit="cover"
                 />
            </div>
        </div>
    )
}

export default Login

import React, { useState } from 'react'

export default function Login() {
    const [ShowPassword, setShowPassword] = useState(false)
    return (
        <div className='h-full flex'>
            <div className='flex w-full max-w-md m-auto rounded-lg border-2 border-solid border-black drop-shadow-2xl px-14 pb-14 pt-10'>
                <div className='flex justify-center items-center space-x-2 py-4'>
                    <h1 className='text-2xl font-medium text-primary text-center'>Connexion a votre compte</h1>
                    <i className="fas fa-user-circle"></i>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div className='space-y-8 my-2'>
                        <div className='flex space-x-2'>
                            <h1 className='row-start-[5px] row-span-3'>Email :</h1>
                            <input
                                className="border-2 border-black rounded-lg px-2"
                                placeholder='email'
                                type="email"
                                id="mail"
                            />
                        </div>
                        <div className='flex space-x-2'>
                            <h1 className="row-span-3">Mot de passe :</h1>
                            <input  
                                className="border-2 border-black rounded-lg px-2"
                                placeholder='mot de passe'
                                type={`${ShowPassword ? "text" : "password"}`}
                                id="mdp"
                            />
                            <div className="absolute right-0" onClick={() => setShowPassword(!ShowPassword)}>
                                {ShowPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center pb-4 pt-2'>
                        <div className='py-2 px-4 rounded border-2 border-black bg-yellow-400 hover:drop-shadow-xl hover:brightness-125 cursor-pointer'>Login</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

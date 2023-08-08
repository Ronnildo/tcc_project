import React from 'react';

export default function HomePage() {
    return (
        <>
            <div class="bg-scroll h-screen bg-black p-10">
                <div className='top inline-flex space-x-[700px]'>
                    <div className='title justify'>
                        <h1 class='text-4xl text-white font-bold'>Welcome to Dashboard</h1>
                        <h5 class='text-base text-white '>Log visualization interface</h5>
                    </div>
                    <div className='user m-[100] inline-flex space-x-2'>
                        <h3 class='text-2xl text-white font-bold'>RS</h3>
                        <h4 class='text-2xl text-white font-bold'>Ronnildo</h4>
                    </div>
                </div>
                <div className='filter p-[10px]'>
                    <input type="text" />
                    <h4>Date</h4>
                    <h4>Last Update</h4>
                    <label htmlFor="Filter"></label>
                    <select name='Filters'></select>
                </div>
                <div className='' id='container'>
                    <div>IP</div>
                    <div>USER</div>
                    <div>PORT</div>
                    <div>OCCURRENCES</div>
                    <div>ACTIONS</div>
                </div>
            </div>
        </>
    );
}
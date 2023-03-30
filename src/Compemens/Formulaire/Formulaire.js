import React from 'react';

function Formulaire(props) {
    return (
        <div >
            <h1 className="text-2xl text-center">VOS Tache a faire</h1>
            <form className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <label className="text-2xl text-center" htmlFor="tache">Ajouter une tache</label>
                    <input type="text" placeholder="titre" id="tache" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"/>
                </div>
                <div className="flex flex-col items-center">
                    <label className="text-2xl text-center" htmlFor="description">Ajouter une description</label>
                    <input type="text" placeholder="description" id="description" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"/>
                </div>
                <button className="bg-green-500 hover:bg-slate-500 mt-2 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    );
}

export default Formulaire;
import {RendererType} from "../../game/io/RendererType";


export const startMenu = (forceStart):Promise<RendererType> => 
    new Promise<RendererType>(resolve => {
        const menuUl = document.getElementById("menu");
        Object
        .keys(RendererType)
        .sort()
        .map(key => RendererType[key])
        .forEach(option => {
            const li = document.createElement('li');
            const button = document.createElement('button');        
            button.innerHTML = option;
            li.appendChild(button);
            menuUl.appendChild(li);

            button.onclick = () => {
                resolve(option);
            }
        })

        if(forceStart) {
            resolve(forceStart);
        }
    })
import './style.css'
import Values from 'values.js';
type TcolorValues = {
    [key:string]:number | [number,number,number] | string,
    alpha:number,
    rgb:[number,number,number],
    type:string,
    weight:number,
    hex:string
}
type TcolorSet = TcolorValues[];


document.getElementById('color-form')?.addEventListener('submit', (e:Event):void=>{
    e.preventDefault();
    const errorMessageElement:HTMLParagraphElement = <HTMLParagraphElement>(document.getElementById('error-message'));
    const hexCode:string = (<HTMLInputElement>(<HTMLElement>e.target).querySelector('#hexInput')).value;
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hexCode)) {
        const colorsUnknown:unknown = new Values(hexCode).all(10);
        const colors: TcolorSet = <TcolorSet>colorsUnknown;
        const shadBoxContainer:HTMLDivElement = <HTMLDivElement>(document.getElementById('shade-box-container'));
        shadBoxContainer.innerHTML = '';
        errorMessageElement.classList.add('hidden');
        

        colors.forEach((color:TcolorValues):void=>{
            const shadeBox:HTMLDivElement = <HTMLDivElement>(<HTMLTemplateElement>document.getElementById('shade-box-template')).content.children[0].cloneNode(true);
            const weightElement:HTMLParagraphElement = <HTMLParagraphElement>(shadeBox.querySelector('.weight'));
            const hexCodeElement:HTMLParagraphElement = <HTMLParagraphElement>(shadeBox.querySelector('.hex-code'));
            const textColor:string = `rgb(${255 - color.rgb[0]},${255 - color.rgb[1]},${255 - color.rgb[2]})`;
            
            weightElement.innerText = `${color.weight}%`;
            weightElement.style.color = textColor;
            hexCodeElement.style.color = textColor;
            hexCodeElement.innerText = `#${color.hex}`;
            shadeBox.style.backgroundColor = `rgb(${color.rgb[0]},${color.rgb[1]},${color.rgb[2]})`;
            shadBoxContainer.insertAdjacentElement('beforeend',shadeBox);
        })
        

        
    } else{errorMessageElement.classList.remove('hidden')}

    
    
    
})

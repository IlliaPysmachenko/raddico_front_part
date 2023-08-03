import React, {useState} from "react";

export const ColorPicker = ()=> {
    const [selectedColor, setSelectedColor] = useState(''); // Начальное значение цвета

    const handleColorChange = (color:any) => {
        setSelectedColor(color);
        document.documentElement.style.setProperty('--user-background', color);
    };

    return (
        <div>
            <label htmlFor="userColor">Color Scheme: </label>
            <input
                id={'userColor'}
                type="color"
                value={selectedColor}
                onChange={(e) => handleColorChange(e.target.value)}
            />
            <button onClick={(e) => {
                e.preventDefault();
                document.documentElement.style.removeProperty('--user-background');
            }}> Reset to default</button>
            {/* Другие элементы интерфейса */}
        </div>
    );
}
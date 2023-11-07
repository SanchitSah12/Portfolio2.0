import React, { useEffect } from 'react';

function Something() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            console.log(e);
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const anchor = document.getElementById('anchor');
            const rect = anchor!.getBoundingClientRect();
            const anchorX = rect.left + rect.width / 2;
            const anchorY = rect.top + rect.height / 2;

            const eyes = document.querySelectorAll('.eye');
            eyes.forEach((eye) => {
                const angleRad = Math.atan2(mouseY - anchorY, mouseX - anchorX);
                const angleDeg = angleRad * (180 / Math.PI);
                eye.style.transform = `rotate(${90 + angleDeg}deg)`;
                anchor!.style.filter = `hue-rotate(${angleDeg}deg)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div id="anchor"></div>
            <div className=""><img className="eye"src="" alt="" /></div>
            <div className=""></div>
        </div>
    );
}

export default Something;
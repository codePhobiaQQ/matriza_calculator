import React from 'react';

interface BottomInfoSectionI {
    classing?: string;
}

const BottomInfoSection = ({classing = ""}: BottomInfoSectionI) => {
    return (
        <div className={`${classing}`}>
            bottom info section
        </div>
    );
};

export default BottomInfoSection;
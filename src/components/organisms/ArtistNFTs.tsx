import React from 'react';
import image1 from '@/assets/images/Image1.png'
import image2 from '@/assets/images/Image2.png'
import image3 from '@/assets/images/Image3.png'
import image4 from '@/assets/images/Image7.png'
import image5 from '@/assets/images/Image8.png'
import image6 from '@/assets/images/Image9.png'
import fox from '@/assets/images/foxMini.png'
import NFTComponent from '../molecules/NFTComponent';

const ArtistNFTs = ({ itemsInRow, }: { itemsInRow: number }) => {
    return (
        <div className={`ArtistNFTs grid gap-14`} style={{ gridTemplateColumns: `repeat(${itemsInRow}, minmax(0, 1fr))` }}>
            <NFTComponent image={image1} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />
            <NFTComponent image={image2} title='Life On Edena' creatorPic={fox} creator='NebulaKid' price={1.63} bid={0.33} />
            <NFTComponent image={image3} title='AstroFiction' creatorPic={fox} creator='Spaceone' price={1.63} bid={0.33} />
            <NFTComponent image={image4} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />
            <NFTComponent image={image5} title='Life On Edena' creatorPic={fox} creator='NebulaKid' price={1.63} bid={0.33} />
            <NFTComponent image={image6} title='AstroFiction' creatorPic={fox} creator='Spaceone' price={1.63} bid={0.33} />
        </div>
    );
};

export default ArtistNFTs;
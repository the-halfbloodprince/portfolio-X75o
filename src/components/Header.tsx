import React from 'react';

type Props = {
    links: string[]
}

const Header: React.FC<Props> = ({ links }) => {
  
    return (
        <div className="absolute w-screen text-center flex space-x-6 justify-center items-center py-4 z-50" >
            {
                links.map(link => (
                    <a href="#" key={link} className="text-gray text-xl hover:text-white transition-all duration-500 link-underline" >
                        {link}
                    </a>
                ))
            }
        </div>
  );
};

export default Header;

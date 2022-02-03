import React from 'react';

const Layout = ({ children }) => {
    return <div>
        <div className='max-w-sm bg-white min-h-screen m-auto'>
            <main>
                {children}
            </main>
        </div>
    </div>
};

export default Layout;

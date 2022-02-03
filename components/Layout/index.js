import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 mt-0 pt-20">
      <div className='max-w-sm min-h-screen m-auto'>
        <main>
          <div className='device device-iphone-x'>
            <div className='device-frame'><div className="device-content overflow-y-auto">{children}</div></div>
            <div className='device-header' />
            <div className='device-btns' />
            <div className='device-power' />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;

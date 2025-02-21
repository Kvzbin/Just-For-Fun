// src/UserContext.js

// import React, { createContext, useState } from 'react';

// const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({});

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export { UserContext, UserProvider };

import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

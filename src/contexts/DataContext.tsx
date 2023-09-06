/* 
// Created by Laraib Sarfraz on 29/08/2023.
// Company: Codistan Pvt ltd.
//
// Current developer:  Laraib Sarfraz
// Edited by : [if any]
//
// Reference: [if any]
*/

import React, {createContext, useContext, useState} from 'react';
import {
  filtersData,
  tableDataOrders,
  tableDataPatients,
} from '../constants/data';

// Create a context
const DataContext = createContext<any>(null);

// Create a provider component
export const DataProvider: React.FC = ({children}) => {
  const [filters, setFilters] = useState<any[]>(filtersData);
  const [tableOrders, setTableOrders] = useState<any[]>(tableDataOrders);
  const [tablePatients, setTablePatients] = useState<any[]>(tableDataPatients);

  const contextValue = {
    filters,
    setFilters,
    tableOrders,
    setTableOrders,
    tablePatients,
    setTablePatients,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

// Create a custom hook to use the context
export const useDataContext = () => {
  return useContext(DataContext);
};

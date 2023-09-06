/* 
// Created by Laraib Sarfraz on 29/08/2023.
// Company: Codistan Pvt ltd.
//
// Current developer:  Laraib Sarfraz
// Edited by : [if any]
//
// Reference: [if any]
*/

import COLORS from './theme';

const filtersData = [
  {label: 'Highly Recommended', color: COLORS.RED},
  {label: 'Recommended', color: COLORS.ORANGE},
  {label: 'Not Recommended', color: COLORS.BLUE},
];

const tableDataOrders = [
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
  {patientName: 'John Doe', recommendation: 'Recommended', status: 'Mixing'},
  {
    patientName: 'Jane Smith',
    recommendation: 'Not Recommended',
    status: 'Shipped',
  },
  {
    patientName: 'Laura Butler',
    recommendation: 'Highly Recommended',
    status: 'Ordered',
  },
];

const tableDataPatients = [
  {
    patientId: 1,
    dateAdded: 'Aug 03,2023',
    patientName: 'Laura Butler',
    status: 'Ordered',
  },
  {
    patientId: 2,
    dateAdded: 'Aug 04,2023',
    patientName: 'Jane Smith',
    status: 'Shipped',
  },
  {
    patientId: 3,
    dateAdded: 'Aug 05,2023',
    patientName: 'Mahira Khan',
    status: 'Ordered',
  },
  {
    patientId: 4,
    dateAdded: 'Aug 05,2023',
    patientName: 'Ali Khan',
    status: 'Mixing',
  },
];

const testResultsCardData = [
  {
    recommendedBy: 'Nichole Chandler',
    orderedBy: 'Julie Smith',
    recommendedStatus: 'Recommended',
    uploadedDate: 'Mar 21, 2023 09:24:45 AM',
    testResults: 'View',
  },
  {
    recommendedBy: 'Ali Chandler',
    orderedBy: 'Ahmad Smith',
    recommendedStatus: 'Not Recommended',
    uploadedDate: 'Mar 22, 2023 02:24:45 AM',
    testResults: 'View',
  },
  {
    recommendedBy: 'Shahid Chandler',
    orderedBy: 'Mahira Smith',
    recommendedStatus: 'Highly Recommended',
    uploadedDate: 'Mar 23, 2023 06:24:45 AM',
    testResults: 'View',
  },
];

export {filtersData, tableDataOrders, tableDataPatients, testResultsCardData};

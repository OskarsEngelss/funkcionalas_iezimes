import React from 'react';

function TableRow({ english, latvian }) {
  return (
    <tr>
      <td>{english}</td>
      <td>{latvian}</td>
    </tr>
  );
}

export default TableRow;
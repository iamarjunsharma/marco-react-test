import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// Component for Table
function TableContainer(props) {
  return (
    <div className="table-wrapper">
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false} className="table-header">
          <TableRow>
            <TableHeaderColumn className="table-header-column">Year</TableHeaderColumn>
            <TableHeaderColumn className="table-header-column">Lbs</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover displayRowCheckbox={false}>
          {Object.keys(props.data).map(k => (
            <TableRow key={k}>
              <TableRowColumn>{k}</TableRowColumn>
              <TableRowColumn>{props.data[k].lbs}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// Props validation
TableContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default TableContainer;

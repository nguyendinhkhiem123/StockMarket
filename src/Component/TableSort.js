import React, { Component } from 'react';

class TableSort extends Component {
    render() {
        return (
            <table className="table-price fixed-header">
            <thead>
              <tr>
                <th rowSpan={2} className=" sortable">Mã CK</th>
                <th rowSpan={2} className=" sortable">TC</th>
                <th rowSpan={2} className=" sortable">Trần</th>
                <th rowSpan={2} className=" sortable">Sàn</th>
                <th rowSpan={2} className="sortable has-toggle"><a className="btn-link btn-sm toggle-left"><i className="fa fa-caret-left" /></a><span className="slidable"><span className="has-content">Tổng
                      KL</span></span><a className="btn-link btn-sm toggle-right"><i className="fa fa-caret-right" /></a></th>
                <th colSpan={6}>Bên mua</th>
                <th className="sortable" colSpan={3}>Khớp lệnh</th>
                <th colSpan={6}>Bên bán</th>
                <th colSpan={3} className="sortable">Giá</th>
              </tr>
              <tr>
                <th className="sortable">Giá 3</th>
                <th className="sortable">KL 3</th>
                <th className="sortable">Giá 2</th>
                <th className="sortable">KL 2</th>
                <th className="sortable">Giá 1</th>
                <th className="sortable">KL 1</th>
                <th className=" sortable">Giá</th>
                <th className=" sortable">KL</th>
                <th className=" sortable has-toggle"><a className="btn-link btn-sm toggle-left"><i className="fa fa-caret-left" /></a><span className="slidable"><span className="has-content">+/-</span></span><a className="btn-link btn-sm toggle-right"><i className="fa fa-caret-right" /></a></th>
                <th className="sortable">Giá 1</th>
                <th className="sortable">KL 1</th>
                <th className="sortable">Giá 2</th>
                <th className="sortable">KL 2</th>
                <th className="sortable">Giá 3</th>
                <th className="sortable">KL 3</th>
                <th className=" sortable">Cao</th>
                <th className=" sortable">TB</th>
                <th className=" sortable">Thấp</th>
              </tr>
            </thead>
          </table>
        );
    }
}

export default TableSort;
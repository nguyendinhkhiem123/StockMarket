import React, { Component } from 'react';

class TableItem extends Component {
    render() {
        var {
        macp,
        giaTC,
        giaTran,
        giaSan,
        ktTong,
        giaMua3,
        klMua3,
        giaMua2,
        klMua2,
        giaMua1,
        klMua1,
        gia,
        kl,
        giaBan1,
        klBan1,
        giaBan2,
        klBan2,
        giaBan3,
        klBan3 } = this.props;
    
        return (
            <tbody>
                <tr id="AAA" className="line-stock" data-scroll-page={0}>
                    <td className="txtl has-tooltip company-tooltip has-symbol " data-tooltip="Công ty cổ phần Nhựa An Phát Xanh"> <a className="symbol txt-lime" id="AAAsym"><span className="has-symbol">{macp}</span></a> </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" data-tooltip="Click đúp để đặt lệnh"> <span className="txt-standard" id="AAAstandard">{giaTC}</span>
                    </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell" data-tooltip="Click đúp để đặt lệnh"> <span id="AAAceil" className="txt-floor">{giaTran}</span>
                    </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" data-tooltip="Click đúp để đặt lệnh"> <span id="AAAfloor" className="txt-ceil">{giaSan}</span>
                    </td>
                    <td> <span className="slider-accumulatedVol" style={{"display":"none"}}> <span id="AAAtvol" className="has-content">{ktTong}</span> </span> <span className="slider-accumulatedVal"> <span id="AAAtval" className="has-content">71,924</span>
                        </span>
                    </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom sell" data-tooltip="Click đúp để đặt lệnh">
                        <span id="AAAbP3">{giaMua3}</span>
                    </td>
                    <td> <span id="AAAbV3">{klMua3}</span> </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom sell" data-tooltip="Click đúp để đặt lệnh">
                        <span id="AAAbP2">{giaMua2}</span>
                    </td>
                    <td> <span id="AAAbV2">{klMua2}</span> </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom sell" data-tooltip="Click đúp để đặt lệnh">
                        <span id="AAAbP1">{giaMua1}</span>
                    </td>
                    <td> <span id="AAAbV1">{klMua1}</span> </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" data-tooltip="Click đúp để đặt lệnh"> <span id="AAAmatchP">{gia}</span>
                    </td>
                    <td className="cell-highlight"> <span id="AAAmatchV">{kl}</span> </td>
                    <td className="cell-highlight"> <span className="slider-changeRaw" style={{}}> <span id="AAAchange" className="txt-lime has-content">{}</span>
                        {/* </span> <span
                                class="slidable slider-changePercent" style="display: none;"> <span id="AAApercent"
                                    class="txt-lime has-content"> 0.6<small>%</small> </span> </span>  */}
                        </span></td>
                    <td className="has-tooltip price-tooltip tooltip-bottom" data-tooltip="Click đúp để đặt lệnh">
                        <span id="AAAoP1">{giaBan3}</span>
                    </td>
                    <td> <span id="AAAoV1">{klBan3}</span> </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom" data-tooltip="Click đúp để đặt lệnh">
                        <span id="AAAoP2">{giaBan2}</span>
                    </td>
                    <td> <span id="AAAoV2">{klBan2}</span> </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom" data-tooltip="Click đúp để đặt lệnh">
                        <span id="AAAoP3">{giaBan1}</span>
                    </td>
                    <td> <span id="AAAoV3">{klBan1}</span> </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight sell" data-tooltip="Click đúp để đặt lệnh"> <span id="AAAhighP">0</span>
                    </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" data-tooltip="Click đúp để đặt lệnh"> <span id="AAAavgP">0</span>
                    </td>
                    <td className="has-tooltip price-tooltip tooltip-bottom cell-highlight" data-tooltip="Click đúp để đặt lệnh"> <span id="AAAlowP">0</span>
                    </td>
               </tr>
          </tbody>
        );
    }
}
export default TableItem;
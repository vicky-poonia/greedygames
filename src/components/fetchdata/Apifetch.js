// rce or rfce
import React, { useState } from 'react';
import moment from "moment";
import { DatePicker } from 'antd';
import '../fetchdata/apifetch.css';
import "bootstrap/dist/css/bootstrap.css";

const { RangePicker } = DatePicker;

const Apifetch = () => {
  const [show, setShow] = useState(false);

  fetch("http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03").then((data) => {
    return data.json().then((objectdata) => {
      console.log(objectdata)
    })
  })
  return (
    <>
      <div className='container'>
        <div className='bbttn'>
          <h1>Analytics</h1>
          <span> <RangePicker />
            <button className="btn btn-primary" onClick={() => setShow(!show)}>setting</button>
          </span>
        </div>
        {show && <div className="outerd">
          <div className="columns">
            <h6>Dimensions and metrics</h6>
            <button className="btn btn-outline-secondary">Date</button>
            <button className="btn btn-outline-secondary">App</button>
            <button className="btn btn-outline-secondary">Clicks</button>
            <button className="btn btn-outline-secondary">Ad Request</button>
            <button className="btn btn-outline-secondary">Ad Response</button>
            <button className="btn btn-outline-secondary">Impression</button>
            <button className="btn btn-outline-secondary">Revenue</button>
            <button className="btn btn-outline-secondary">Fill Rate</button>
            <button className="btn btn-outline-secondary">CTR</button>
          </div>
          <button className="btn btn-primary btn1">Close</button>
          <button className="btn btn-primary">Apply Changes</button>
        </div>}
        <div className="table">
          <div className="table-responsive min-h-500px">
            <table className="table mb-0 text-nowrap text-wrap-table">
              <thead className="table_thread_1">
                <tr>
                  <th scope="col" className="border-0"> App </th>
                  <th scope="col" className="border-0"> Clicks </th>
                  {/* <th scope="col" className="border-0"> Requests </th>
                  <th scope="col" className="border-0"> Responses </th>
                  <th scope="col" className="border-0"> Revenue </th>
                  <th scope="col" className="border-0"> Fill rate </th>
                  <th scope="col" className="border-0"> CTR </th> */}
                  <th scope="col" className="border-0" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="align-middle border-top-0"> {moment(("premiered"))?.format("DD MMM YYYY")} </td>
                  <td className="align-middle border-top-0"> {("123")} </td>
                  <td className="align-middle border-top-0"> {("456")} </td>
                  <td className="align-middle border-top-0"> {("789")} </td>
                  <td className="align-middle border-top-0"> {("123")} </td>
                  <td className="align-middle border-top-0"> {("456")} </td>
                  <td className="align-middle border-top-0"> {("789")} </td>
                  <td className="align-middle border-top-0"> {("123")} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Apifetch;


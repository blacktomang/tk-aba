import React from 'react'
import Checked from '../icons/checked';
import X from '../icons/notyet';
import { CustomFeature, ComparisonContainer, TrialFeature, ComparisonBody } from './comparison.styles';

function Comparison({ title, name, trial,pro, custom  }) {
  return (
    <>
      <ComparisonContainer>
        <h4>Fitur WMS</h4>
        <h4>Free</h4>
        <h4>Pro</h4>
        <h4>Custom</h4>
      </ComparisonContainer>
      <ComparisonBody>
        <h5>Dashboard Report</h5>
        <div className="feature">
          <table>
            <tbody>
              <tr>
                <td><h6>Laporan Penjualan</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Laporan Pembelian</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Laporan Stok</h6></td>
                <td><Checked/></td>
                <td><Checked/></td>
                <td><Checked/></td>
              </tr> <tr>
                <td><h6>Laporan Penjualan</h6></td>
                <td><Checked/></td>
                <td><Checked/></td>
                <td><Checked/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5>Inventory Management</h5>
        <div className="feature">
          <table>
            <tbody>
              <tr>
                <td><h6>Manajemen Database Produk</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Inbound/ Outbound Notes</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Stok Opname</h6></td>
                <td><Checked/></td>
                <td><Checked/></td>
                <td><Checked/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5>Warehouse Rental Management</h5>
        <div className="feature">
          <table>
            <tbody>
              <tr>
                <td><h6>Manajemen Biaya Sewa Gudang</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Outbound/ Inbound Notes</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5>Accounting & Finance</h5>
        <div className="feature">
          <table>
            <tbody>
              <tr>
                <td><h6>General Ledger</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Account Recieveable & Payable</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Invoicing</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Cash Management</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5>Customer Relation Management</h5>
        <div className="feature">
          <table>
            <tbody>
              <tr>
                <td><h6>Customer List & Review</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Sales Quote Order</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Project Management</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5>Human Resource Management</h5>
        <div className="feature">
          <table>
            <tbody>
              <tr>
                <td><h6>Human Resource Portal</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Payroll</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Daily Basis Fee</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5>Business Intelligence <span>(Big Data / Analisis Data)</span></h5>
        <div className="feature">
          <table>
            <tbody>
              <tr>
                <td><h6>Human Resource Portal</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Payroll</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
              <tr>
                <td><h6>Daily Basis Fee</h6></td>
                <td><X/></td>
                <td><X/></td>
                <td><Checked/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </ComparisonBody>
    </>
  );
}

export default Comparison;
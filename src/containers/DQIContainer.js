import React from 'react';
import { connect } from 'react-redux';
import DonutChart from '../components/DonutChart'

function DQIContainer () {
    return (
        <div className="col-md-8 col-sm-8 col-xs-12">
          <div className="x_panel tile overflow_hidden">
            <div className="x_title">
              <h2 className="chartHeading">Data Quality</h2>
              <ul className="nav navbar-right panel_toolbox">
                <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Settings 1</a>
                    </li>
                    <li><a href="#">Settings 2</a>
                    </li>
                  </ul>
                </li>
                <li><a className="close-link"><i className="fas fa-times"></i></a>
                </li>
              </ul>
              <div className="clearfix"></div>
              <DonutChart />
            </div>
          </div>
         
        </div>
    )
}

const mapStateToProps = state => {
	console.log("DQIContainer.state==>", state);
	return {
		orgDataQuality: state.testSuites.orgDataQuality
	};
};

export default connect(mapStateToProps)(DQIContainer);